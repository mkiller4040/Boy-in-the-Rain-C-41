class RainDrop
{
  constructor(x,y)
  {
    var options = 
    {
        'isStatic':false,
        'friction':0.1
    }

    this.radius = 4;
    this.rain = Bodies.circle(x, y, this.radius, options);
    
    World.add(world, this.rain);
  }

  display()
  {
    ellipseMode(RADIUS);
    fill("darkblue");
    ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
  }

  updatePos()
  {
    if(this.rain.position.y > height)
    {
      Matter.Body.setPosition(this.rain, {x : random(0,600), y : random(0,400)})
    }
  }
};