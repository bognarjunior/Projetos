function loadPage () {
	document.getElementById("btnCalcular").addEventListener("click", calcularPrimo);

	var ini,fim;

	function calcularPrimo(){
		ini = document.getElementById('txtnum1').value;
		fim = document.getElementById('txtnum2').value;

		if ( (validaNumero(ini)) && (validaNumero(fim)) ) {
			if (validaMaior(ini, fim)) {
				adicionaValorTela(isPrimo(ini, fim));
			} else{
				openModal("O primeiro número deve ser menor que o segundo!");
			};
		}else{
			openModal("Os valores devem ser numéricos");
		}
	}

	function isPrimo(ini, fim){
		var primo, arrPrimos = [];
		//Percorre a sequencia
		for (var i = ini; i <=fim; i++) {
			//É primo por default
			primo = true;
			//Sequecia usada para divisão
			for (var j = 2; j <= Math.floor( i / 2 ); j++) {
				//Testa se o valor é dividido por algum outro e a diferença é zero
				if ( i % j == 0) {
					//Se for zero o número não é primo e sai do loop
					primo = false;
					break;
				};
			};
			//Testa se o número é primo e se é diferente de zero e 1
			if( primo && (i != 1 && i != 0 ) ){
				//Popula uma array
				arrPrimos.push(i)
			};
		};
		//Retorna a array para a função que a invocou
		return arrPrimos;
	}

	function openModal (texto) {
		$("#modalMessage").text(texto);
		$(":text").each(function () {
            $(this).val("");
        });

		$('#myModal').modal( 'show');
	}
	function validaMaior(ini, fim){
		return ini < fim;
	}

	function validaNumero (num) {

		if (num == "") return false;
		n = Math.floor(num);
		return !isNaN(n);
	}

	function adicionaValorTela (arr) {
		openModal(arr);
	}
}
window.load = loadPage();