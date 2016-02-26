angular.module('contatooh').controller('ContatosController',['$scope', function($scope) {
		$scope.total = 0;
		$scope.incrementa = function(){
			$scope.total ++;
		};
}]);