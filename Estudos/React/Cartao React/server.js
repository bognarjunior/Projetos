var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);

console.log("server ok na porta 8080");