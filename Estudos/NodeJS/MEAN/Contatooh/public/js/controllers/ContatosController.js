angular.module('contatooh').controller('ContatosController', function($scope, $resource) {
	$scope.filtro = '';

	$scope.contatos = [];

	var Contato = $resource('/contatos');

	function buscaContatos() {
		
		Contato.query(
			function(contatos) {
				$scope.contatos = contatos;
			},
			function(erro) {
				console.log("Não foi possível obter a lista de contatos");
				console.log(erro);
			}
		);
	}
	buscaContatos();

	$scope.remove = function(contato) {
		Contato.delete({id: contato._id}, buscaContatos, function(erro) {
			console.log('Não foi possível remover o contato');
			console.log(erro);
		});
	};
});