$(document).ready(function() {
    Crafty.init(600, 400, document.getElementById('game'));
    Crafty.background('rgb(127,127,127)');

    Crafty.scene("game", function(){
        //Paddles
        var Paddle1 = Crafty.e("Paddle, 2D, Collision, DOM, Color")
            .color('rgb(255,0,0)')
            .attr({ x: 250, y: 290, w: 100, h: 10, paddlespeed: 1})
            .bind('UpdateFrame', function () {
                if (this.y <= 0){
                    this.x = Crafty.math.randomInt(50, 449);
                    this.y = 390;
                    Crafty("Points").each(function () {
                        this.text("Passed " + ++this.points + " Paddles") });
                }
                this.y -= this.paddlespeed;
            })
            .onHit('Man', function(){
                        var paddley = this.y;
                        var paddlex = this.x;
                        Crafty("Man").each(function () {
                            this.y = paddley - 10;
                        });
                    }
                );
        
        var Paddle2 = Crafty.e("Paddle, 2D, Collision, DOM, Color")
            .color('rgb(255,0,0)')
            .attr({ x: Crafty.math.randomInt(50,450), y: 390, w: 100, h: 10, paddlespeed: 1})
            .bind('UpdateFrame', function () {
                if (this.y <= 0){
                    this.x = Crafty.math.randomInt(50, 449);
                    this.y = 390;
                    Crafty("Points").each(function () {
                        this.text("Passed " + ++this.points + " Paddles") });
                }
                this.y -= this.paddlespeed;
            })
            .onHit('Man', function(){
                        var paddley = this.y;
                        var paddlex = this.x;
                        Crafty("Man").each(function () {

                            this.y = paddley - 10;
                        });
                    }
                );

        var Paddle3 = Crafty.e("Paddle, 2D, Collision, DOM, Color")
            .color('rgb(255,0,0)')
            .attr({ x: Crafty.math.randomInt(50,450), y: 490, w: 100, h: 10, paddlespeed: 1})
            .bind('UpdateFrame', function () {
                if (this.y <= 0){
                    this.x = Crafty.math.randomInt(50, 449);
                    this.y = 390;
                    Crafty("Points").each(function () {
                        this.text("Passed " + ++this.points + " Paddles") });
                }
                this.y -= this.paddlespeed;
            })
            .onHit('Man', function(){
                        var paddley = this.y;
                        var paddlex = this.x;
                        Crafty("Man").each(function () {

                            this.y = paddley - 10;
                        });
                    }
                );

        var Paddle4 = Crafty.e("Paddle, 2D, Collision, DOM, Color")
            .color('rgb(255,0,0)')
            .attr({ x: Crafty.math.randomInt(50,450), y: 590, w: 100, h: 10, paddlespeed: 1})
            .bind('UpdateFrame', function () {
                if (this.y <= 0){
                    this.x = Crafty.math.randomInt(50, 449);
                    this.y = 390;
                    Crafty("Points").each(function () {
                        this.text("Passed " + ++this.points + " Paddles") });
                }
                this.y -= this.paddlespeed;
            })
            .onHit('Man', function(){
                        var paddley = this.y;
                        var paddlex = this.x;
                        Crafty("Man").each(function () {

                            this.y = paddley - 10;
                        });
                    }
                );
        
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
                        Crafty.e('2D, DOM, Mouse').attr({
                            x: 0,
                            y: 0,
                            w: 600,
                            h: 400
                          }).bind('Click', function (e) {
                            console.log("click to restart");
                            Crafty.scene("game");
                          });
                        
                        Crafty.e("2D, DOM, Text")
                        .attr({ x: Crafty.viewport.width / 2 - 100, 
                                y: Crafty.viewport.height / 2 - 20,
                                w: 200,
                                h: 20})
                        .text('Game Over. Click anywhere to restart')
                        .textAlign("center");
                    });
                }
            });

        //Score boards
        Crafty.e("Points, DOM, 2D, Text")
            .attr({ x: 415, y: 20, w: 100, h: 20, points: 0 })
            .text("Passed 0 Paddles");

        //Start Game


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
            console.log("click to start");
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


    Crafty.scene("title");

    
});