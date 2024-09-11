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

// Helper function to get a random node based on dataNodeId
function getRandomObjectByDatanodeId(intArray, objectArray) {
    const randomId = intArray[Math.floor(Math.random() * intArray.length)];
    const filteredObjects = objectArray.filter(obj => obj.dataNodeId === randomId);
    return filteredObjects.length > 0 ? filteredObjects[Math.floor(Math.random() * filteredObjects.length)] : null;
}

