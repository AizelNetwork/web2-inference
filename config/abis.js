const ABIS = {
    NodeRegistry: [
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "hash",
                    "type": "bytes32"
                }
            ],
            "name": "getRandomNode",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "nodeId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "bio",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "url",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "stake",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "busy",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "dataNodeId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint32",
                            "name": "teeType",
                            "type": "uint32"
                        },
                        {
                            "internalType": "string",
                            "name": "pubkey",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct InferenceNode.NodeDetails",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllActiveNodes",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "nodeId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "bio",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "url",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "stake",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "busy",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "dataNodeId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint32",
                            "name": "teeType",
                            "type": "uint32"
                        },
                        {
                            "internalType": "string",
                            "name": "pubkey",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct InferenceNode.NodeDetails[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "nodeId",
                    "type": "uint256"
                }
            ],
            "name": "getNode",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "nodeId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "bio",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "url",
                            "type": "string"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "stake",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "busy",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "dataNodeId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint32",
                            "name": "teeType",
                            "type": "uint32"
                        },
                        {
                            "internalType": "string",
                            "name": "pubkey",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct InferenceNode.NodeDetails",
                    "name": "",
                    "type": "tuple"
                },
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    Inference: [
        {
            "anonymous": false,
            "inputs": [
                { "indexed": false, "name": "requestId", "type": "uint256" },
                { "indexed": true, "name": "requester", "type": "address" },
                { "indexed": false, "name": "nodeId", "type": "uint256" },
                { "indexed": false, "name": "modelId", "type": "uint256" },
                { "indexed": false, "name": "input", "type": "bytes32" },
                { "indexed": false, "name": "pubkey", "type": "string" },
                { "indexed": false, "name": "requestHash", "type": "bytes32" },
                { "indexed": false, "name": "payCoin", "type": "address" },
                { "indexed": false, "name": "payAmount", "type": "uint256" }
            ],
            "name": "InferenceRequested",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "nodeId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes32",
                    "name": "input",
                    "type": "bytes32"
                },
                {
                    "internalType": "string",
                    "name": "pubkey",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "payCoin",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "payAmount",
                    "type": "uint256"
                }
            ],
            "name": "requestInference",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "requestId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "requestId",
                    "type": "uint256"
                }
            ],
            "name": "confirmDone",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    Model: [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getDataNodesForModel",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
};
module.exports = ABIS;