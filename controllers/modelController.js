// controllers/modelController.js
const axios = require('axios');
const db = require('../config/config');

exports.fetchModels = async (req, res) => {
    try {
        // Fetch models using app key authorization
        const response = await axios.get(`${process.env.MODEL_API_URL}`, {
            headers: { Authorization: `Bearer ${req.headers['authorization']}` },
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch models' });
    }
};
