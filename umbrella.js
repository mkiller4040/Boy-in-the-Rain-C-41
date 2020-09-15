class Umbrella
{
  constructor(x,y)
  {
    var options = 
    {
        'isStatic':true
    }
    
    this.body = Bodies.circle(x, y, 100, options);
    this.image = loadImage("boyWithUmbr.png");
  }

  display()
  {
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, 225, 225);
  }
}