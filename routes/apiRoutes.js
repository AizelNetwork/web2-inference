const express = require('express');
const authController = require('../controllers/authController');
const modelController = require('../controllers/modelController');
const v1InferenceController = require('../controllers/v1InferenceController');
const inferenceController = require('../controllers/inferenceController');
const userInfoController = require('../controllers/userInfoController');
const authenticate = require('../utils/authMiddleware');

const router = express.Router();

// API route to generate app key
router.post('/v1/generate-app-key', authController.generateAppKey);

// Route to set user information
router.post('/v1/userinfo/set', userInfoController.createUserInfo);

// API to fetch models
router.get('/v1/models', authenticate, modelController.fetchModels);

// API to launch inference and get requestId
router.post('/v1/inferences/launch', authenticate, v1InferenceController.launchInferenceAndGetRequestId);

// API to launch inference and get txHash
router.post('/v1/inferences/launchTx', authenticate, v1InferenceController.launchInferenceAndGetTx);

// Route to get requestId from transaction hash
router.post('/v1/inferences/requestId', v1InferenceController.getRequestIdFromTxHash);

// **NEW** API to fetch inference output based on requestId
router.post('/v1/inferences/output', authenticate, v1InferenceController.fetchInferenceOutput);

// API to launch inference and get requestId
router.post('/v2/inferences/launch', authenticate, inferenceController.launchInferenceAndGetRequestId);

// API to launch inference and get txHash
router.post('/v2/inferences/launchTx', authenticate, inferenceController.launchInferenceAndGetTx);

// Route to get requestId from transaction hash
router.post('/v2/inferences/requestId', inferenceController.getRequestIdFromTxHash);

// **NEW** API to fetch inference output based on requestId
router.post('/v2/inferences/output', authenticate, inferenceController.fetchInferenceOutput);



module.exports = router;
