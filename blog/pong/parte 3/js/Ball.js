var Ball = function( config ){
	this.x = config.x || 0;
	this.y = config.y || 0;
	this.r = config.r || 0;
	this.speed = config.speed || 8;
	this.direction = config.d || 0; // 0 - direita, 1 - Esquerda
	this.angle = config.a || 0;
}

Ball.prototype.draw = function( ctx ){
	ctx.fillStyle = "#000000"
	ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true); 
    ctx.closePath();
    ctx.fill();
};

Ball.prototype.move = function( ){

	this.y += this.angle;

	if (this.direction == 1) {
		this.x += this.speed;
	} else {
		this.x -= this.speed;	
	};
};