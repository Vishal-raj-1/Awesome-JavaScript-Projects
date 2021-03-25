/*jslint es6:true*/
const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

//create the unit

const box=32;

//load images

var ground  = new Image();
ground.src = "../assets/Images/ground.png";

var foodImg = new Image();
foodImg.src ="../assets/Images/food.png";

var gameover = new Image();
gameover.src ="../assets/Images/gameover.jpg"

//load audio files

const dead=new Audio();
const eat=new Audio();
const up=new Audio();
const left=new Audio();
const right=new Audio();
const down=new Audio();

dead.src="../assets/sounds/dead.mp3"
eat.src="../assets/sounds/eat.mp3"
up.src="../assets/sounds/up.mp3"
left.src="../assets/sounds/left.mp3"
right.src="../assets/sounds/right.mp3"
down.src="../assets/sounds/down.mp3"


//create the snake

const snake=[];
snake[0]={
    x:9*box,
    y:10*box
}

//create the food

let food={
    x:Math.floor(Math.random()*17+1)*box,
    y:Math.floor(Math.random()*15+3)*box
}


//create the score var

var score=0;


//control the snake

let d;

document.addEventListener("keydown",direction);

function direction(event){
   if(event.keyCode==37&&d!="RIGHT"){
       left.play();
      d="LEFT";
    }else if(event.keyCode==38&&d!="DOWN"){
        up.play();
        d="UP";
    }else if(event.keyCode==39&&d!="LEFT"){
        right.play();
        d="RIGHT";
    }else if(event.keyCode==40&&d!="UP"){
        down.play();
      d="DOWN";
    }
}

//check collision function
function collision(head,array){
    for(let i=0;i<array.length;i++){
        if(head.x==array[i].x && head.y==array[i].y)
            {
                return true;
            }
        else{
            return false;
        }
    }
}

//draw everything to the canvas

function draw()
{
    ctx.drawImage(ground,0,0);
    
    for(let i=0;i<snake.length;i++)
        {
            ctx.fillStyle=(i==0)?"green":"white";
            ctx.fillRect(snake[i].x,snake[i].y,box,box);
            
            ctx.strokeStyle="red";
            
            ctx.strokeRect(snake[i].x,snake[i].y,box,box);
        }
    
    ctx.drawImage(foodImg,food.x,food.y);
    
    //old head position

    let snakeX=snake[0].x;
    let snakeY=snake[0].y;
   
    
    //which direction
    
      if(d=="LEFT") snakeX-=box;
      if(d=="UP") snakeY-=box;
      if(d=="RIGHT") snakeX+=box;
      if(d=="DOWN") snakeY+=box;
    
    //if the snake eats the food
    if(snakeX==food.x&&snakeY==food.y)
        {
            score++;
            eat.play();
            food={
                x:Math.floor(Math.random()*17+1)*box,
                y: Math.floor(Math.random()*15+3)*box
            }
            
        }
    else{
       
     //remove the tail
      snake.pop(); 
    }
    
    
     //add new Head

     let newHead={
        x:snakeX,
        y:snakeY
   }
    
   //game over
    
    if(snakeX<box||snakeX>17*box||snakeY<3*box||snakeY>17*box||collision(newHead,snake)){
        
        clearInterval(game);
        dead.play();
        ctx.drawImage(gameover,5,210);
        ctx.fillText("Your Score : ", 50, 210);
        ctx.fillText(score,285,210);
    }
    
    
    snake.unshift(newHead);
    
    ctx.fillStyle="white";
    ctx.font="45px Changa one";
    ctx.fillText(score,2*box,1.6*box);
    
}

//call draw function every 100 ms

var game=setInterval(draw,100);