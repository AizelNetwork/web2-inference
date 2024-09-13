# Inference API Project

This project provides a set of APIs to interact with a blockchain-based inference service. The APIs allow users to generate app keys, fetch available models, launch inference requests, and retrieve inference results. The system integrates blockchain-based contracts with EVM-based keypairs and secure encryption.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
  - [Generate App Key](#1-generate-app-key)
  - [Fetch Models](#2-fetch-models)
  - [Launch Inference](#3-launch-inference-and-get-requestid)
  - [Fetch Inference Output](#4-fetch-inference-output)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

---

## Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- MySQL server (local or cloud)

---

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-repo/inference-api.git
    cd inference-api
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

---

## Environment Variables

Create a `.env` file in the root of the project and configure the following variables:

```bash
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=aizel

# RPC and Chain Config
RPC_URL=http://34.124.144.235:9944
CHAIN_ID=1281

# Contract Addresses
INFERENCE_CONTRACT_ADDRESS=0x313bE302AB078e3207f74559d63eF316c0B0670D
MODEL_CONTRACT_ADDRESS=0x71dDC9354996C63b0890C162A61b06a38DA73d00
NODE_REGISTRY_CONTRACT_ADDRESS=0xeDAcF93Fdb89e1eC1339f634DBACAF13349C32AC

# API Endpoints
MODEL_LIST_API=http://34.142.156.174:7878/model/list
INFERENCE_LAUNCH_API=http://34.142.156.174:7878/inference/launch
INFERENCE_LIST_API=http://34.142.156.174:7878/inference/list

# Application Port
PORT=8080
```

---

## Database Setup

The project uses a MySQL database to store user information, including app keys, private keys, public keys, and addresses.

1. **Create a MySQL database**:
    ```sql
    CREATE DATABASE aizel;
    ```

2. **Create the `users` table**:
    ```sql
    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        app_key VARCHAR(255) UNIQUE NOT NULL,
        private_key VARCHAR(255) NOT NULL,
        public_key VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL
    );
    ```

---

## Running the Project

1. **Start the MySQL server** (if it's not already running).
2. **Run the Node.js application**:
    ```bash
    node app.js
    ```

3. **Run the app in the background** (optional):
    ```bash
    nohup node app.js &
    ```

---

## API Endpoints

### 1. Generate App Key
Generates a new app key and associated EVM key pair for the user.

#### Endpoint:
```
POST /v1/generate-app-key
```

#### Request Body:
```json
{
    "name": "John Doe"
}
```

#### Response:
```json
{
    "name": "John Doe",
    "app_key": "d82d451223eebf9e09b98211a8a33efcd9c5f9c18286baa5b8eaa3eb3d81e4a5",
    "evm_address": "0x638633fbf5A792b857f9580214E6aF45feDe5712",
    "public_key": "0x03e91f67291dee98eec50104b8796a68d8441bc5887563d7ef7bc0b2c3f7f9812a"
}
```

---

### 2. Fetch Models
Fetches a list of models available for inference.

#### Endpoint:
```
GET /v1/models
```

#### Headers:
```
Authorization: Bearer <app_key>
```

#### Response:
```json
{
    "data": [
        {
            "id": 1,
            "name": "llama2_7b_chat.Q4_0.gguf-1"
        }
    ]
}
```

---

### 3. Launch Inference and Get RequestID
Launches an inference request using the selected model and returns the `requestId` directly.

#### Endpoint:
```
POST /v1/inferences/launch
```

#### Request Body:
```json
{
    "model_id": 1,
    "user_input": "This is the user input",
    "system_prompt": "This is the system prompt",
    "temperature": 0.7,
    "max_tokens": 1000
}
```

#### Response:
```json
{
    "requestId": "107"
}
```

---

### 4. Fetch Inference Output
Fetches the output for the given `requestId`. If the status is `Success`, the decrypted output is returned.

#### Endpoint:
```
POST /v1/inferences/output
```

#### Request Body:
```json
{
    "requestId": "107"
}
```

#### Response:
```json
{
    "decryptedOutput": "your_decrypted_output"
}
```

---

## Error Handling

The API will return errors in the following format:
```json
{
    "error": "Error message",
    "details": "Detailed error message"
}
```

### Common Errors:
- **401 Unauthorized**: Invalid or missing app key.
- **400 Bad Request**: Missing or invalid parameters.
- **500 Internal Server Error**: Server error occurred during processing.

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
