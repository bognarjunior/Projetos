var http = require('http');
var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    response.write("<h1>Hello World!</h1>");
    response.end();
});
server.listen(3000, function(){
    console.log("Servidor rodando na porta 3000");
});