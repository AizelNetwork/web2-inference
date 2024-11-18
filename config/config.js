// config/config.js
require('dotenv').config();

const config = {
    RPC_URL: process.env.RPC_URL, // Aizel network RPC URL
    CHAIN_ID: process.env.CHAIN_ID, // Aizel network chain ID
    API_ENDPOINTS: {
        v1_MODEL_LIST: process.env.MODEL_LIST_API,
        v1_INFERENCE_LAUNCH: process.env.INFERENCE_LAUNCH_API,
        v1_INFERENCE_LIST: process.env.INFERENCE_LIST_API,
        MODEL_LIST: process.env.NEW_MODEL_LIST_API,
        INFERENCE_LAUNCH: process.env.NEW_INFERENCE_LAUNCH_API,
        INFERENCE_LIST: process.env.NEW_INFERENCE_LIST_API,
    },
    DEPLOYER_PK: process.env.DEPLOYER_PK,
};

module.exports = config;
