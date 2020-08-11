var wall,thickness;
var bullet, speed,weight;

function setup() {
speed=random(55,90);
weight=random(400, 1500);
bullet=createSprite(50,200,80,20);
bullet.velocityX=speed;
bullet.shapeColor= "black" ;
thickness=random(22,83);
wall=createSprite(1500,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
weight=random(30,52);
speed=random(223,321);
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
bullet.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180){
  bullet.shapeColor=color(255,0,0);
}
if (deformation<180 && deformation>100){
  bullet.shapeColor=color(230,230,0);
}
if (deformation<100)
{
  bullet.shapeColor=color(0,255,0);
}
  }  
  if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if (damage>10){
  wall.shapeColor=color(255,0,0);
}
if(damage<10){
  wall.shapeColor=color(0,255,0);
}
  }

 

  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
return false;
  }




















































































































































































































































