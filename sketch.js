var car, wall;
var speed, weight;

function setup() {
  createCanvas(1400,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = ("white");

  
  wall = createSprite(1000, 200, 60, 600);
  wall.shapeColor = ("gray");

}

function draw() {
  background(0); 
  
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2) {
      car.velocityX = car.velocityX * (0);
      wall.velocityX = wall.velocityX * (0);
}
if (car.y - wall.y < wall.height/2 + car.height/2
  && wall.y - car.y < wall.height/2 + car.height/2){
    car.velocityY = car.velocityY * (0);
    wall.velocityY = wall.velocityY * (0);
}

if(isToching(car, wall)){
  car.shapeColor = ("white");
  wall.shapeColor = "gray";
    }
 
   else{
     car.shapeColor = "green";
     wall.shapeColor = "green";
    }

    if (wall.x - car.x < (car.width + wall.width)/2){
   
      car.velocityX = 0;
      var deformation = 0.5 * weight * speed * speed/22509;
      if (deformation > 180);{
        car.shapeColor = color(255, 0, 0);
      }

      if(deformation < 180 && deformation > 100){

        car.shapeColor = color(230, 230, 0);

      }

      if(deformation < 100){

        car.shapeColor = color(0, 225, 0);

      }
      }

  drawSprites();
}

function isToching(car, wall){
  if(car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y + wall.y < wall.height/2 + car.height/2
    && wall.y - wall.y , wall.height/2 + car.height/2){
  
    return true;
  }
  else {
    return false;
  }
  }
  