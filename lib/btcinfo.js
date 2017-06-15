var fetch = require('node-fetch');
const URL = "https://blockchain.info/"
module.exports = {
  getBlock: async function(blockHash) {
    var data = await fetch.fetchUrl(URL+"/rawblock/"+blockHash);
    return data.text();
  },

  getTransaction: async function(txHash) {
    var data = await fetch(URL+"/rawtx/"+txHash);
    return await data.text();
  },

  getBlockHeight: async function(blockHeight) {
    var data = await fetch(URL+"/block-height/"+blockHeight+"?format=json");
    return await data.toString();
  },

  getLatestBlock: async function() {
    var data = await fetch(URL+"latestblock");
    return await data.text();
  },

  getBalance: async function(address) {
    var data = await fetch(URL+"/balance?active="+address);
    return await data.text();
  },

  getAddress: async function(address) {
    var data = await fetch(URL+"/rawaddr/"+address);
    return await data.text();
  }
}
