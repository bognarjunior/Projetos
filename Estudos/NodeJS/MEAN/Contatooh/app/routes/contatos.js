module.exports = function(app){
	var controller = app.controllers.contatos;
	app.get('/contatos', controller.listaContatos);
	app.get('/contatos/:id', controller.obtemContato);
};