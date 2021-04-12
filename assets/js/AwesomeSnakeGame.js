var myCanvas=document.getElementById('myCanvas');
var ctx=myCanvas.getContext('2d');
var snakeWidth=10,
    snakeHeight=10;
var dir="right";
var f=false;
var score=0;
var mode=0;
const eat=new Audio();
const dead=new Audio();
var game;
eat.src="../assets/sounds/eating.mp3"
dead.src="../assets/sounds/gameOver.mp3"
ctx.fillStyle="#000";
ctx.font="45px";
ctx.fillText(score,200,200);
function drawSnake(x,y){
ctx.fillStyle='#fff';
ctx.fillRect(x*snakeWidth,y*snakeHeight,snakeWidth,snakeHeight);
ctx.fillStyle='#000';
ctx.strokeRect(x*snakeWidth,y*snakeHeight,snakeWidth,snakeHeight);
}
///food
var food={
x:Math.round(Math.random()*(myCanvas.width/snakeWidth-1)),
y:Math.round(Math.random()*(myCanvas.height/snakeHeight-1))
}
function drawFood(x,y) {
  ctx.fillStyle='red';
  ctx.fillRect(x*snakeWidth,y*snakeHeight,snakeWidth,snakeHeight);
  ctx.fillStyle='#000';
  ctx.strokeRect(x*snakeWidth,y*snakeHeight,snakeWidth,snakeHeight);
}

//create snake
var len=4;
snake=[];
for (var i = len-1; i >=0; i--) {
  snake.push({
    x:i+1,
    y:1
  })
}

document.addEventListener("keydown",control)
function control(e){
  if (e.keyCode==37&&dir!="right") {
    dir="left";
  }else if (e.keyCode==38&&dir!="down") {
    dir="up";
  }else if (e.keyCode==39&&dir!="left") {
    dir="right";
  }else if (e.keyCode==40&&dir!="up") {
    dir="down";
  }else if (e.keyCode==13) {
    mode=1;

  }
}

function draw() {
      ctx.clearRect(0,0,myCanvas.width,myCanvas.height)
  if (mode==0) {
    ctx.fillStyle = 'white';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font = 'normal bold 30px serif';
    ctx.fillText('pleas press Enter to start', myCanvas.width/2, myCanvas.height/2);
  }
else if (mode==1) {
  var snakeHeadX=snake[0].x,
      snakeHeadY=snake[0].y;
  for (var i =0 ; i < snake.length; i++) {
    var snakeX=snake[i].x,
    snakeY=snake[i].y;
    drawSnake(snakeX,snakeY);
      }
    drawFood(food.x,food.y);
///////////
if (dir=="right"){
  snakeHeadX++;
}
else if(dir=="left"){
  snakeHeadX--;
}
else if(dir=="up"){
  snakeHeadY--;
}
else if(dir=="down"){
  snakeHeadY++;
}
if (snakeHeadX==food.x&&snakeHeadY==food.y) {
  eat.play();
score++
  food ={
 x:Math.round(Math.random()*(myCanvas.width/snakeWidth-1)),
 y:Math.round(Math.random()*(myCanvas.height/snakeHeight-1))

 }
}else {
  snake.pop();
}
document.getElementById("score-count").innerText = score;
for (var i = 0; i < snake.length; i++) {
  if(snakeHeadX==snake[i].x&& snakeHeadY==snake[i].y)
      {
         f=true;
        console.log(f);
gameOver();
      }
  else{
        f=false;

  }
}
let newHead={
   x:snakeHeadX,
   y:snakeHeadY
 }
 if (snakeHeadX<0||snakeHeadY<0||snakeHeadX>=myCanvas.width/snakeWidth||snakeHeadY>=myCanvas.height/snakeHeight) {
   gameOver();
 }
snake.unshift(newHead);
}}

///game over
function gameOver() {
    clearInterval(game);
    ctx.fillStyle = 'white';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.font = 'normal bold 30px serif';
    ctx.fillText('Game over', myCanvas.width/2, myCanvas.height/2);
    ctx.fillText('your score', myCanvas.width/2, (myCanvas.height/2)+40);
    ctx.fillStyle="red";
    ctx.fillText(score,(myCanvas.width/2)+90,(myCanvas.height/2)+40);
    dead.play();
    console.log(mode);
    mode=0;
    console.log(mode);
}
    var game=setInterval(draw,50);
