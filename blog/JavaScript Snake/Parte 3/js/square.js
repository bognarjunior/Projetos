var square = (function() {
	'use strict';

	var ctx;
	var size;
	var x;
	var y;
	var canvas;
	//Functions Set
	function setCtx ( arg ) {
		ctx =  arg;
	};

	function setSize ( arg ) {
		size = arg;
	};

	function setCanvas ( w, h ) {
		canvas = { W : w, H : h }
	}
	//End Set 

	//Functions Get
	function getX ( ) {
		return x;	
	}

	function getY ( ) {
		return y;	
	}
	//End Get

	function draw ( ) {
		ctx.fillStyle = "#336633";
		ctx.beginPath();
		ctx.fillRect( x * size, y * size, size, size);			
		ctx.closePath();
	};

	function squarePosition () {
		
		var isDraw = true;
		
		while(isDraw == true){

			isDraw = false;

			x = parseInt( Math.random()* ( canvas.W / size ) ) ;
			y = parseInt( Math.random()* ( canvas.H / size ) ) ;

			//Testa para saber se o espaço já está preenchido
			for ( var i = 0; i < snake.getLeng(); i++) {
				if ( snake.getBody()[i].x == x && snake.getBody()[i].y == y) {
					isDraw = true;
				};
			};
		}
	};

	return{
		setCtx : setCtx,
		setSize : setSize,
		setCanvas : setCanvas,
		squarePosition : squarePosition,
		draw : draw,
		getX : getX,
		getY : getY
	};
}());