class Stone{
    constructor(x, y) {
      var options = {
        isStatic: true
      };
      this.r =-1;
      
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("stone.png");
     
      World.add(world, this.body);
    }
  
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);        
       
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }