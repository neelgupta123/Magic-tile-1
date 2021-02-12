var tile,tileImage, starttile,starttileImage;

var tileGroup;
var score=0;
var survivalTime=0;
var ground;

function preload(){
  
  tileImage = loadImage(tile.JPG);
  starttileImage = loadImage(start.JPG);

  
 
 
}



function setup() {
  createCanvas(400,600);
  
  
  
  
  
  
  
  
  
}


function draw() {
  background("skyblue");
  
  
  
  
  
  drawSprites();
}

function makeTiles(){
 tile = createSprite(Math.round(random(30,370)),0,10,10);
 tile.addImage("tileI",tileImage);
 tile.velocityY=-3
}

