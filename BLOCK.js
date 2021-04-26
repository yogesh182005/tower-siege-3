class Block {
    constructor(x,y,width,height) {
      var options = {
        restitution:0.4,
        friction:0,
      
         // isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visiblity=255


     
      
      
  
    }

   
    display(){
      if(this.body.speed<3){
        var angle=this.body.angle;
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0,0, this.width, this.height);
        pop();
    
      }else{
        World.remove(world,this.body)
        push();
        tint(255,this.visiblity);
       
        this.visiblity-=5
        pop();
      }
  
  
  
     
    }
    score() {
      if(this.visiblity<8 && this.visiblity>-105){
           score++;
     }
    }
  };
    