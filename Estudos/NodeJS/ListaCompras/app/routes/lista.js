module.exports = function(app) {
	
	var api = app.api.lista;

	app.route('/lista')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/lista/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId)
		.put(api.atualiza);
};