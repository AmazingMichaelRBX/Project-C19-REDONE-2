var bananaImage;
var obstacleImage;
var obstacleGroup;
var background;
var score;



function preload() {
  backImage=loadImage("jungle.jpg");
  player_running =
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  

bananaImage = loadImage("Banana.png");
obstacle_img = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

switch(score){
  case 10: player.scale=0.12;
          break;
  case 20: player.scale=0.14;
          break;
  case 30: player.scale=0.16;
          break;
  case 40: player.scale=0.18;
          break;
          default: break;
          
if(obstaclesGroup.isTouching(player)){
  player.scale=0.2;
}

stroke("white");
textSize(20);
fill("white");
text("Score: "+  score, 500,50);



