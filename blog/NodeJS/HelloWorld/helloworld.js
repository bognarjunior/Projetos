//Importa o Protocolo HTTP, 
var http = require('http');

http.createServer(function(req,res) {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); 
	res.write('<h1>Hello World!</h1>');
	res.write('<h1>Olá mundo!</h1>');
	res.write('<h1>¡Hola Mundo!</h1>');
	res.write('<h1>Ciao a tutti!</h1>');
	res.write('<h1>Hallo, Welt!</h1>');
	res.write('<h1>Bonjour tout le monde!</h1>');
	res.write('<h1>ハローワールド！</h1>');
	res.end();
}).listen(8008);

console.log('Servidor rodando na porta 8008. Ctrl+C para encerrar…');