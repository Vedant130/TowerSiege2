class Block{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.001,
          'density':0.01
      }
      this.visibility = 225;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
        push();
      //translate(this.body.position.x, this.body.position.y);
      var pos =this.body.position;
      rectMode(CENTER);
     // fill(rgb(3, 252, 194));
      rect(pos.x, pos.y, this.width, this.height);
      
      pop();
      }
      else{
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility-5;
        pop();
      }
      
    }
}