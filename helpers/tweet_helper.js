var Ritetag = require('ritetag');

var rt = new Ritetag({
  clientId: process.env.RitetagClientId,
  clientSecret: process.env.RitetagClientSecret,
  oauthToken: process.env.RitetagOauthToken,
  oauthSecret: process.env.RitetagOauthSecret
});

rt.historicalData('zoe', function(error, results){
  if(error) return console.error(error);
 console.log(results.data[results.data.length - 1]);
});

module.exports = {





};
