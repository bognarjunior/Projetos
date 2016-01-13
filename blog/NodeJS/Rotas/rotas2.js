var http = require('http');
var url = require('url');
var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
	response.write("<h1>Dados Url</h1>");
	var result = url.parse(request.url, true);
	for(var key in result.query){
		response.write("<h2>"+key+" : "+result.query[key]+"</h2>");
	}
	response.end();
});
server.listen(3000, function(){
	console.log("Servidor rodando na porta 3000");
});