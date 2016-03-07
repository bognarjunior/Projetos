app.factory('ConcatService', function() {
	var factory = {};
	factory.concat = function(nome) {
		return "Bem-vindo " + nome;
	}
	return factory;
});