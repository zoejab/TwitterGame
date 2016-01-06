var bodyParser = require('body-parser'),
	express    = require('express'),
  logger     = require('morgan'),
	fs         = require('fs'),
  port 	     = process.env.PORT || 3000;


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
app.get('/',function(req,res){
	//load public for css/js test
});

fs.readdirSync('./controllers').forEach(function (file) {
  if(file.substr(-3) == '.js') {
      route = require('./controllers/' + file);
      route.controller(app);
  }
});
