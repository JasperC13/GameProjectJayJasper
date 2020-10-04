let soccerField;
let p1;
let p2;

function preload() {
  soccerField = loadImage('assets/SoccerField.jpg');
}


function setup() {
  createCanvas(551, 368);

  p1 = new Player1(90,184,3,3);
  p2 = new Player2(461,184,3,3);
}

function draw(){
  image(soccerField, 0, 0)
  p1.drawMe();
  p1.moveMe();
  p2.drawMe();
  p2.moveMe();

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
