let soccerField;
let p1;
let p2;
let ball;
<<<<<<< HEAD
let v1;
let v2;
let v3;
=======
let borderRight;
let borderleft;
let borderTop;
let borderBottom;
>>>>>>> d52795ddeab1282253af4cb8857549dbafd04dfd

function preload() {
  soccerField = loadImage('assets/SoccerField.jpg');
}


function setup() {
  createCanvas(551, 368);

  p1 = new Player1(90,184,3,3);
  p2 = new Player2(461,184,3,3);
<<<<<<< HEAD
  ball = new Ball(275.5,184,1,0);
  v1 = createVector(1,1);
=======
  ball = new Ball(275.5,184,1,1);
  borderRight = new Right(551, 1, 551, 368);
  borderLeft = new Left(1, 1, 1, 368);
  borderTop = new Top(1,1, 551, 1 );
  borderBottom = new Bottom(1, 368, 551, 368);
>>>>>>> d52795ddeab1282253af4cb8857549dbafd04dfd
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

  borderTop.drawMe();
  borderRight.drawMe();
  borderLeft.drawMe();
  borderBottom.drawMe();

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
    strokeWeight(0);
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


class Top {
  constructor(x,y,x2,y2){
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
  }

  drawMe(){
    fill("black");
    strokeWeight(10);
    line(this.x, this.y, this.x2, this.y2);
}
}
class Right {
  constructor(x,y,x2,y2){
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
  }

  drawMe(){
    fill("black");
    strokeWeight(10);
    line(this.x, this.y, this.x2, this.y2);
}
}
class Left {
  constructor(x,y,x2,y2){
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
  }

  drawMe(){
    fill("black");
    strokeWeight(10);
    line(this.x, this.y, this.x2, this.y2);
}
}
class Bottom {
  constructor(x,y,x2,y2){
    this.x = x;
    this.y = y;
    this.x2 = x2;
    this.y2 = y2;
  }

  drawMe(){
    fill("black");
    strokeWeight(10);
    line(this.x, this.y, this.x2, this.y2);
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
    strokeWeight(0);
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
