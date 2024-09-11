// utils/authMiddleware.js
const db = require('../config/db');

const authenticate = async (req, res, next) => {
    const appKey = req.headers['authorization']?.split(' ')[1];
    if (!appKey) {
        return res.status(401).json({ error: 'Unauthorized, app key missing' });
    }

    try {
        // Fetch user from the database using app key
        const [user] = await db.query('SELECT * FROM users WHERE app_key = ?', [appKey]);
        if (user.length === 0) {
            return res.status(401).json({ error: 'Invalid app key' });
        }

        // Attach user to the request
        req.user = user[0];
        next();
    } catch (error) {
        console.error('Error during authentication:', error.message || error);
        return res.status(500).json({ error: 'Authentication failed' });
    }
};

module.exports = authenticate;
