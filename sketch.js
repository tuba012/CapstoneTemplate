
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;


var launcher;

function preload(){
	
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);
}

function draw() {

  background(230);
  Engine.update(engine);
  
}
