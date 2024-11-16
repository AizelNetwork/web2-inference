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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "nodeContract_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "modelContract_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "verifier_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "feeManager_",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "OwnableInvalidOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "OwnableUnauthorizedAccount",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "requestId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint8",
                    "name": "status",
                    "type": "uint8"
                }
            ],
            "name": "InferenceFinished",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "requestId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "nodeId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "requestHash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "requester",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "input",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "payCoin",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "payAmount",
                    "type": "uint256"
                }
            ],
            "name": "InferenceRequested",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "requestId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "output",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "report",
                    "type": "bytes32"
                }
            ],
            "name": "InferenceSubmit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "requestId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "RequestSubmit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "requestId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "resultHash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "reportHash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "ResultSubmit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "coin",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Withdraw",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256[]",
                    "name": "requestIds",
                    "type": "uint256[]"
                },
                {
                    "internalType": "bytes32[]",
                    "name": "outputs",
                    "type": "bytes32[]"
                },
                {
                    "internalType": "bytes32[]",
                    "name": "reports",
                    "type": "bytes32[]"
                }
            ],
            "name": "batchSubmitInference",
            "outputs": [],
            "stateMutability": "nonpayable",
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
        },
        {
            "inputs": [],
            "name": "getFeeManagerContract",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getModelContract",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getNodeContract",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "reqId",
                    "type": "uint256"
                }
            ],
            "name": "getNodeIdByReqId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getVerifier",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getVerifyRewardRatio",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "requester",
                            "type": "address"
                        },
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
                        }
                    ],
                    "internalType": "struct Inference.Request",
                    "name": "_request",
                    "type": "tuple"
                }
            ],
            "name": "hash",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "nextRequestId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
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
            "name": "nodeCounter",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
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
                    "name": "reqId",
                    "type": "uint256"
                }
            ],
            "name": "requestRecords",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "bytes32",
                            "name": "requestHash",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "address",
                            "name": "requester",
                            "type": "address"
                        },
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
                            "internalType": "bytes32",
                            "name": "output",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "report",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "enum InferenceStatus",
                            "name": "inferenceStatus",
                            "type": "uint8"
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
                    "internalType": "struct RequestRecord",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "feeManager",
                    "type": "address"
                }
            ],
            "name": "setFeeManagerContract",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "modelContract",
                    "type": "address"
                }
            ],
            "name": "setModelContract",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "nodeContract",
                    "type": "address"
                }
            ],
            "name": "setNodeContract",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "verifier",
                    "type": "address"
                }
            ],
            "name": "setVerifier",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "verifyRewardRatio",
                    "type": "uint256"
                }
            ],
            "name": "setVerifyRewardRatio",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "requestId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes32",
                    "name": "output",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "report",
                    "type": "bytes32"
                }
            ],
            "name": "submitInference",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "payCoin",
                    "type": "address"
                }
            ],
            "name": "userBalances",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "reqId",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "rewardList",
                    "type": "address[]"
                },
                {
                    "internalType": "bool",
                    "name": "success",
                    "type": "bool"
                }
            ],
            "name": "verifyDone",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "coinAddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    Models: [
        {
            "inputs": [],
            "stateMutability": "payable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "OwnableInvalidOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "OwnableUnauthorizedAccount",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "appId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "Claim",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "appId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "ConfirmDone",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "dataNodeId",
                    "type": "uint256"
                }
            ],
            "name": "DataNodeAddedToModel",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "dataNodeId",
                    "type": "uint256"
                }
            ],
            "name": "DataNodeRemovedFromModel",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                }
            ],
            "name": "ModelTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "modelType",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "modelName",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "CID",
                    "type": "string"
                }
            ],
            "name": "ModelUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "modelType",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint64",
                    "name": "size",
                    "type": "uint64"
                }
            ],
            "name": "ModelUploaded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "appId",
                    "type": "uint256"
                }
            ],
            "name": "NewApp",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "coinAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "appOrderId",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "buyer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "appId",
                    "type": "uint256"
                }
            ],
            "name": "PayOrder",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "TokenMinted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "TokenTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "productId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "bool",
                    "name": "ifSuccess",
                    "type": "bool"
                }
            ],
            "name": "UpdateSold",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bool",
                    "name": "isIn",
                    "type": "bool"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "coinAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "appId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "UserBalanceChanged",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "coinContract",
                    "type": "address"
                }
            ],
            "name": "Withdraw",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "MIN_INC_MODEL_ID",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "dataNodeId",
                    "type": "uint256"
                }
            ],
            "name": "addDataNodeToModel",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "appIntervalClaim",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "appName",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "appURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                }
            ],
            "name": "blockModel",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "appId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "coinAddr",
                    "type": "address"
                }
            ],
            "name": "buy",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
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
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "claim",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "confirmDone",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "getBuyerByOrderId",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                }
            ],
            "name": "getCID",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "modelId",
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
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                }
            ],
            "name": "getModelDetails",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "modelId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "modelType",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "modelName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "CID",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "size",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "totalValue",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IModels.ModelDetails",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "getModelIdByOrderId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                }
            ],
            "name": "getModelName",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "dataNodeId",
                    "type": "uint256"
                }
            ],
            "name": "getModelsByDataNodeId",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "modelId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "modelType",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "modelName",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "CID",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "size",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "totalValue",
                            "type": "uint256"
                        }
                    ],
                    "internalType": "struct IModels.ModelDetails[]",
                    "name": "models",
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
                    "name": "dataNodeId",
                    "type": "uint256"
                }
            ],
            "name": "getModelsForDataNode",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getModelsTotalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getOwnersCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "orderId",
                    "type": "uint256"
                }
            ],
            "name": "getStatusByOrderId",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                }
            ],
            "name": "isModelBlocked",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "isOwner",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "maxAppNum",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "maxOrderId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "mintToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_appName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "websiteURI",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_intervalClaim",
                    "type": "uint256"
                }
            ],
            "name": "newApp",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "orderBook",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "appId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "coinAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "buyer",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "createdTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "claimTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "status",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_appId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "seller",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "coinAddress",
                    "type": "address"
                },
                {
                    "internalType": "bytes32",
                    "name": "appOrderId",
                    "type": "bytes32"
                }
            ],
            "name": "payOrder",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
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
                    "name": "modelId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "dataNodeId",
                    "type": "uint256"
                }
            ],
            "name": "removeDataNodeFromModel",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "_data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_appId",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_seconds",
                    "type": "uint256"
                }
            ],
            "name": "setIntervalClaim",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                }
            ],
            "name": "unblockModel",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "CID",
                    "type": "string"
                }
            ],
            "name": "updateModelCID",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "modelName",
                    "type": "string"
                }
            ],
            "name": "updateModelName",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "initValue",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "modelType",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "modelName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "CID",
                    "type": "string"
                },
                {
                    "internalType": "uint64",
                    "name": "size",
                    "type": "uint64"
                },
                {
                    "internalType": "uint256",
                    "name": "expectedId",
                    "type": "uint256"
                }
            ],
            "name": "upload",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "modelId",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "usedModelIds",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "userBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_coinAddress",
                    "type": "address"
                }
            ],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        }
    ],
    FeeManager: [
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "feeCoins_",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "minAmounts_",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "OwnableInvalidOwner",
            "type": "error"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "OwnableUnauthorizedAccount",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "feeCoin_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "minAmount_",
                    "type": "uint256"
                }
            ],
            "name": "addFeeCoin",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "feeCoin_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "payAmount_",
                    "type": "uint256"
                }
            ],
            "name": "checkFee",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "feeCoin_",
                    "type": "address"
                }
            ],
            "name": "delFeeCoin",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getAllFeeCoins",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "feeCoin_",
                    "type": "address"
                }
            ],
            "name": "getFeeCoin",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
};
module.exports = ABIS;