var snake = ( function() {
	'use strict';

	var direction;
	var lastDirection;
	var leng;
	var body = new Array();
	var ctx;
	var size;
	var selfCollision;
	var squareCollision;
	//Functions SET
	function setDirection ( arg ) {
		direction = arg;
	};

	function setSize ( arg ) {
		size = arg;
	};
	
	function setLeng ( arg ) {
		leng = arg;
	};

	function setCtx ( arg ) {
		ctx =  arg;
	};

	function setBody ( i , lx , ly ) {
		body[i]={ x : lx, y : ly };
	};

	function setSquareCollision ( arg ) {
		squareCollision =  arg;
	};

	function setSelfCollision ( arg ) {
		selfCollision = arg;
	};
	//End SET

	//Functions GET
	function getLeng () {
		return leng;
	};

	function getBody () {
		return body;
	};

	function getLastDirection () {
		return lastDirection;
	};

	function getSelfCollision () {
		return selfCollision;
	};

	function getSquareCollision () {
		return squareCollision;
	}
	//End GET

	function draw ( ) {

		for (var i = 0; i < leng ; i++ ) {
			ctx.strokeStyle = "#FFFFFF";
			ctx.fillStyle = i == leng - 1 ? "#CC0033" : "#000000";
			ctx.beginPath();
			ctx.lineWidth = 2;
			ctx.strokeRect( body[i].x * size, body[i].y * size, size, size);
			ctx.fillRect( body[i].x * size, body[i].y * size, size, size);			
			ctx.closePath();
		};	
	};//draw

	function move ( ) {

		//Current x, y 
		var cX = body[ leng - 1 ].x;
		var cY = body[ leng - 1 ].y;

		switch( direction ) {
			case 1://UP
				cY --;
			break;
			case 2://Down
				cY ++;
			break;
			case 3://Right
				cX ++;
			break;
			case 4://Left
				cX --;
			break;
		}

		lastDirection = direction;

		for (var i = 0; i < leng -1; i++) {
			body[i].x = body[i + 1].x;
			body[i].y = body[i + 1].y;

			if (body[i + 1].x == cX && body[i + 1].y == cY ) {
				selfCollision = true;
			} 

			if (body[leng -1].x == square.getX() && body[leng -1].y == square.getY()) {
				squareCollision = true;
			};
		};
		
		body[leng - 1 ].x = cX;
		body[leng - 1 ].y = cY;
		
	};//move

	function grow ( sx, sy ) {
		body.unshift({ x : sx, y : sy });
		leng += 1;
	}//grow

	return{
		setSize : setSize,
		setDirection : setDirection,
		setLeng : setLeng,
		setCtx : setCtx,
		setBody : setBody,
		setSquareCollision : setSquareCollision,
		setSelfCollision : setSelfCollision,
		getLeng : getLeng,
		getBody : getBody,
		getLastDirection : getLastDirection,
		getSelfCollision : getSelfCollision,
		getSquareCollision : getSquareCollision,
		draw : draw,
		move : move,
		grow : grow
	};

}());