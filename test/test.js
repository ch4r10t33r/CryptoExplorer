var bl = require('./btcinfo');

//bl.getLatestBlock();

var RippleAPI = require('ripple-lib').RippleAPI;
const xrpApi = new RippleAPI({server: 'wss://s1.ripple.com:443'});
xrpApi.connect().then(function() {
  return xrpApi.getLedger();
}).then(function(result) {
  console.log(result);
  exit();
});
