

var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,60);               
  wall= createSprite(1200,200,thickness,height/2);

 speed=random(223,321);
 weight=random(309,52); 
 thickness=random(22,83);

 car.velocityX = speed;
}

function draw() {
  background(255,255,255);
  
  if(hasCollided(bullet, wall)){
    bullet.velocityx=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if(damage>10){
    wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge =lbullet.x =lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;            
}




