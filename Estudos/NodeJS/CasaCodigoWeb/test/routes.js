var server = require('../config/express')();
var request = require('supertest')(server);

describe('#ProdutosController', function () {

	beforeEach(function(done){
		var conn = server.infra.connectionFactory();
		var query = "DELETE FROM PRODUTOS";
		conn.query(query, function(err, data) {
			if (!err) {
				done();
			}
		});
	});

	it('#Listagem JSON', function(done) {
		request.get('/produtos')
			.set('Accept', 'application/json')
			.expect('Content-Type',/json/)
			.expect(200, done);
	});

	it('# Cadastro Inválido', function(done){
		request.post('/produtos')
			.send({
				titulo:"",
				descricao: "JavaScript Ninja dos Paranauê"
			})
			.expect(400, done);
	});

	it('# Cadastro Válido', function(done){
		request.post('/produtos')
			.send({
				titulo:"Samurai JavaScript",
				descricao: "JavaScript Ninja dos Paranauê", 
				preco: 150.50
			})
			.expect(302, done);
	});
});