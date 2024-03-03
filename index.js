// index.js

const Web3 = require('web3');

class Web3Tools {
    constructor(providerUrl, timeout = 10000) {
        this.web3 = new Web3(providerUrl, { timeout });
    }

    getBlockInfo(blockNumber) {
        return new Promise((resolve, reject) => {
            this.web3.eth.getBlock(blockNumber)
                .then(block => resolve(block))
                .catch(error => {
                    console.error('Error fetching block information:', error);
                    reject(error);
                });
        });
    }

    getTransactionReceipt(txHash) {
        return new Promise((resolve, reject) => {
            this.web3.eth.getTransactionReceipt(txHash)
                .then(receipt => resolve(receipt))
                .catch(error => {
                    console.error('Error fetching transaction receipt:', error);
                    reject(error);
                });
        });
    }

    estimateGas(transactionObject) {
        return new Promise((resolve, reject) => {
            this.web3.eth.estimateGas(transactionObject)
                .then(gas => resolve(gas))
                .catch(error => {
                    console.error('Error estimating gas:', error);
                    reject(error);
                });
        });
    }

    deployContract(abi, bytecode, from, gas) {
        return new Promise((resolve, reject) => {
            const contract = new this.web3.eth.Contract(abi);
            const deployment = contract.deploy({ data: bytecode });
            deployment.send({ from, gas })
                .then(deployedContract => resolve(deployedContract))
                .catch(error => {
                    console.error('Error deploying contract:', error);
                    reject(error);
                });
        });
    }
}

module.exports = Web3Tools;
