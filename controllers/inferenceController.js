const { ethers } = require('ethers');
const axios = require('axios');
const db = require('../config/db');
const config = require('../config/config');
const abis = require('../config/abis');
const Elgamal = require('../utils/elgamal');

// Initialize Elgamal encryption
const elgamal = new Elgamal();

exports.launchInference = async (req, res) => {
    try {
        const { model_id, input_data } = req.body;

        console.log('Received model_id:', model_id);
        console.log('Received input_data:', input_data);

        // Fetch user's private key, public key, and address from the database using appKey
        const appKey = req.headers['authorization']?.split(' ')[1];
        const [user] = await db.query('SELECT private_key, public_key, address FROM users WHERE app_key = ?', [appKey]);
        if (user.length === 0) {
            return res.status(401).json({ error: 'Invalid app key' });
        }

        const userPrivateKey = user[0].private_key;
        let userPublicKey = user[0].public_key;
        const userAddress = user[0].address;

        // Remove '0x' prefix if present in the user's public key
        if (userPublicKey.startsWith('0x')) {
            userPublicKey = userPublicKey.slice(2);
        }

        console.log('User Private Key:', userPrivateKey);
        console.log('User Public Key (after removing 0x if present):', userPublicKey);
        console.log('User Address:', userAddress);

        // Initialize the user's wallet using the user's private key (from config)
        const userWallet = new ethers.Wallet(userPrivateKey, ethers.getDefaultProvider(config.RPC_URL));
        // Initialize contracts using user's wallet
        const nodeContract = new ethers.Contract(config.CONTRACT_ADDRESSES.NODE_REGISTRY, abis.NodeRegistry, userWallet);
        const modelContract = new ethers.Contract(config.CONTRACT_ADDRESSES.MODEL, abis.Model, userWallet);
        const inferenceContract = new ethers.Contract(config.CONTRACT_ADDRESSES.INFERENCE, abis.Inference, userWallet);

        // Fetch data nodes for the model
        const dataNodes = await modelContract.getDataNodesForModel(model_id);
        const nodesData = await nodeContract.getAllActiveNodes();

        const node = getRandomObjectByDatanodeId(dataNodes, nodesData);
        if (!node) {
            throw new Error('No matching node found for the selected data nodes.');
        }

        const nodeId = node.nodeId;
        const nodePublicKey = node.pubkey;

        console.log('Selected node_id:', nodeId);

        // Encrypt the input data with the node's and user's public key
        const encryptedByNode = elgamal.encrypt(Buffer.from(input_data), Buffer.from(nodePublicKey, 'hex'));
        const encryptedByUser = elgamal.encrypt(Buffer.from(input_data), Buffer.from(userPublicKey, 'hex'));

        // Send inference request to the API with encrypted data
        const apiResponse = await axios.post(config.API_ENDPOINTS.INFERENCE_LAUNCH, {
            requester: userAddress,
            node_id: Number(nodeId),
            model_id: Number(model_id),
            input_encrypt_by_node: encryptedByNode,
            input_encrypt_by_user: encryptedByUser,
            pubkey: userPublicKey,
            session: "cli-session"
        });

        if (apiResponse.status !== 200) {
            console.error('API Response Error:', apiResponse.data);
            throw new Error(`Inference launch failed: ${apiResponse.data.error}`);
        }

        const inputHash = apiResponse.data;

        // Blockchain transaction to register inference using the deployer's wallet
        const tx = await inferenceContract.requestInference(
            Number(nodeId),
            model_id,
            inputHash,
            userPublicKey,
            "0x0000000000000000000000000000000000000000",
            ethers.parseEther('0.0000001'),
            { from: userAddress, value: ethers.parseEther('0.0000001') }
        );

        console.log(`Transaction hash: ${tx.hash}`);
        await tx.wait();

        res.status(200).json({ message: 'Inference launched successfully', txHash: tx.hash });
    } catch (error) {
        if (error.response) {
            console.error('API Response Error:', error.response.data);
            return res.status(500).json({ error: 'Failed to launch inference', details: error.response.data });
        } else {
            console.error('Error launching inference:', error.message || error);
            return res.status(500).json({ error: 'Failed to launch inference', details: error.message });
        }
    }
};

