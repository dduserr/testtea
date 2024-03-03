Web3 Tools is a collection of utilities for interacting with Web3 and Ethereum smart contracts.


## Features

- Fetch the latest block number on the Ethereum blockchain.
- Get the balance of an Ethereum address.
- Call methods of Ethereum smart contracts.

## Installation

You can install Simple Web3 Project via npm:

```bash
npm install testtea
```
## Usage

const Web3Tools = require('testtea');

// Initialize Web3Tools with your Ethereum provider URL
const web3Tools = new Web3Tools('https://mainnet.infura.io/v3/your-infura-project-id');

// Example usage:
async function exampleUsage() {
    try {
        // Get the current block number
        const blockNumber = await web3Tools.getBlockNumber();
        console.log('Current block number:', blockNumber);

        // Get the balance of an Ethereum address
        const balance = await web3Tools.getBalance('0x1234567890123456789012345678901234567890');
        console.log('Balance:', balance);

        // Deploy a smart contract
        const deployedContract = await web3Tools.deployContract(abi, bytecode, '0xYourAddress', 3000000);
        console.log('Deployed contract:', deployedContract);
    } catch (error) {
        console.error('Error:', error);
    }
}

exampleUsage();


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

Web3.js - https://github.com/ethereum/web3.js/
javascript
