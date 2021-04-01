var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1050,600);

   
      
    box1=createSprite(650,580,250,30);
box1.shapeColor="red";
    box2=createSprite(390,580,250,30);
    box2.shapeColor="blue";
    box3=createSprite(130,580,250,30);
    box3.shapeColor="green";
    box4=createSprite(910,580,250,30);
    box4.shapeColor="purple";
    ball=createSprite(500,300,40,40);
    ball.shapeColor="orange";
ball.velocityX=4;
ball.velocityY=8;


}
 
 
 

 

function draw() {
    background("#a0baab");
  


bounceoff(ball,box1,box2,box3,box4);


 drawSprites();  
}
