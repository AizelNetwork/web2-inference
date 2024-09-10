// app.js
require('dotenv').config();
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
app.use(express.json());

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
