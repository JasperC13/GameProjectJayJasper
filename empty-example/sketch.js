let soccerField;

function preload() {
  soccerField = loadImage('assets/SoccerField.jpg');

}


function setup() {
  createCanvas(720, 400);
  image(soccerField, 0, 0);
}
