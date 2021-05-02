
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,paper;

function preload()
{
	dustbinImage = loadImage("dustbin.jpg")
	
}

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin = new Dustbin(500,300,20,110);
	dustbin2 = new Dustbin(620,300,20,110);
	dustbin3 = new Dustbin(560,365,110,20);
	paper = new Paper(120,300,20);
	ground = new Ground(400,390,800,30);
// 	{
// 		isStatic:true 
//   }

//  World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("WHITE");
  
  //drawSprites();
  paper.display();
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  text("x:"+mouseX+"y:"+mouseY,200,50);
  imageMode(CENTER);
  image(dustbinImage,560,310,140,140);
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-70});
	}
}


