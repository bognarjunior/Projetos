var http = require('http');
var app = require('./config/express');
var port = 3000;

http.createServer(app).listen(port, function() {
    console.log("Servidor iniciadona porta " + port);
});