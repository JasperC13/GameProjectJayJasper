let soccerField;
let p1;
let p2;
let ball;
let v1;
let v2;
let v3;
let borderRight;
let borderleft;
let borderTop;
let borderBottom;
let goal1;
let goal2;
let p1Points=0;
let p2Points=0;




function preload() {
  soccerField = loadImage('assets/SoccerField.jpg');
}


function setup() {
  createCanvas(551, 368);

  p1 = new Player1(90,184,2,2);
  p2 = new Player2(461,184,2,2);
  ball = new Ball(275.5,184);
  borderRight = new Right(551, 1, 551, 368);
  borderLeft = new Left(1, 1, 1, 368);
  borderTop = new Top(1,1, 551, 1 );
  borderBottom = new Bottom(1, 368, 551, 368);
  v1 = createVector(0,0);
  goal1 = new Goal1(510.5, 161, 510.5, 206);
  goal2 = new Goal2(40, 161, 40, 206);
}

function draw(){
  image(soccerField, 0, 0)
  p1.drawMe();
  p1.moveMe();
  p2.drawMe();
  p2.moveMe();

  ball.drawBall();
  ball.moveBall();
  ball.bounceBall();
  ball.borderHit();
  ball.goalCheck();
  ball.points();
  //ball.borderHitLeft();

  borderTop.drawMe();
  borderRight.drawMe();
  borderLeft.drawMe();
  borderBottom.drawMe();

  goal1.drawMe();
  goal2.drawMe();

  if(v1.x>1.5){
    v1.x=1.5
  }
  if(v1.x<-1.5){
    v1.x = -1.5
  }
  if(v1.y>1.5){
    v1.y=1.5
  }
  if(v1.y<-1.5){
    v1.y=-1.5
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
    strokeWeight(5);
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

class Player1 {
  constructor(x,y,xspeed,yspeed){
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }

  drawMe(){
    strokeWeight(0);
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
 if(this.y>330){
   this.y = 330
 }
 if(this.y<38){
   this.y = 38
 }
 if(this.x>500){
   this.x = 500
 }
 if(this.x<51){
   this.x = 51
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
 if(this.y>330){
   this.y = 330
 }
 if(this.y<38){
   this.y = 38
 }
 if(this.x>500){
   this.x = 500
 }
 if(this.x<51){
   this.x = 51
}
 }
}

class Ball {
  constructor(x,y){
    this.x = x;
    this.y = y;

  }

  drawBall(){
    fill("white");
    ellipse(this.x,this.y,10,10);
  }

  moveBall(){
    this.x += v1.x;
    this.y += v1.y;
  }
//   borderHitLeft(){
//     if(this.y > 368){
//       this.y = 4
//       //v1 = (-v1.x, -v1.y)
// }
//     if(this.y < 0){
//       this.y = 364
// }
//     if(this.x < 0 ){
//       this.x = 547
//     }
//     if(this.x > 551){
//       this.x = 4
//     }
//
//
//   }
  borderHit(){
    if(this.y>335){
      v1.y = -v1.y
    }
    if(this.y<33){
      v1.y = -v1.y
    }
    if(this.x>505){
      v1.x = -v1.x
    }
    if(this.x<46){
      v1.x = -v1.x
    }
  }



  bounceBall(){
    if(dist(p1.x,p1.y,ball.x,ball.y)<=20){
      let collision1x = (ball.x + p1.x)/2;
      let collision1y = (ball.y + p1.y)/2;
      let v2 = createVector(collision1x - p1.x, collision1y - p1.y);
      v2.div(20);
      v1.add(v2);
    }
    if(dist(p2.x,p2.y,ball.x,ball.y)<=20){
      let collision2x = (ball.x + p2.x)/2;
      let collision2y = (ball.y + p2.y)/2;
      let v3 = createVector(collision2x - p2.x, collision2y - p2.y);
      v3.div(20);
      v1.add(v3);
    }
  }

  goalCheck(){
    if(this.x>=40 && this.x <=50 && this.y >= 161 && this.y <=206){
      this.x=275.5;
      this.y=184;
      p1.x=235;
      p1.y=184;
      p2.x=461;
      p2.y=184;
      v1.x=0;
      v1.y=0;
      p2Points+=1;
    }
    if(this.x>=500.5 && this.x <=510.5 && this.y >= 161 && this.y <=206){
      this.x=275.5;
      this.y=184;
      p1.x=90;
      p1.y=184
      p2.x=316;
      p2.y=184
      v1.x=0;
      v1.y=0;
      p1Points+=1;
    }
  }
  points(){
    textSize(32);
    text(p1Points + ":" + p2Points, 252.5,27);
  }
}

class Goal1 {
  constructor(x, y, x2, y2){
    this.x = x;
    this.x2 = x2;
    this.y2 = y2;
    this.y = y;
  }
  drawMe(){
    fill("black")
    strokeWeight(2);
    line(this.x, this.y, this.x2, this.y2)


  // if(ball.x = 510.5 && ball.y > 161 && ball.y < 206){ //if touches - red scores
  //   ball.x = 275.5
  //   ball.y = 184
  }

  }
//}

class Goal2 {
  constructor(x, y, x2, y2){
    this.x = x;
    this.x2 = x2;
    this.y2 = y2;
    this.y = y;
  }
  drawMe(){
    fill("black")
    strokeWeight(2);
    line(this.x, this.y, this.x2, this.y2);
  }
}
