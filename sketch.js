const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,boy,stone;
var mango1, mango2, mango3, mango4, mango5;
var chain;
var ground;
var backgroundImage


function preload()
{
	boy = loadImage("images/boy.png");
	tree = loadImage("images/tree.png");
	backgroundImage = loadImage("images/bg2.jpg")
	
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(125,535,40,30);

	mango1 = new Mango(1000,320,50,50);
	mango2 = new Mango(1070,360,50,50);
	mango3 = new Mango(950,390,50,50);
	mango4 = new Mango(1130,300,50,50);
	mango5 = new Mango(1200,380,50,50);

	chain = new Chain(stone.body, {x:125,y:535});

	ground = Matter.Bodies.rectangle(width/2,740,1600,150,{isStatic:true});
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  imageMode(CENTER);
  image(backgroundImage,width/2,height/2,1350,700);
  image(boy,200,600,250,280);
  image(tree,1080,450,500,465);

  chain.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  collision(mango1,stone);
  collision(mango2,stone);
  collision(mango3,stone);
  collision(mango4,stone);
  collision(mango5,stone);

  //rect(ground.position.x,ground.position.y,width,50);

  fill(0);
  textSize(20);
  text("Press SPACE to try again..",50,50);


  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	chain.fly();
	Matter.Body.applyForce(stone.body,stone.body.position,{x:30,y:-20});
    
}

function collision(a,b){
	if(a.body.position.x-b.body.position.x <= a.width/2+b.width/2+10 && b.body.position.x-a.body.position.x <= a.width/2+b.width/2+10 && a.body.position.y-b.body.position.y <= a.height/2+b.height/2+10 && b.body.position.y-a.body.position.y <= a.height/2+b.height/2+10){
		Matter.Body.setStatic(a.body,false);
	}

}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:125,y:535});
		chain.attach(stone.body);
	}

}