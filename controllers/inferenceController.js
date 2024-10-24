const { ethers } = require('ethers');
const axios = require('axios');
const db = require('../config/db');
const config = require('../config/config');
const abis = require('../config/abis');
const Elgamal = require('../utils/elgamal');
// Import Mutex to handle concurrency
const { Mutex } = require('async-mutex');

// Initialize Elgamal encryption
const elgamal = new Elgamal();

// Create a map to track nonces and mutexes for each user and network
const userStateMap = new Map();

function getUserState(address, network_id) {
    const key = `${address}_${network_id}`; // Combine address and network_id as a unique key
    if (!userStateMap.has(key)) {
        userStateMap.set(key, { mutex: new Mutex(), nonce: null });
    }
    return userStateMap.get(key);
}

async function getNetworkConfig(network_name) {
    // Fetch the network configuration and smart contracts from the database
    const [networkResult] = await db.query(`
        SELECT n.evm_chain_id, n.rpc_url, c.smart_contract_name, c.smart_contract_address 
        FROM networks n
        JOIN contracts c ON n.id = c.network_id
        WHERE n.network_name = ?`, [network_name]);

    if (networkResult.length === 0) {
        throw new Error('No network or smart contracts found for this network');
    }

    // Extract the evm_chain_id and rpc_url from the first result
    const { evm_chain_id, rpc_url } = networkResult[0];

    // Build contract address mappings
    const contracts = {};
    networkResult.forEach(contract => {
        contracts[contract.smart_contract_name] = contract.smart_contract_address;
    });

    // Get the API endpoints from the config file (if necessary)
    const api_endpoints = config.API_ENDPOINTS;

    // Combine the network configuration
    const networkConfig = {
        network_name: network_name,
        evm_chain_id: evm_chain_id,
        rpc_url: rpc_url,
        contracts: contracts,
        api_endpoints: api_endpoints
    };

    return networkConfig;
}


