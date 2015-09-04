var Player = function( config ){
	this.x = config.x || 0;
	this.y = config.y || 0;
	this.width = config.w || 0;
	this.height = config.h || 0;
	this.limit = config.limit || 300;
	this.speed = config.speed || 8;
}

Player.prototype.draw = function( ctx ){
	ctx.fillStyle = "#000000"
	ctx.fillRect( this.x, this.y, this.width, this.height );
};

Player.prototype.move = function( dir ){
	
	if ( dir == 1) {
		if (this.y > 0) {
			this.y -= this.speed;
			if (this.y < 0) {
				this.y = 0;
			};
		};
	} else {
		if (this.y < this.limit - this.height) {
			this.y += this.speed;
			if (this.y > ( this.limit - this.height ) ) {
				this.y = this.limit - this.height;
			};
		};
		
	};
};