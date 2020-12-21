
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	img=loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(450,685,1000,20)
	paperBall = new Garbage(100,483,20,20)
	dustbin=new dustbin(750,670)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

  paperBall.display();
  ground.display();
  dustbin.display();
  image(img,650,570,200,100)
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
	 Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:65,y:-65})  
	 }
   }
   
