let x = 50;
let y = 50;
let f;
let anotherFace;

function setup() {
  createCanvas(700, 600);
  f = new Bruh(30,450,"red");
  anotherFace = new Bruh(80,550,"orange");
}

function draw(){
  background("blue");
    f.drawFace();
    f.moveFace();
    anotherFace.drawFace();
    anotherFace.moveFace();
}

class Bruh {

  constructor(x,y,color){
    this.x=x;
    this.y=y;
    this.color=color;
  }

  drawFace(){
    stroke(4);
    fill(this.color);
    face1(this.x,this.y,10,10);
  }

  moveFace(){
    this.x = this.x+5
    this.y = this.y-2
  }

}
function face(x,y){
  ellipse(x,y,40,40);
  ellipse(x-10,y-7,10,10);
  ellipse(x+10,y-7,10,10);
}

function face1(x,y){
  face(x+2.5,y+2.5);
}
