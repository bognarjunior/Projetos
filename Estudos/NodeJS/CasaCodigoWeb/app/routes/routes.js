//var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app){
	
	var listaProdutos = function(req, res, next){
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.listar(function(err, data){
			if (err) {
				return next(err);
			}
			res.format({
				html : function() {
					res.render("produtos/listagem", {listagem : data});
				},
				json : function() {
					res.json(data);
				}
			});
			
		});

		connection.end();
	};

	app.get('/', function(req, res){
		res.render("produtos/index");
	});

	app.get('/produtos', listaProdutos);

	app.get('/produtos/form', function(req, res){
		res.render("produtos/form", {
			errorsValidation : {} ,
			produto : {}
		});
	});

	app.post('/produtos', function(req, res){
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		var produto = req.body;

		req.assert('titulo', 'Título é obrigatório!').notEmpty();
		req.assert('preco', 'Formato inválido!').isFloat();

		var errors = req.validationErrors();

		if (errors) {
			res.format({
				html : function() {
					res.status(400).render("produtos/form",{
						errorsValidation : errors, 
						produto : produto
					});
				},
				json : function() {
					res.status(400).json(errors);
				}
			});
			return;
		}

		produtosDAO.salvar(produto, function(err, data){
			res.redirect('/produtos');
		});

		connection.end();
	});
};
