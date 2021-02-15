var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var trackImg

var fruits;
var fruitsimg;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1Img, car2Img, car3Img, car4Img;

function preload(){

  car1Img = loadImage("images/gh.png");
  car2Img = loadImage("images/gh.png")
  car3Img = loadImage("images/gh.png")
  car4Img = loadImage("images/gh.png")
  trackImg = loadImage("images/green.png")

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){

    game.end();

  }
 

  if (frameCount % 20 === 0){
    fill("red"); 
    fruits = createSprite(0,random(100,1000),100,100);
    
    fruits.velocityX = 6;
  }

}
