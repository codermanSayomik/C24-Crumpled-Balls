
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var ground;
var paper;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

dustbin1 = new Dustbin(650,650,200,20)
dustbin2 = new Dustbin(550,610,20,100)
dustbin3 = new Dustbin(750,610,20,100)

ground = new Ground(400,670,800,20)

paper = new Paper(50,650,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();

 
}

function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:65, y:-65})
	}
}



