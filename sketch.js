
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy, stone, tree, mango
var boyImage, stoneImage, mangoImage, treeImage
var mango1, mango2, mango3, mango4, mango5
function preload()
{
	boyImage=loadImage("sprites/boy.png");
	stoneImage=loadImage("sprites/stone.png");
	treeImage=loadImage("sprites/tree.png");
	mangoImage=loadImage("sprites/mango.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
//wwWW
	//Create the Bodies Here.
	
	ground = new Ground(600,height,1200,20);
	stone = new Stone(50, 550, 50, 50)
	 boy = createSprite(100,580)
	 boy.addImage(boyImage)
	 boy.scale = 0.1
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  ground.display()
  stone.display()
  drawSprites();
 
}

function keyPressed(){

}

function detectCollision(stone, mango){
	

}