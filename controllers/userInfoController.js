const bcrypt = require('bcrypt');
const db = require('../config/db');

// Controller function to create or update user info
exports.createUserInfo = async (req, res) => {
    try {
        // Extract the app key from the request header
        const appKey = req.headers['authorization']?.split(' ')[1];
        if (!appKey) {
            return res.status(401).json({ error: 'Unauthorized, app key missing' });
        }

        // Fetch the user information (user_id, name) from the database based on app_key
        const [user] = await db.query('SELECT id, name FROM users WHERE app_key = ?', [appKey]);
        if (user.length === 0) {
            return res.status(401).json({ error: 'Invalid app key' });
        }

        const user_id = user[0].id;
        const name = user[0].name;

        // Extract the other fields from the request body
        const { password, email, phone, avatar } = req.body;

        // Validate required fields
        if (!password || !email) {
            return res.status(400).json({ error: 'Password and email are required' });
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);  // '10' is the salt rounds

        // Check if user_info already exists for this user_id
        const [existingUserInfo] = await db.query('SELECT * FROM user_info WHERE user_id = ?', [user_id]);

        if (existingUserInfo.length > 0) {
            // If user info exists, update the record
            const updateQuery = `
                UPDATE user_info
                SET 
                    password = ?, 
                    email = ?, 
                    phone = ?, 
                    avatar = ?
                WHERE user_id = ?
            `;

            await db.query(updateQuery, [hashedPassword, email, phone || null, avatar || null, user_id]);

            // Return success response
            return res.status(200).json({ message: 'User info updated successfully' });
        }

        // If no existing user info, insert a new record
        const insertQuery = `
            INSERT INTO user_info (user_id, name, password, email, phone, avatar)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        await db.query(insertQuery, [user_id, name, hashedPassword, email, phone || null, avatar || null]);

        // Return success response
        res.status(201).json({ message: 'User info created successfully' });
    } catch (error) {
        console.error('Error inserting or updating user info:', error);
        res.status(500).json({ error: 'Failed to create or update user info', details: error.message });
    }
};
