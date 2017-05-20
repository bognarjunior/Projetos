var api = {};

api.lista = function(req, res) {

	console.log("req.params", req.params);
	res.send("Entrou na api.lista");
};

api.buscaPorId = function(req, res) {

	console.log("req.params", req.params);
	res.send("Entrou na api.buscaPorId");
};

api.removePorId = function(req, res) {

	console.log("req.params", req.params.id);
	res.send("Entrou na api.removePorId");

};

api.adiciona = function(req, res) {

	console.log("req.params", req.params);
	res.send("Entrou na api.adiciona");
};

api.atualiza = function(req, res) {

	console.log("req.params", req.params.id);
	res.send("Entrou na api.atualiza");
};

module.exports = api;