exports.launchInferenceAndGetRequestId = async (req, res) => {
    try {
        const { model_id, user_input, system_prompt, temperature, max_tokens, network_name } = req.body;

        if (!network_name) {
            return res.status(400).json({ error: 'Network name is required' });
        }

        // Fetch network and contract configurations from the database using network_name
        const networkConfig = await getNetworkConfig(network_name);

        // Initialize provider with the fetched RPC URL
        const provider = new ethers.getDefaultProvider(networkConfig.rpc_url);

        // Fetch user's private key, public key, and address from the database using appKey
        const appKey = req.headers['authorization']?.split(' ')[1];
        const [userResult] = await db.query('SELECT private_key, public_key, address FROM users WHERE app_key = ?', [appKey]);

        if (userResult.length === 0) {
            return res.status(401).json({ error: 'Invalid app key' });
        }

        // Fetch user data
        const user = userResult[0];

        const userPrivateKey = user.private_key;
        let userPublicKey = user.public_key;
        const userAddress = user.address;

        // Remove '0x' prefix if present in the user's public key
        if (userPublicKey.startsWith('0x')) {
            userPublicKey = userPublicKey.slice(2);
        }

        // Initialize the user's wallet
        const userWallet = new ethers.Wallet(userPrivateKey, provider);

        // Initialize contracts with the contract addresses from the fetched configuration
        const inferenceContractAddress = networkConfig.contracts.INFERENCE;
        const nodeContractAddress = networkConfig.contracts.INFERENCE_NODE;
        const modelContractAddress = networkConfig.contracts.MODEL;

        const inferenceContract = new ethers.Contract(inferenceContractAddress, abis.Inference, userWallet);
        const nodeContract = new ethers.Contract(nodeContractAddress, abis.NodeRegistry, userWallet);
        const modelContract = new ethers.Contract(modelContractAddress, abis.Model, userWallet);

        // Define input_data
        let input_data = JSON.stringify(user_input); // Ensuring user_input is in JSON string format
        if (model_id != 6 && model_id != 9) {
            input_data = `### System:\n${system_prompt}\n### Human:\n${input_data}`;
            console.log("model id is not 6 or 9, using combined system prompt and user input");
        } else if (model_id == 9) {
            input_data = user_input;
        } else {
            console.log("model id is 6, using user_input directly");
        }
        console.log("model id : "+model_id);
        // Fetch data nodes for the model
        const dataNodes = await modelContract.getDataNodesForModel(model_id);
        const nodesData = await nodeContract.getAllActiveNodes();

        const node = getRandomObjectByDatanodeId(dataNodes, nodesData);
        if (!node) {
            throw new Error('No matching node found for the selected data nodes.');
        }

        const nodeId = node.nodeId;
        const nodePublicKey = node.pubkey;
        console.log("nodeId : "+ nodeId);
        // Encrypt the input data with the node's and user's public key
        const encryptedByNode = elgamal.encrypt(Buffer.from(input_data), Buffer.from(nodePublicKey, 'hex'));
        const encryptedByUser = elgamal.encrypt(Buffer.from(input_data), Buffer.from(userPublicKey, 'hex'));

        // Send inference request to the API with encrypted data
        const apiResponse = await axios.post(networkConfig.api_endpoints.INFERENCE_LAUNCH, {
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

        // Declare tx variable outside the mutex block
        let tx;
        // Handle user-specific nonce and transaction
        const userState = getUserState(userAddress);
        await userState.mutex.runExclusive(async () => {
            // If nonce is not cached, fetch it from the provider
            if (userState.nonce === null) {
                userState.nonce = await provider.getTransactionCount(userAddress, 'pending');
            }

            // Blockchain transaction to register inference with local nonce
            tx = await inferenceContract.requestInference(
                Number(nodeId),
                model_id,
                inputHash,
                userPublicKey,
                "0x0000000000000000000000000000000000000000",
                ethers.parseEther('0.0000001'),
                {
                    from: userAddress,
                    value: ethers.parseEther('0.0000001'),
                    nonce: userState.nonce // Use local nonce
                }
            );

            // Increment local nonce for the next transaction
            userState.nonce++;
        });

        // Wait for the transaction to be mined
        await tx.wait();

        // Fetch the transaction receipt to get the requestId
        const receipt = await provider.getTransactionReceipt(tx.hash);

        if (!receipt) {
            return res.status(404).json({ error: 'Transaction receipt not found' });
        }

        // Decoding the event logs to get the requestId
        const log = receipt.logs.find(log => log.address.toLowerCase() === inferenceContractAddress.toLowerCase());
        if (!log) {
            return res.status(404).json({ error: 'No logs found related to the Inference contract' });
        }

        const requestId = BigInt(log.topics[1]).toString();

        // Return the requestId to the user
        res.status(200).json({ requestId: requestId });
    } catch (error) {
        console.error('Error launching inference and fetching requestId:', error.message || error);
        res.status(500).json({ error: 'Failed to launch inference', details: error.message });
    }
};

exports.launchInferenceAndGetTx = async (req, res) => {
    try {
        const { model_id, user_input, system_prompt, temperature, max_tokens, network_name } = req.body;

        if (!network_name) {
            return res.status(400).json({ error: 'Network name is required' });
        }

        // Fetch network and contract configurations from the database using network_name
        const networkConfig = await getNetworkConfig(network_name);

        // Debugging log to verify contracts and provider setup
        console.log('Network Configuration:', networkConfig);

        // Initialize provider with the fetched RPC URL
        const provider = new ethers.getDefaultProvider(networkConfig.rpc_url);

        // Fetch user's private key, public key, and address from the database using appKey
        const appKey = req.headers['authorization']?.split(' ')[1];
        const [userResult] = await db.query('SELECT private_key, public_key, address FROM users WHERE app_key = ?', [appKey]);

        if (userResult.length === 0) {
            return res.status(401).json({ error: 'Invalid app key' });
        }

        // Fetch user data
        const user = userResult[0];

        const userPrivateKey = user.private_key;
        let userPublicKey = user.public_key;
        const userAddress = user.address;

        // Remove '0x' prefix if present in the user's public key
        if (userPublicKey.startsWith('0x')) {
            userPublicKey = userPublicKey.slice(2);
        }

        // Initialize the user's wallet
        const userWallet = new ethers.Wallet(userPrivateKey, provider);

        // Initialize contracts with the contract addresses from the fetched configuration
        const inferenceContractAddress = networkConfig.contracts.INFERENCE;
        const nodeContractAddress = networkConfig.contracts.INFERENCE_NODE;
        const modelContractAddress = networkConfig.contracts.MODEL;

        const inferenceContract = new ethers.Contract(inferenceContractAddress, abis.Inference, userWallet);
        const nodeContract = new ethers.Contract(nodeContractAddress, abis.NodeRegistry, userWallet);
        const modelContract = new ethers.Contract(modelContractAddress, abis.Model, userWallet);

        // Define input_data
        let input_data = JSON.stringify(user_input); // Ensuring user_input is in JSON string format
        if (model_id != 6 && model_id != 9) {
            input_data = `### System:\n${system_prompt}\n### Human:\n${input_data}`;
            console.log("model id is not 6 or 9, using combined system prompt and user input");
        } else if (model_id == 9) {
            input_data = user_input;
        } else {
            console.log("model id is 6, using user_input directly");
        }
        console.log("model id : "+model_id);
        // Fetch data nodes for the model
        const dataNodes = await modelContract.getDataNodesForModel(model_id);
        const nodesData = await nodeContract.getAllActiveNodes();

        console.log(dataNodes);
        console.log(nodesData);
        const node = getRandomObjectByDatanodeId(dataNodes, nodesData);
        if (!node) {
            throw new Error('No matching node found for the selected data nodes.');
        }

        const nodeId = node.nodeId;
        const nodePublicKey = node.pubkey;
        console.log("nodeId : "+ nodeId);
        // Encrypt the input data with the node's and user's public key
        const encryptedByNode = elgamal.encrypt(Buffer.from(input_data), Buffer.from(nodePublicKey, 'hex'));
        const encryptedByUser = elgamal.encrypt(Buffer.from(input_data), Buffer.from(userPublicKey, 'hex'));

        // Send inference request to the API with encrypted data
        const apiResponse = await axios.post(networkConfig.api_endpoints.INFERENCE_LAUNCH, {
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

        // Declare tx variable outside the mutex block
        let tx;
        // Handle user-specific nonce and transaction
        const userState = getUserState(userAddress);
        await userState.mutex.runExclusive(async () => {
            // If nonce is not cached, fetch it from the provider
            if (userState.nonce === null) {
                userState.nonce = await provider.getTransactionCount(userAddress, 'pending');
            }

            // Blockchain transaction to register inference with local nonce
            tx = await inferenceContract.requestInference(
                Number(nodeId),
                model_id,
                inputHash,
                userPublicKey,
                "0x0000000000000000000000000000000000000000",
                ethers.parseEther('0.0000001'),
                {
                    from: userAddress,
                    value: ethers.parseEther('0.0000001'),
                    nonce: userState.nonce // Use local nonce
                }
            );

            // Increment local nonce for the next transaction
            userState.nonce++;
        });
        // return the txHash to user
        res.status(200).json({ txHash: tx.hash });
    } catch (error) {
        console.error('Error launching inference and fetching requestId:', error.message || error);
        res.status(500).json({ error: 'Failed to launch inference', details: error.message });
    }
};


exports.getRequestIdFromTxHash = async (req, res) => {
    try {
        const { txHash, network_name } = req.body;

        if (!txHash) {
            return res.status(400).json({ error: 'Transaction hash is required' });
        }

        if (!network_name) {
            return res.status(400).json({ error: 'Network name is required' });
        }

        // Fetch network and contract configurations from the database using network_name
        const networkConfig = await getNetworkConfig(network_name);

        // Initialize provider with the fetched RPC URL
        const provider = new ethers.getDefaultProvider(networkConfig.rpc_url);

        // Fetch the transaction receipt using the transaction hash
        const receipt = await provider.getTransactionReceipt(txHash);

        if (!receipt) {
            return res.status(404).json({ error: 'Transaction receipt not found' });
        }

        // Initialize the InferenceContract instance
        const inferenceContract = new ethers.Contract(networkConfig.contracts.INFERENCE, abis.Inference, provider);

        // Find the log that matches the InferenceContract address
        const log = receipt.logs.find(log => log.address.toLowerCase() === inferenceContract.target.toLowerCase());

        if (!log) {
            return res.status(404).json({ error: 'No logs found related to the Inference contract' });
        }

        // Decoding the event log to get the requestId
        const requestId = BigInt(log.topics[1]).toString();

        // Return the requestId
        res.status(200).json({ requestId: requestId });
    } catch (error) {
        console.error('Error fetching requestId:', error.message || error);
        res.status(500).json({ error: 'Failed to fetch requestId', details: error.message });
    }
};

exports.fetchInferenceOutput = async (req, res) => {
    try {
        const { requestId, network_name } = req.body;
        const appKey = req.headers['authorization']?.split(' ')[1];

        if (!requestId) {
            return res.status(400).json({ error: 'requestId is required' });
        }

        if (!network_name) {
            return res.status(400).json({ error: 'Network name is required' });
        }

        // Fetch user's private key from the database using appKey
        const [user] = await db.query('SELECT private_key FROM users WHERE app_key = ?', [appKey]);
        if (user.length === 0) {
            return res.status(401).json({ error: 'Invalid app key' });
        }

        const userPrivateKey = user[0].private_key;

        // Fetch the inference output based on requestId
        const inferenceResult = await getInferenceOutput(requestId,network_name);

        if (!inferenceResult) {
            return res.status(404).json({ error: 'No valid inference result found' });
        }

        // Check the status of the inference request
        if (inferenceResult.status !== 'Success') {
            // If not successful, return the current status
            return res.status(200).json({ status: inferenceResult.status });
        }

        // If status is 'Success', decrypt the output
        if (!inferenceResult.output) {
            return res.status(404).json({ error: 'No output available for decryption' });
        }

        const decryptedOutput = await decryptInferenceResult(inferenceResult.output, userPrivateKey);

        // Return the decrypted output
        res.status(200).json({ decryptedOutput: decryptedOutput });
    } catch (error) {
        console.error('Error fetching inference output:', error.message || error);
        res.status(500).json({ error: 'Failed to fetch inference output', details: error.message });
    }
};

// Function to fetch the inference output using requestId
async function getInferenceOutput(requestId, network_name) {
    try {
        // Fetch network and contract configurations from the database using network_name
        const networkConfig = await getNetworkConfig(network_name);
        const url = `${networkConfig.api_endpoints.INFERENCE_LIST}?inference_id=${requestId}&order_asc=false&prev=false`;
        const response = await axios.get(url);
        
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

