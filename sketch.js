const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var drops = [];
var maxDrops = 100;

function preload()
{

}

function setup()
{
  createCanvas(600,575);
  engine = Engine.create();
  world = engine.world;
  
  umbrella = new Umbrella(300, 500);
  
  for(var i = 0; i < maxDrops; i++)
  {
    drops.push(new RainDrop(random(0,600), random(0,400)));
  }
}

function draw()
{
  background("black");
  Engine.update(engine);

  umbrella.display();

    for(var d = 0; d < drops.length; d++)
   {
    drops[d].display();
    drops[d].updatePos();
   }

  drawSprites();
}   

