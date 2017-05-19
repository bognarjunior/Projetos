var http = require('http');
var port = 3000;
var server = http.createServer(function(req, res) {
	res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
	if (req.url == "/") {
        res.write("<h1>Hello World!</h1>");
    } else if (req.url == "/next") {
        res.write("<h1>Página 2</h1>");
    } else {
        res.write("<h1>Url não encontrada</h1>");
    };
	res.end();
});

server.listen(port, function(){
	console.log("Servidor rodando na porta ", + port);
});
