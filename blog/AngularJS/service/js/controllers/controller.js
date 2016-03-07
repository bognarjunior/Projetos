app.controller('MainController', function($scope, SaudacaoService) {
	$scope.saudacao = function() {
		$scope.msg = SaudacaoService.saudacao($scope.nome);
	}
});