const { ethers } = require('ethers');
const crypto = require('crypto');
const db = require('../config/db'); // Assuming db.js handles your MySQL connection

exports.generateAppKey = async (req, res) => {
    try {
        // Extract 'name' from the request body
        const { name } = req.body;

        // Check if 'name' is provided
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        // Generate a random app key
        const appKey = crypto.randomBytes(32).toString('hex');

        // Generate EVM key pair
        const wallet = ethers.Wallet.createRandom();
        const privateKey = wallet.privateKey; // 64-character private key
        const publicKey = wallet.publicKey;   // Corresponding public key
        const address = wallet.address;       // EVM address

        // Insert into MySQL DB
        await db.query('INSERT INTO users (name, app_key, private_key, public_key, address) VALUES (?, ?, ?, ?, ?)', [name, appKey, privateKey, publicKey, address]);

        // Return the app key and public details to the user
        res.status(200).json({
            name: name,
            app_key: appKey,
            evm_address: address,
            public_key: publicKey,
        });
    } catch (error) {
        console.error('Error generating app key:', error);
        res.status(500).json({ error: 'Failed to generate app key' });
    }
};
