const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ground,rope;
var engine;
var world;
var ball;

function setup() {
  
createCanvas(3000,800)
engine = Engine.create();
world = engine.world;
box1 = new Box(900, 100, 70, 70);
box2 = new Box(900, 100, 70, 70);
box3 = new Box(900, 100, 70, 70);
box4 = new Box(900, 100, 70, 70);
box5 = new Box(900, 100, 70, 70);
box6 = new Box(900, 100, 70, 70);
box7 = new Box(800, 100, 70, 70);
box8 = new Box(800, 100, 70, 70);
box9 = new Box(800, 100, 70, 70);
box10 = new Box(800, 100, 70, 70);
box11 = new Box(800, 100, 70, 70);
box12 = new Box(800, 100, 70, 70);
box13 = new Box(700, 100, 70, 70);
box14 = new Box(700, 100, 70, 70);
box15 = new Box(700, 100, 70, 70);
box16 = new Box(700, 100, 70, 70);
box17 = new Box(700, 100, 70, 70);
box18 = new Box(700, 100, 70, 70);
box19 = new Box(700, 100, 70, 70);
box20 = new Box(700, 100, 70, 70);
}


function draw() 
{
 
background(180);
Engine.update(engine);
box1.show();
  
}

