var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1200,400);
  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet = createSprite(600, 200, 50, 10);
  speed = random(223, 321);
  weight = random(30, 52);

}

function draw() {
  background(255,255,255);  
  drawSprites();
  bullet.velocityX = speed;
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);

    if(damage>10){
      wall.shapeColor = color(255, 0, 0);
    }
    if(damage<10){
      wall.shapeColor = color(0, 255, 0);
    }
  }
}
function hasCollided(lBullet, lWall){
  bulletRightEdge = lBullet.x + lBullet.width;
  wallLeftEdge = lWall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}