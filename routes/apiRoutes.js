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

// API to launch inference and get requestId
router.post('/v1/inferences/launch', authenticate, inferenceController.launchInferenceAndGetRequestId);

// API to launch inference and get txHash
router.post('/v1/inferences/launchTx', authenticate, inferenceController.launchInferenceAndGetTx);

// Route to get requestId from transaction hash
router.post('/v1/inferences/requestId', inferenceController.getRequestIdFromTxHash);

// **NEW** API to fetch inference output based on requestId
router.post('/v1/inferences/output', authenticate, inferenceController.fetchInferenceOutput);

module.exports = router;
