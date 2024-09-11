// controllers/modelController.js
const axios = require('axios');
const config = require('../config/config');
const db = require('../config/db'); // MySQL connection

// Fetch models from the API
exports.fetchModels = async (req, res) => {
    try {
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

        // Fetch the models from the external API
        const response = await axios.get(config.API_ENDPOINTS.MODEL_LIST);

        // Extract the models from the response
        const models = response.data.data.models;

        // Return the models in the response
        res.status(200).json({ data: models });
    } catch (error) {
        console.error('Error fetching models:', error.message || error);
        res.status(500).json({ error: 'Failed to fetch models' });
    }
};
