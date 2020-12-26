var ground, helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody; 
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rect1=createSprite(width/2,650, 200, 20);
	rect1.shapeColor = "red";
	rect2=createSprite(width/2.7,610, 20, 100);
	rect2.shapeColor = "red";
	rect3=createSprite(width/1.6,610, 20, 100);
	rect3.shapeColor = "red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	packageBody = Bodies.circle(width/2 , 200 , 23 , {restitution: 0.4, isStatic:true});
	World.add(world, packageBody);
	
	Engine.run(engine);
  
}


function draw() {  
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites(); 

  rect1.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Body.setStatic(packageBody, false);

  }
}


