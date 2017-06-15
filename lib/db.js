var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var LatestBlock = new Schema ({
  "number" : {type: Number, index: {unique: true}},
  "reportTime" : Timestamp,
  "symbol" : String,
  "hash" : String,
  "time" : Number,
  "blockIndex" : Number,
  "height" : Number,
  "txtIndexes" : [Number]
});

var Block = new Schema ({
  "number": {type: Number, index: {unique: true}},
  "symbol" : String,
  "hash": String,
  "parentHash": String,
  "nonce": String,
  "sha3Uncles": String,
  "logsBloom": String,
  "transactionsRoot": String,
  "stateRoot": String,
  "receiptRoot": String,
  "miner": String,
  "difficulty": String,
  "totalDifficulty": String,
  "size": Number,
  "extraData": String,
  "gasLimit": Number,
  "gasUsed": Number,
  "timestamp": Number,
  "uncles": [String]
});

var Transaction = new Schema({
  "symbol" : String,
  "hash": {type: String, index: {unique: true}},
  "nonce": Number,
  "blockHash": String,
  "blockNumber": Number,
  "transactionIndex": Number,
  "from": String,
  "to": String,
  "value": String,
  "gas": Number,
  "gasPrice": String,
  "timestamp": Number,
  "input": String
});

mongoose.model('Block', Block);
mongoose.model('LatestBlock', LatestBlock);
mongoose.model('Transaction', Transaction);
module.exports.Block = mongoose.model('Block');
module.exports.LatestBlock = mongoose.model('LatestBlock');
module.exports.Transaction = mongoose.model('Transaction');

mongoose.connect( 'mongodb://localhost/blockDB' );
mongoose.set('debug', true);
