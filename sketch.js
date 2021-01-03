
var bullet = [], wall, weight = [], speed = [], de = [], thickness = 0;


function setup() {
  createCanvas(1600,400);
  for (var bullets = 0; bullets < 1; bullets++) {
   bullet[bullets] = createSprite(200, 200, 40, 10);
  }

  weight[0] = random(30, 52);

  speed[0] = random(223, 321);

  bullet[0].velocityX = speed[0];
  
  thickness=random(22,83)
  wall = createSprite(1200, 200, thickness, height/2);

}

function draw() {
  background("lightblue"); 
  
  
  
  if (bullet[0].collide(wall)) {
    de[0] = (0.5 * weight[0] * speed[0] * speed[0]) / (thickness * thickness * thickness);
    bullet[0].velocityX = 0;
    console.log((0.5 * weight[0] * speed[0] * speed[0]) + " / " + (thickness * thickness * thickness) + " = " + de[0])
    if (de[0] > 10) {
      bullet[0].shapeColor = "red";
    } else
    if (de[0] < 10) {
      bullet[0].shapeColor = "green";
    } 
    
  }
  drawSprites();
}
