var http = require('http');
var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
	console.log(request.url);
	if (request.url == "/") {
		response.write("<h1>Hello World!</h1>");
	} else if (request.url == "/next") {
		response.write("<h1>Página 2</h1>");
	} else {
		response.write("<h1>Url não encontrada</h1>");
	};
	response.end();
});

server.listen(3000, function(){
	console.log("Servidor rodando na porta 3000");
});