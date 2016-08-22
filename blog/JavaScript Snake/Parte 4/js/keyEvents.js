/**
* Módulo de eventos do teclado
*/
var KeyBoard = ( function(){

	var DIRECTION = {
		current : ""
	}

	var ACTION = {
		current : ""
	};

	var kUp = false; 
	var kDown = false; 
	var kLeft = false;
	var kRight = false;
	var kSpace = false;

	//adiciona os eventos
	document.onkeydown = pressKey;
	document.onkeyup = leavePress;

	//Evento acionado quando o teclado é pressionado
	function pressKey ( event ) {

		event.preventDefault();

		switch( event.keyCode ) {

			case 37: //Esquerda
				kLeft = true;
			break;

			case 38: //Cima
				kUp = true;
			break;

			case 39: //Direita
				kRight = true;
			break;

			case 40://Baixo
				kDown = true;
			break;	
		};
		
		updatePosition();
	};

	//Evento acionado quando o teclado é liberado
	function leavePress ( event ) {

		switch( event.keyCode ) {

			case 32: //Espaço
				setAction();
			break;
			case 37: //Esquerda
				kLeft = false;
			break;

			case 38: //Cima
				kUp = false;
			break;

			case 39: //Direita
				kRight = false;
			break;

			case 40://Baixo
				kDown = false;
			break;	
		};
		updatePosition();
	};

	function updatePosition(){
		setStatePosition( kUp ? 1 : kDown ? 2 : kRight ? 3 : kLeft ? 4 : 0 )
	};

	//Seta o valor da variável
	function setStatePosition ( dir ) {
		if (ACTION.current != "" && dir != 0) {
			DIRECTION.current = dir;
		}
	};

	function setAction () {
		ACTION.current = ACTION.current == "" ? "start" : "";
	};

	//Retorna a direção para ser usada no movimento do personagem
	return { 
		DIRECTION : DIRECTION,
		ACTION : ACTION
	}

})();