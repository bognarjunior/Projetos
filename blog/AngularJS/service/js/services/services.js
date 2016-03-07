app.service('SaudacaoService', function(ConcatService){
	this.saudacao = function(nome) {
		return ConcatService.concat(nome);
	}
});