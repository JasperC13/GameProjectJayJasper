let soccerField;
let p1;
let p2;
let ball;
let v1;
let v2;

function preload() {
  soccerField = loadImage('assets/SoccerField.jpg');
}


function setup() {
  createCanvas(551, 368);

  p1 = new Player1(90,184,3,3);
  p2 = new Player2(461,184,3,3);
  ball = new Ball(275.5,184,1,0);
  v1 = createVector(1,1);
}

function draw(){
  image(soccerField, 0, 0)
  p1.drawMe();
  p1.moveMe();
  p2.drawMe();
  p2.moveMe();

  ball.drawBall();
  ball.moveBall();
  ball.bouceBall();

}

class Player1 {
  constructor(x,y,xspeed,yspeed){
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }

  drawMe(){
    fill("red");
    ellipse(this.x,this.y,20,20);
  }

  moveMe(){
    if (keyIsDown(87)){
    this.y -= this.yspeed;
 }

 if (keyIsDown(83)) { // if you hold the down arrow, move down by yspeed
     this.y += this.yspeed;
 }

 if (keyIsDown(68)) { //if you hold the right arrow, move right by xspeed
   this.x += this.xspeed;
 }

 if (keyIsDown(65)) { //if you hold the left arrow, move left by xspeed
   this.x -= this.xspeed;
 }
  }
}

class Player2 {
  constructor(x,y,xspeed,yspeed){
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }

  drawMe(){
    fill("blue");
    ellipse(this.x,this.y,20,20);
  }

  moveMe(){
    if (keyIsDown(UP_ARROW)){
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
}

class Ball {
  constructor(x,y,xspeed,yspeed){
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }

  drawBall(){
    fill("white");
    ellipse(this.x,this.y,10,10);
  }

  moveBall(){
    this.x += v1.x;
    this.y += v1.y;
  }

  bouceBall(){
    if(dist(p1.x,p1.y,ball.x,ball.y)<=15){
      let collision1x = (ball.x + p1.x)/2;
      let collision1y = (ball.y + p1.y)/2;
      let v2 = createVector(collision1x - p1.x, collision1y - p1.y);
      v2.div(20);
      v1.add(v2);
    }
    if(dist(p2.x,p2.y,ball.x,ball.y)<=15){
      let collision2x = (ball.x + p2.x)/2;
      let collision2y = (ball.y + p2.y)/2;
      let v3 = createVector(collision2x - p2.x, collision2y - p2.y);
      v3.div(20);
      v1.add(v3);
    }
  }
}
