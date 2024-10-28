const db = require('../config/db');

// Fetch all networks and their contracts
exports.getAllNetworksAndContracts = async (req, res) => {
    try {
        // SQL query to get networks and associated contracts
        const query = `
            SELECT 
                n.id AS network_id,
                n.network_name,
                n.evm_chain_id,
                n.rpc_url,
                n.is_active,
                c.smart_contract_name,
                c.smart_contract_address
            FROM 
                networks n
            JOIN 
                contracts c ON n.id = c.network_id;
        `;

        // Execute the query
        const [results] = await db.query(query);

        // Restructure the results to group contracts under each network
        const networks = results.reduce((acc, curr) => {
            const networkIndex = acc.findIndex(net => net.network_id === curr.network_id);

            // If the network already exists, push the contract to its contracts array
            if (networkIndex > -1) {
                acc[networkIndex].contracts.push({
                    smart_contract_name: curr.smart_contract_name,
                    smart_contract_address: curr.smart_contract_address
                });
            } else {
                // Otherwise, create a new network entry with contracts array
                acc.push({
                    network_id: curr.network_id,
                    network_name: curr.network_name,
                    evm_chain_id: curr.evm_chain_id,
                    rpc_url: curr.rpc_url,
                    is_active: curr.is_active,
                    contracts: [
                        {
                            smart_contract_name: curr.smart_contract_name,
                            smart_contract_address: curr.smart_contract_address
                        }
                    ]
                });
            }
            return acc;
        }, []);

        // Return the networks with their contracts
        res.status(200).json(networks);
    } catch (error) {
        console.error('Error fetching networks and contracts:', error);
        res.status(500).json({ error: 'Failed to fetch networks and contracts' });
    }
};
