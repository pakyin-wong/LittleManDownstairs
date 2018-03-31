

function run(){
	background();
}

function background(){
	Crafty.init(500,350, document.getElementById('game'));
	Crafty.e('2D, DOM, Color').attr({x: 0, y: 0, w: 1000, h: 1000}).color('#ace');
}

function 