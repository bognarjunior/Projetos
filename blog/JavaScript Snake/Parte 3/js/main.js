(function () {

	//variaveis de controle
	var canvas, ctx;

	//Variaveis snake
	var BLOCKSIZE, iniX, iniY, firstDirection, firstLeng;

	//Game
	var gamePlay, gameInit, gameOver, gameWin;

	function main ( ) {
		canvas = document.getElementById("canvas");
		ctx = canvas.getContext("2d"); 
		init();
	}//main

	//Configurações iniciais
	function init () {

		//Setando os valores iniciais
		valuesVariables();

		//Iniciando o objeto
		snake.setLeng(firstLeng);
		snake.setSize(BLOCKSIZE);
		snake.setCtx(ctx);
		snake.setDirection(firstDirection);
		snake.setSelfCollision(false);

		//Setando os valores de x e y
		for( i = 0; i < snake.getLeng(); i++ ){ 
			snake.setBody( i, iniX + i, iniY); 
		}	

		//Square
		square.setCanvas( canvas.width, canvas.height);
		square.setSize(BLOCKSIZE);
		square.setCtx(ctx);
		square.squarePosition();

		//Desenha o objeto
		gameLoop();

		controlKeyBoard();
	}//init

	//Função seta valores iniciais
	function valuesVariables () {

		//Limpando o teclado
		KeyBoard.DIRECTION.current = "";
		KeyBoard.ACTION.current = "";

		//Clear canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		//Snake and square
		BLOCKSIZE = 8;
	 	iniX = 10 ;
		iniY = 10 ;
		firstDirection = 3;
		firstLeng = 4;

		interval = 200;
	 	acDelta = 0;
	 	lastUpdateTime = 0;
	 	msPerFrame = 200;

	 	//Game
	 	gamePlay = false;
	 	gameInit = false;
	 	gameOver = false;
	 	gameWin = false;

	};//valuesVariables

	//Animação
	function gameLoop(){		
		//enterFrame
		var deltaTime = Date.now() - lastUpdateTime;

		controlKeyBoard();
		
		draw();

		if (gamePlay) {

			if (acDelta > msPerFrame) {
		        acDelta = 0;
		       	moveSnake();
		    } else {
		        acDelta += deltaTime;
		    }
		}

	    lastUpdateTime = Date.now();
		requestAnimFrame(gameLoop);
	};//gameLoop

	//Função para desenhar 
	function draw () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		snake.draw();
		square.draw();
	}//draw

	//Função para controlar o teclado
	function controlKeyBoard () {
		if (KeyBoard.ACTION.current != "") {
			playGame();
		} else {
			stopGame();
		};

		if ( KeyBoard.DIRECTION.current == "" ) {
			snake.setDirection(firstDirection);
		} else {
			
			if ( KeyBoard.DIRECTION.current == 1) {
				if ( snake.getLastDirection() !=2 ) {
					snake.setDirection(KeyBoard.DIRECTION.current);
				};
			} else if ( KeyBoard.DIRECTION.current == 2) {
				if ( snake.getLastDirection() !=1 ) {
					snake.setDirection(KeyBoard.DIRECTION.current);
				};
			} else if ( KeyBoard.DIRECTION.current == 3) {
				if ( snake.getLastDirection() != 4) {
					snake.setDirection(KeyBoard.DIRECTION.current);
				};
			} else if ( KeyBoard.DIRECTION.current == 4) {
				if ( snake.getLastDirection() !=3) {
					snake.setDirection(KeyBoard.DIRECTION.current);
				};
			};
		};
		
	};//controlKeyBoard

	//Função para iniciar o jogo
	function playGame () {
		gamePlay = true;
		gameInit = true;
	};//playGame

	//Função para parar o jogo
	function stopGame () {
		gamePlay = false;
	};//stopGame

	//Função que movimenta o snake
	function moveSnake () {
		snake.move();
	};//moveSnake

	//RequestAnimationFrame
	requestAnimFrame = (function () {
		var func = window.requestAnimationFrame ||
		    window.webkitRequestAnimationFrame 	||
		    window.mozRequestAnimationFrame 	||
		    window.oRequestAnimationFrame 		||
		    window.msRequestAnimationFrame 		||
		    function ( callback, element ) {
		    	window.setTimeout( callback, 1000 / interval ) ;
		    };
		    
		return function (callback, element) {
		    func.apply(window, [callback, element]);
		};

	})();//RequestAnimationFrame
	//incia o main
	main();
})();