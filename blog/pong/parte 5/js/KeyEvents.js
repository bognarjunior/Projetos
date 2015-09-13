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

	//adiciona os eventos
	document.onkeydown = keyPressed;
	document.onkeyup = keyReleased;

	//Evento acionado quando o teclado é pressionado
	function keyPressed ( event ) {

		event.preventDefault();

		switch( event.keyCode ) {

			case 38: //Cima
				kUp = true;
			break;

			case 40://Baixo
				kDown = true;
			break;	
		};
		
		updatePosition();
	};

	//Evento acionado quando o teclado é liberado
	function keyReleased ( event ) {

		switch( event.keyCode ) {

			case 32: //Espaço
				setAction();
			break;

			case 38: //Cima
				kUp = false;
			break;

			case 40://Baixo
				kDown = false;
			break;	
		};
		updatePosition();
	};

	function updatePosition(){
		setStatePosition("")
		if ( kUp == true ) {
			setStatePosition(1);
		} else if ( kDown == true ) {
			setStatePosition(2);
		};
	};

	//Seta o valor da variável
	function setStatePosition ( dir ) {
		
		if (ACTION.current != "") {
			DIRECTION.current = dir;
		}
	};

	function setAction () {
		
		if (ACTION.current == "") {
			ACTION.current = "start";
		} else {
			ACTION.current = "";
		};
	};

	//Retorna a direção para ser usada no movimento do personagem
	return { 
		DIRECTION : DIRECTION,
		ACTION : ACTION
	}

})();