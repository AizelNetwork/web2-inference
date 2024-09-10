// controllers/authController.js
const { ethers } = require('ethers');
const crypto = require('crypto');
const db = require('../config/config');

exports.generateAppKey = async (req, res) => {
    try {
        // Generate a random app key
        const appKey = crypto.randomBytes(32).toString('hex');

        // Generate EVM key pair
        const wallet = ethers.Wallet.createRandom();
        const privateKey = wallet.privateKey;
        const address = wallet.address;

        // Insert into MySQL DB
        await db.query('INSERT INTO users (app_key, private_key, address) VALUES (?, ?, ?)', [appKey, privateKey, address]);

        // Return the app key to the user
        res.status(200).json({
            app_key: appKey,
            evm_address: address,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate app key' });
    }
};
