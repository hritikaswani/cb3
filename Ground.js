class Ground{
    constructor(){
       var options ={
           isStatic:true
       }
       this.body = Bodies.rectangle(600,590,1200,150,options);
       this.width = 1200;
       this.height = 150;
       this.image = loadImage("Images/ground.jpg");
       World.add(world,this.body);
    };
    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
      }
}