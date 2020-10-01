let balls = [];

function setup() {
  createCanvas(500, 500);
}

function draw(){
	background("pink");

  for (let i = 0; i < balls.length; i++) {
      balls[i].drawBall();
      balls[i].moveBall();
    }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(random(0,800), random(0,400));
  balls.push(b);
  console.log(balls);
  push();
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(random(0,270), random(0,270), random(0,270));
		    ellipse(this.x,this.y,random(100),random(100));
	}

	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+random(-2,2);
		this.y = this.y+random(-0.5,0.5);
	}


}
