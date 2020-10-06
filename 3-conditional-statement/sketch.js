//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;
let lives;
let points;
let mySound;

function preload(){
  soundFormats('wav');
  bonk = loadSound('bonk.wav');
  plip = loadSound('plip.wav');
}

function setup() {
  createCanvas(500, 400);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3, 3);

  lives=10;
  points=0

}

function draw(){
	background("pink");

  fill("white");
  rect(0,0,75,35);
  stroke(4);
  text("Lives: " + lives,5,15);
  text("Points: " + points,5,30);

  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Ball(random(0,width), 0, random(-1,1), random(1,3));
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

  if(lives==0){
    noLoop();
  }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y,xspeed,yspeed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
	}

	drawMe(){  // draw the running person
    		stroke("purple");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,20,20);
        line(this.x,this.y, this.x, this.y+40);
        line(this.x, this.y+40, this.x-20, this.y+60);
        line(this.x, this.y+40, this.x+10, this.y+50);
        line(this.x+10, this.y+50, this.x+5, this.y+60);
        line(this.x, this.y+15, this.x-10, this.y+25);
        line(this.x-10, this.y+25, this.x+10, this.y+35);
	}

	moveMe(){
    if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by yspeed
       this.y -= this.yspeed;
    }

    if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by yspeed
        this.y += this.yspeed;
    }

    if (keyIsDown(RIGHT_ARROW)) { //if you hold the right arrow, move right by xspeed
      this.x += this.xspeed;
    }

    if (keyIsDown(LEFT_ARROW)) { //if you hold the left arrow, move left by xspeed
      this.x -= this.xspeed;
    }
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y,xspeed,yspeed){
		this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0);
      strokeWeight(1);
    	fill(232,24,21);
		  ellipse(this.x,this.y,10,10);
      line(this.x,this.y-5,this.x-3,this.y-7);
      ellipse(this.x-3,this.y-10,5,3);
	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  	bounceBall(){
    		if (this.x >= me.x-1 && this.x <= me.x+1 && this.y > me.y-1 && this.y < me.y+1){
      			this.yspeed = -this.yspeed;
            this.y=this.y-10;

            bonk.setVolume(0.1);
            bonk.play();

            lives = lives-1;
    		}
        if(this.y==400){
            points = points+1;

            plip.setVolume(0.3);
            plip.play();
        }
  	}
}
