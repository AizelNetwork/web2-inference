// routes/apiRoutes.js
const express = require('express');
const authController = require('../controllers/authController');
const modelController = require('../controllers/modelController');
const inferenceController = require('../controllers/inferenceController');
const authenticate = require('../utils/authMiddleware');

const router = express.Router();

// API route to generate app key
router.post('/v1/generate-app-key', authController.generateAppKey);

// API to fetch models
router.get('/v1/models', authenticate, modelController.fetchModels);

// API to launch inference
router.post('/v1/inferences', authenticate, inferenceController.launchInference);

module.exports = router;
