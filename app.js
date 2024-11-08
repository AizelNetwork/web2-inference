// app.js
require('dotenv').config();
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

// Increase the payload limit using express.json and express.urlencoded
app.use(express.json({ limit: '10mb' }));  // Set a larger limit here
app.use(express.urlencoded({ extended: true, limit: '10mb' }));  // Same limit for URL-encoded data

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
