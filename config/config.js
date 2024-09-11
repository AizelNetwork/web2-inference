// config/config.js
require('dotenv').config();

const config = {
    RPC_URL: process.env.RPC_URL, // Aizel network RPC URL
    CHAIN_ID: process.env.CHAIN_ID, // Aizel network chain ID
    CONTRACT_ADDRESSES: {
        INFERENCE: process.env.INFERENCE_CONTRACT_ADDRESS,
        MODEL: process.env.MODEL_CONTRACT_ADDRESS,
        NODE_REGISTRY: process.env.NODE_REGISTRY_CONTRACT_ADDRESS,
    },
    API_ENDPOINTS: {
        MODEL_LIST: process.env.MODEL_LIST_API,
        INFERENCE_LAUNCH: process.env.INFERENCE_LAUNCH_API,
        INFERENCE_LIST: process.env.INFERENCE_LIST_API,
    },
    DEPLOYER_PK: process.env.DEPLOYER_PK,
};

module.exports = config;
