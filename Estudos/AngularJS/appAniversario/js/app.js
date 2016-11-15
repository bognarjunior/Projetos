/**
*  Module
*
* Description
*/
function loadPage () {
	angular.module("appAniversario", [])
	.controller("appController",function($scope){
		$scope.nameApp = 'Lista de Aniversário';
		$scope.pessoas = [
			{nome:'José', nascimento:'22/09/1983'},
			{nome:'Tati', nascimento:'30/06/1982'},
			{nome:'Rafael', nascimento:'01/07/1990'},
			{nome:'Carolina', nascimento:'14/12/1987'}
		];

		$scope.adicionar = function (contato) {
			$scope.pessoas.push(angular.copy(contato));
			delete $scope.contato;
		};
	});
}

window.load = loadPage();