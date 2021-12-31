const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world 
var canvas
var soldier
var enemysoldier=[]
var bullets=[]
var enemybullet=[]
var numberofbullets=450
var kill=0
function preload(){
    backgroundImg=loadImage("background.png")
   
}
function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  tent = new Tent(150, 270, 180, 340);
soldier=new Soldier(400,270,100,200)
gun=new Gun(480,220,100,50)
bullet=new Bullet(100,100,100,10)
stone=new Stone(500,250)
}
function draw() {
  background(backgroundImg);

  Engine.update(engine);
 tent.display()
  soldier.display()
  gun.display()
  bullet.display()
stone.display()

    
}

