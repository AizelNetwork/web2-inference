// controllers/modelController.js
const axios = require('axios');
const config = require('../config/config');
const db = require('../config/db'); // MySQL connection

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
// Fetch models from the API
exports.fetchModels = async (req, res) => {
    try {
        const { network_name } = req.body;
        // Extract the app key from the request header
        const appKey = req.headers['authorization']?.split(' ')[1];
        if (!appKey) {
            return res.status(401).json({ error: 'Unauthorized, app key missing' });
        }

        // Fetch user's private key from the database based on app key
        const [user] = await db.query('SELECT private_key FROM users WHERE app_key = ?', [appKey]);
        if (user.length === 0) {
            return res.status(401).json({ error: 'Invalid app key' });
        }

        if (!network_name) {
            return res.status(400).json({ error: 'Network name is required' });
        }

        // Fetch network and contract configurations from the database using network_name
        const networkConfig = await getNetworkConfig(network_name);
        // Fetch the models from the external API
        const response = await axios.get(networkConfig.api_endpoints.MODEL_LIST);

        // Extract the models from the response
        const models = response.data.data.models;

        // Return the models in the response
        res.status(200).json({ data: models });
    } catch (error) {
        console.error('Error fetching models:', error.message || error);
        res.status(500).json({ error: 'Failed to fetch models' });
    }
};
