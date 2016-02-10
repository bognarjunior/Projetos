var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var home = require('./../app/routes/home');
module.exports = function(){
	var app = express();

	app.set('port', 3000);
	//Middleware
	app.use(express.static('./public'));
	
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	app.use(require('method-override')());

	app.set('view engine', 'ejs');

	app.set('views', './app/views');

	load('models',{cwd: 'app'})
	.then('controllers')
	.then('routes')
	.into(app);

	return app;	
};
