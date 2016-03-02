angular.module('contatooh').controller('ContatosController', function($scope, $http) {
		$scope.filtro = '';

		$scope.contatos = [];

		$http.get('/contatos')
		.success( function( data ){
			$scope.contatos = data;
		})
		.error( function( statusText ){
			console.log('Não foi possível obter a lista de contatos!');
			console.log( statusText);
		});
});