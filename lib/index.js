
'use strict';
require('./db');
//BTC modules
var btcExplorer = require('./btcinfo');
//Ripple modules
var RippleAPI = require('ripple-lib').RippleAPI;
const xrpApi = new RippleAPI({server: 'wss://s1.ripple.com:443'});

/*
* ETH modules
*/
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/j0bP7LeecAkPpwY8Au9S'));
//var ethExplorer = require('etherscan-api').init('DGKDMI9FKYX1U2K6TRF99KSZJAQD8H9X6H');

module.exports = {
  /** @lends module:bxplorer/api */
  return {
    /**
    * @namespace BTC
    */
    BTC: {
      latestBlock: async function() {
        return await btcExplorer.getLatestBlock();
      },
    },

    /**
    * @namespace ETH
    */
    ETH: {
      latestBlock: async function() {
        /*
        var block = ethExplorer.proxy.eth_blockNumber();
        return ethExplorer.proxy.eth_getBlockByNumber(block.result);
        */
        return await web3.getBlock('latest');
      },
    },

    /**
    * @namespace XRP
    */
    XRP: {
      latestBlock: async function() {
        return xrpApi.getLedger();
      },
    },

    /**
    * @namespace LTC
    */
    LTC: {
      latestBlock: async function() {

      },
    },

    /**
    * @namespace XMR
    */
    XMR: {
      latestBlock: async function() {

      },
    },

    /**
    * @namespace DASH
    */
    DASH: {
      latestBlock: async function() {
        //https://github.com/dashpay/insight-api-dash
      },
    },

    /**
    * @namespace NEM
    */
    NEM: {
      latestBlock: async function() {
        //https://github.com/NEMChina/nem_explorer_nodejs
      }
    }
  }
}
