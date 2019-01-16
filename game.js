$(document).ready(function() {
    Crafty.init(600, 400, document.getElementById('game'));
    Crafty.background('rgb(127,127,127)');

    Crafty.scene("game", function(){
        Crafty.c("Paddle", {
            paddle: function(startposx, startposy) {
                this.color('rgb(255,0,0)');
                this.attr({ x: startposx, y: startposy, w: 100, h: 10, paddlespeed: 1})
                this.bind('UpdateFrame', function () {
                    if (this.y <= 0){
                        this.x = Crafty.math.randomInt(50, 449);
                        this.y = 390;
                        Crafty("Points").each(function () {
                            this.text("Passed " + ++this.points + " Paddles") });
                    }
                    this.y -= this.paddlespeed;
                })
                this.onHit('Man', function(){
                            var paddley = this.y;
                            var paddlex = this.x;
                            Crafty("Man").each(function () {
                                this.y = paddley - 10;
                            });
                        });
                return this;
            }
        });

        //Paddles
        var Paddle1 = Crafty.e("Paddle, 2D, Collision, DOM, Color").paddle(250, 290);    
        var Paddle2 = Crafty.e("Paddle, 2D, Collision, DOM, Color").paddle(Crafty.math.randomInt(50,450), 390);    
        var Paddle3 = Crafty.e("Paddle, 2D, Collision, DOM, Color").paddle(Crafty.math.randomInt(50,450), 490);    
        var Paddle4 = Crafty.e("Paddle, 2D, Collision, DOM, Color").paddle(Crafty.math.randomInt(50,450), 590);    
    
        //Man
        Crafty.e("Man, 2D, DOM, Color, Gravity, Multiway")
            .attr({ x: 295, y: 90, w: 10, h: 10 })
            .color('rgb(0,0,255)')
            .multiway(150, { LEFT_ARROW: 180, RIGHT_ARROW: 0 })
            .gravityConst(20000)
            .gravity("2D")
            .bind('UpdateFrame', function () {
                var manObj = this;
                if(this.y <= 0 || this.y > 390){
                    Crafty("Paddle").each(function(){
                        this.paddlespeed = 0;
                        manObj.antigravity();
                        Crafty.scene("gameover");
                    });
                }
            });

        //Score boards
        Crafty.e("Points, DOM, 2D, Text")
            .attr({ x: 415, y: 20, w: 100, h: 20, points: 0 })
            .text("Passed 0 Paddles");


    });

    Crafty.scene("title", function() {    
        Crafty.e('2D, DOM, Mouse').attr({
            x: 0,
            y: 0,
            w: 600,
            h: 400
          }).bind('Click', function (e) {
            Crafty.scene("game");
          });
        
        Crafty.e("2D, DOM, Text")
        .attr({ x: Crafty.viewport.width / 2 - 100, 
                y: Crafty.viewport.height / 2 - 20,
                w: 200,
                h: 20})
        .text('Click anywhere to start game')
        .textAlign("center");
    });

    Crafty.scene("gameover", function() {
        Crafty.e('2D, DOM, Mouse').attr({
            x: 0,
            y: 0,
            w: 600,
            h: 400
          }).bind('Click', function (e) {
            Crafty.scene("game");
          });
        
        Crafty.e("2D, DOM, Text")
        .attr({ x: Crafty.viewport.width / 2 - 100, 
                y: Crafty.viewport.height / 2 - 20,
                w: 200,
                h: 20})
        .text('Gameover. Click anywhere to restart game.')
        .textAlign("center");
    });


    Crafty.scene("title");

    
});