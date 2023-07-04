var boat ,boat_moving;
var sea ,sea_image;

function preload(){
 sea_image=loadImage("sea.png");
 boat_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200,2000,2000);
  sea.addImage(sea_image);  
  sea.scale=.3;
  boat=createSprite(170,200,20,20);
  boat.scale=0.3;
  boat.addAnimation("bote_moviendose",boat_moving);
}

function draw() {
  background("blue");

  sea.velocityX=-1;
  if(sea.x<=0){
    sea.x=sea.width/2;
  }

 drawSprites();
}