exports.getRequestIdFromTxHash = async (req, res) => {
    try {
        const { txHash } = req.body;

        if (!txHash) {
            return res.status(400).json({ error: 'Transaction hash is required' });
        }

        console.log(`Fetching transaction receipt for txHash: ${txHash}`);

        // Fetch the transaction receipt using the transaction hash
        const receipt = await ethers.getDefaultProvider(config.RPC_URL).getTransactionReceipt(txHash);

        if (!receipt) {
            return res.status(404).json({ error: 'Transaction receipt not found' });
        }

        console.log('Transaction receipt logs:', receipt.logs);

        // Initialize the InferenceContract instance
        const inferenceContract = new ethers.Contract(config.CONTRACT_ADDRESSES.INFERENCE, abis.Inference, ethers.getDefaultProvider(config.RPC_URL));

        // Find the log that matches the InferenceContract address
        const log = receipt.logs.find(log => log.address.toLowerCase() === inferenceContract.target.toLowerCase());

        if (!log) {
            return res.status(404).json({ error: 'No logs found related to the Inference contract' });
        }

        console.log('Log found:', log);

        // Decoding the event log to get the requestId
        const requestId = BigInt(log.topics[1]).toString();

        console.log(`Decoded requestId: ${requestId}`);

        // Return the requestId
        res.status(200).json({ requestId: requestId });
    } catch (error) {
        console.error('Error fetching requestId:', error.message || error);
        res.status(500).json({ error: 'Failed to fetch requestId', details: error.message });
    }
};

exports.fetchInferenceOutput = async (req, res) => {
    try {
        const { requestId } = req.body;
        const appKey = req.headers['authorization']?.split(' ')[1];

        if (!requestId) {
            return res.status(400).json({ error: 'requestId is required' });
        }

        // Fetch user's private key from the database using appKey
        const [user] = await db.query('SELECT private_key FROM users WHERE app_key = ?', [appKey]);
        if (user.length === 0) {
            return res.status(401).json({ error: 'Invalid app key' });
        }

        const userPrivateKey = user[0].private_key;

        // Fetch the inference output based on requestId
        const inferenceResult = await getInferenceOutput(requestId);

        if (!inferenceResult) {
            return res.status(404).json({ error: 'No valid inference result found' });
        }

        // Check the status of the inference request
        if (inferenceResult.status !== 'Success') {
            // If not successful, return the current status
            console.log(`Current Inference Status: ${inferenceResult.status}`);
            return res.status(200).json({ status: inferenceResult.status });
        }

        // If status is 'Success', decrypt the output
        if (!inferenceResult.output) {
            return res.status(404).json({ error: 'No output available for decryption' });
        }

        const decryptedOutput = await decryptInferenceResult(inferenceResult.output, userPrivateKey);
        console.log("Decrypted Inference Output:", decryptedOutput);

        // Return the decrypted output
        res.status(200).json({ decryptedOutput: decryptedOutput });
    } catch (error) {
        console.error('Error fetching inference output:', error.message || error);
        res.status(500).json({ error: 'Failed to fetch inference output', details: error.message });
    }
};

// Function to fetch the inference output using requestId
async function getInferenceOutput(requestId) {
    try {
        const url = `${config.API_ENDPOINTS.INFERENCE_LIST}?inference_id=${requestId}&order_asc=false&prev=false`;
        console.log("Fetching inference output from:", url);
        const response = await axios.get(url);
        console.log("API Response:", response.data);

        if (!response.data || !response.data.data || !response.data.data.records) {
            throw new Error("Invalid response structure from API.");
        }

        if (response.data.data.records.length === 0) {
            return null;  // No records found
        }

        return response.data.data.records[0];  // Return the first record (adjust if necessary)
    } catch (error) {
        console.error("Error fetching inference result:", error.response ? error.response.data : error.message);
        throw new Error(`Fetching inference result failed: ${error.message}`);
    }
}

// Function to decrypt the inference result
async function decryptInferenceResult(encryptedOutput, privateKey) {
    try {
        // Log the parameters to verify them
        console.log('Encrypted Output:', encryptedOutput);
        console.log('Private Key:', privateKey);

        // Ensure the encryptedOutput is a valid hex string and remove '0x' if present
        if (encryptedOutput.startsWith('0x')) {
            encryptedOutput = encryptedOutput.slice(2);
        }

        // Ensure the private key is formatted correctly as a hex string and remove '0x' if present
        if (privateKey.startsWith('0x')) {
            privateKey = privateKey.slice(2);
        }

        // Perform the decryption
        const decryptedOutput = elgamal.decrypt(Buffer.from(encryptedOutput, 'hex'), Buffer.from(privateKey, 'hex'));

        // Convert decrypted data from hex to a readable format
        return Buffer.from(decryptedOutput, 'hex').toString();
    } catch (error) {
        console.error('Decryption failed:', error.message);
        throw new Error(`Decryption failed: ${error.message}`);
    }
}



// Helper function to get a random node based on dataNodeId
function getRandomObjectByDatanodeId(intArray, objectArray) {
    const randomId = intArray[Math.floor(Math.random() * intArray.length)];
    const filteredObjects = objectArray.filter(obj => obj.dataNodeId === randomId);
    return filteredObjects.length > 0 ? filteredObjects[Math.floor(Math.random() * filteredObjects.length)] : null;
}

