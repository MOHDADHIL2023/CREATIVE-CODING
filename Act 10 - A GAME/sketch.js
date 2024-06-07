// We created some variables
var Screen = 0;
var YGAME = -40;
var XGAME = 400;
var SPEED = 4;
var SCORE = 0
var img

function setup(){
  createCanvas(600,400);
}

function draw(){
  if (Screen == 0){
    StartScreen()
  } else if (Screen == 1){
    GameOn()
  } else if (Screen == 2){
    EndScreen()
  }
}

//I created function StartScreen to display the title screen of the game
function StartScreen(){
  background('#121481');
  fill('#F6F5F2');
  textAlign(CENTER);
  textSize(24);
  textStyle(ITALIC);
  text('WELCOME TO MY GAME CATCHING BALLS', width/2, height/2 - 20);
  textSize(28);
  textStyle(BOLD);
  text('Press The Button To Start', width/2, height/2 + 80);
}

// creating balls & some rectangle object 
function GameOn(){
  background('#481E14')
  fill(0,255,0)
  textSize(24);
  textStyle(ITALIC);
  text("SCORE : " + SCORE, 80, 40)
  ellipse(XGAME, YGAME, 40, 40)
  rectMode(CENTER)
  rect(mouseX, height-10, 80, 30)
  YGAME += SPEED;
  if(YGAME > height){
    Screen = 2
  }
  if(YGAME > height - 10 && XGAME > mouseX - 20 && XGAME < mouseX + 20){
    YGAME =- 40
    SPEED+=.5
    SCORE += 1
  }
  if (YGAME == -40){
    pickRandom();
  }
}

function pickRandom(){
  XGAME = random(20, width-40)
}

//I created function End Screen to display the title screen of the game
function EndScreen(){
  background('#003C43')
  fill(0)
  textAlign(CENTER);
  textSize(28);
  textStyle(BOLD);
  text('THE GAME IS OVER', width/2, height/2 - 20)
  text("SCORE : " + SCORE, width/2, height/2 + 20)
  text('Play Again', width/2, height/2 + 60);
}

//when you press the button to continue the game again & again
function mousePressed(){
  if(Screen == 0){
    Screen = 1
  } else if(Screen == 2){
    Screen = 0
  }
}

// it resets to initial speed and position of The Hold
function Reset(){
  SCORE = 0;
  SPEED = 4;
  YGAME = -40;
}

