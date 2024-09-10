// utils/authMiddleware.js
const db = require('../config/config');

const authenticate = async (req, res, next) => {
    const appKey = req.headers['authorization'];
    if (!appKey) return res.status(401).json({ error: 'Unauthorized, app key missing' });

    // Validate app key from the database
    const [user] = await db.query('SELECT * FROM users WHERE app_key = ?', [appKey]);
    if (!user.length) return res.status(401).json({ error: 'Invalid app key' });

    // Attach user to the request
    req.user = user[0];
    next();
};

module.exports = authenticate;
