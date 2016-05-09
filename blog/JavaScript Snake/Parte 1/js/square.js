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

	return{
		setCtx : setCtx,
		setSize : setSize,
		setCanvas : setCanvas,
		draw : draw,
		getX : getX,
		getY : getY
	};
}());