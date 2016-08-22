var interface = (function() {
	'use strict';
	var speed, level, score;
	var pointInit = 10;
	var lenSpeed = 100;
	var lenLevel = 1000;
	//Functions SET
	function setSpeed (arg) {
		speed = arg;
	};

	function setLevel (arg) {
		level = arg;
	};

	function setScore (arg) {
		score = arg;
	};
	//End SET

	//Functions GET
	function getSpeed () {
		return speed;
	};
	
	function getLevel () {
		return level;
	};
	
	function getScore () {
		return score;
	};
	//End GET

	function incrementScore () {
		score += pointInit;
	}

	function incrementSpeed () {
		if ( level == 1 ) {
			if ( score >=  lenSpeed * speed){
				speed += 1;
			}	
		} else {
			if (score >= ( ( lenLevel * ( level - 1 ) )  + ( lenSpeed * speed ) ) ) {
				speed +=1;
			};
		};
		 
		if (speed == 11){
			speed = 1;
			level += 1;
		}
	};
	return {
		setSpeed : setSpeed,
		setScore : setScore,
		setLevel : setLevel,
		getSpeed : getSpeed,
		getLevel : getLevel,
		getScore : getScore,
		incrementScore : incrementScore,
		incrementSpeed : incrementSpeed
	};
}());