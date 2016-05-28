(function () {

	//variaveis de controle
	var canvas, ctx;

	//Variaveis snake
	var BLOCKSIZE, iniX, iniY, firstDirection, firstLeng;

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
	}//init

	//Função seta valores iniciais
	function valuesVariables () {

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

	};//valuesVariables

	//Animação
	function gameLoop(){		
		//enterFrame
		var deltaTime = Date.now() - lastUpdateTime;
		
		draw();

	    lastUpdateTime = Date.now();
		requestAnimFrame(gameLoop);
	};//gameLoop

	//Função para desenhar 
	function draw () {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		snake.draw();
		square.draw();
	}//draw


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