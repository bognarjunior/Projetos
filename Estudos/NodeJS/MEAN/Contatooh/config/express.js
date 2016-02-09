var express = require('express');
var load = require('express-load');
var home = require('./../app/routes/home');
module.exports = function(){
	var app = express();

	app.set('port', 3000);
	//Middleware
	app.use(express.static('./public'));

	app.set('view engine', 'ejs');

	app.set('views', './app/views');

	load('models',{cwd: 'app'})
	.then('controllers')
	.then('routes')
	.into(app);

	return app;	
};