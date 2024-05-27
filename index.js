const axios = require('axios');

const TEA_API_URL = 'https://api.teaprotocol.org'; // Bu URL varsayılan olup, gerçek Tea API endpointi ile değiştirilebilir

async function getBlock(blockNumber) {
    try {
        const response = await axios.get(`${TEA_API_URL}/block/${blockNumber}`);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching block data:', error);
    }
}

async function getTransaction(txHash) {
    try {
        const response = await axios.get(`${TEA_API_URL}/transaction/${txHash}`);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching transaction data:', error);
    }
}

module.exports = {
    getBlock,
    getTransaction
};
