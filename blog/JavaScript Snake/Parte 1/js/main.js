(function () {

	//variaveis de controle
	var canvas, ctx;

	function main ( ) {
		canvas = document.getElementById("canvas");
		ctx = canvas.getContext("2d"); 
	}//main

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