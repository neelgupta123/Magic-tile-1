var tile,tileImage, starttile,starttileImage;
var fadded;
var tileGroup;
var score=0;
var survivalTime=0;
var ground;

function preload(){
  
  tileImage = loadImage("tile.JPG");
  starttileImage = loadImage("start.JPG");

  fadded = loadSound("Fadded.mp3");
 
 
}



function setup() {
  createCanvas(400,578);
  
  
  
  
  tileGroup = new Group();
  
  
  
  
}


function draw() {
  background("skyblue");
  
  fadded.play();

  makeTiles();
  
  if(mousePressedOver(tile)){
    tileGroup.destroyEach();

  }
  
  drawSprites();
}

function makeTiles(){
  if(frameCount%90===0){
    tile = createSprite(Math.round(random(30,370)),0,10,10);
    tile.addImage("tileI",tileImage);
    tile.velocityY=6;
    tile.scale=0.4;
    tile.setLifetime=578/6;
    tileGroup.add(tile);
  }
}

