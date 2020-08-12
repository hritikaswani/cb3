const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ball;
var binImg,bin;
var bgImg;

function preload(){
    binImg = loadImage("Images/dustbingreen.png");
    bgImg = loadImage("Images/park.jpg");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();

    bin = createSprite(964,450,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    binPart1 = new Dustbin(902,445,10,120);
    binPart2 = new Dustbin(962,505,130,10);
    binPart3 = new Dustbin(1024,445,10,120);

    launcher = new Launcher(crumpledPaper.body,{x:370,y:270});
}

function draw(){
    background(bgImg);
    Engine.update(engine);

    

    ground.display();
    crumpledPaper.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
      
    fill("black");
    textSize(50);
    textFont("signPainter")
     text("launch the crumpled ball into the dustbin to keep your city",20,550);
    text("''CLEAN''",520,590);

    drawSprites();
    
    fill("blue");
    textStyle(BOLD);
  
    textSize(52);
    text("CRUMPLED BALLS -3",385,45);
    text("BY HRITIK ASWANI",385,90);
}



function mouseDragged(){
    Matter.Body.setPosition(crumpledPaper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}
