var bodyParser = require('body-parser'),
	express    = require('express'),
  logger     = require('morgan'),
	fs         = require('fs'),
  app        = express(),
  server     = require('http').createServer(app),
  port 	     = process.env.PORT || 3000;
  var request = require('request');
var Twit = require('twit');

var Ritetag = require('ritetag');

  server.listen(port, function(){
  	console.log("the server is on 3000");
  });


// server public files with express
app.use(express.static(__dirname + '/public'));

// logger on dev
app.use(logger('dev'));

//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// on localhost base
// app.get('/',function(req,res){
// 	//load public for css/js test
// });

fs.readdirSync('controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }

  // var rt = new Ritetag({
  // 	clientId: '5e92d7c86127814e5e617a0e884846f20568eaa65' || process.ENV.RitetagClientId,
  // 	clientSecret: 'cda878157ed74b7e575b5fe7260d1a1a' || process.ENV.RitetagClientSecret,
  // 	oauthToken: '11cbcf6a360a9a2614f8f0d2f052a7180568eaa65' || process.ENV.RitetagOauthToken,
  // 	oauthSecret: '90c53e10e95b4f95fbce2a26da0f6ee6' || process.ENV.RitetagOauthSecret
  // });





});
