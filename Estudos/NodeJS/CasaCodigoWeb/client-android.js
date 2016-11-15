var http = require('http');

var params = {
	hostname : 'localhost',
	port : 3000,
	path : '/produtos',
	headers : {
		'Accept' : 'application/json'
	}
};

http.get(params, function (res) {
	console.log(res.statusCode);
	res.on('data', function(body) {
		console.log('Corpo: '+ body);
	})
});