var http = require('http');

var params = {
	hostname : 'localhost',
	port : 3000,
	path : '/produtos',
	method : 'post',
	headers : {
		'Accept' : 'application/json',
		'Content-type' : 'application/json'
	}
};

var client = http.request(params, function (res) {
	console.log(res.statusCode);
	res.on('data', function(body) {
		console.log('Corpo: '+ body);
	})
});

var produto = {
	titulo : '',
	descricao : 'Node, JavaScript e um pouco do protocolo Http',
	preco : 87.50
}

client.end(JSON.stringify(produto));