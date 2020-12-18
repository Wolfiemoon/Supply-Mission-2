var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//RED BOX
	redbox1Sprite=createSprite(width/2, 650, 90, 20)
	redbox1Sprite.shapeColor=color("red");
//	redbox1Sprite.visible =false
	redbox2Sprite=createSprite(345, 615, 20, 90);
	redbox2Sprite.shapeColor=color("red");
	redbox3Sprite=createSprite(455,615,20,90)
	redbox3Sprite.shapeColor=color("red");
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//Create redbox1(Bottom)
	redbox1Sprite = Bodies.rectangle(width/2, 636, 90 , 20, {isStatic:true, friction:0.3, density:0.3} );
 	World.add(world, redbox1Sprite);
	//Create redbox2(left)
	redbox2Sprite = Bodies.rectangle(345, 614, 20 , 90, {isStatic:true, friction:0.3, density:0.3} );
 	World.add(world, redbox2Sprite);
	//Create redbox2(left)
	redbox3Sprite = Bodies.rectangle(455, 614, 20 , 90, {isStatic:true, friction:0.3, density:0.3} );
	World.add(world, redbox3Sprite);

	redbox1Sprite.debug=true
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);


  }
}



