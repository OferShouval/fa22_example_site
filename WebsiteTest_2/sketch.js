var xCoord = [], yCoord = [];

var angle = 0;
var distance = 200;

var numSegments = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < numSegments; i++){
    xCoord[i] = width/2;
    yCoord[i] = height/2;
  }

}

function draw() {
  background(0,50);
  fill(0);

  var xMove = distance*cos(angle) + width/2 + map(noise(angle), 0,1,-100,100);
  var yMove = distance*sin(angle)+height/2 + map(noise(-angle), 0,1,-100,100);

  xCoord[numSegments-1] = xMove;
  yCoord[numSegments-1] = yMove;



  for(var i = 0; i < numSegments; i++){
    xCoord[i] = xCoord[i+1];
    yCoord[i] = yCoord[i+1];

    var diameter = sin(map(i,0,numSegments-1,0,PI)) * 450

    stroke(255-diameter*2, 0 , diameter*2)

    ellipse(xCoord[i], yCoord [i], diameter,diameter)

  }

  angle+=0.03;


}
