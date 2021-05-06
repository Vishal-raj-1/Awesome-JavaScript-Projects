var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 5;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 5;
var dy = -5;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;
var grd = ctx.createLinearGradient(0, 0, 420, 0);
grd.addColorStop(0, "crimson");
grd.addColorStop(1, "white");
var mySound;
 var urSound;
 var overSound;
var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
bricks[c] = [];
for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
}
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
canvas.addEventListener("click",draw,false);




function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
var relativeX = e.clientX - canvas.offsetLeft;
if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
}
}
function collisionDetection() {
for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
    var b = bricks[c][r];
    if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
        dy = -dy;
        b.status = 0;
        mySound.play();
        score++;
        if(score == brickRowCount*brickColumnCount) {
            
            ctx.rect(0, 0, canvas.width,canvas.height);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();
    
            ctx.font = "20px Arial";
        ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("CONGRATS YOU WIN! YOUR SCORE IS  " +score, canvas.width / 2,canvas.height / 2);
            urSound.play();
        clearInterval(animateInterval);
    
        }
        }
    }
    }
}
}

function drawBall() {
ctx.beginPath();
ctx.arc(x, y, ballRadius, 0, Math.PI*2);
ctx.fillStyle = grd;
ctx.fill();
ctx.closePath();
}
function drawPaddle() {
ctx.beginPath();
ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
ctx.fillStyle = grd;
ctx.fill();
ctx.closePath();
}
function drawBricks() {
for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
    if(bricks[c][r].status == 1) {
        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.closePath();
    }
    }
}
}
function drawScore() {
ctx.font = "16px Arial";
ctx.fillStyle = "white";
ctx.fillText("Score: "+score, 8, 20);
}
function drawLives() {
ctx.font = "16px Arial";
ctx.fillStyle = "white";
ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}


function draw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawBricks();
drawBall();
drawPaddle();
drawScore();
drawLives();
collisionDetection();
mySound=new sound("../assets/sounds/IOS (Notification).mp3");
urSound=new sound("../assets/sounds/Avengers Notification Tone.mp3");
overSound=new sound("../assets/sounds/Game Over.mp3");
// liv=new sound("percussion-sound.mp3");

if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
}
if(y + dy < ballRadius) {
    dy = -dy;
}
else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
    dy = -dy;
    }
    else {
    lives--;
    //liv.play();
    if(lives<=0) {
        ctx.rect(0, 0, canvas.width,canvas.height);
    
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();

        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";

        ctx.fillText("GAME OVER SCORE IS  " +score, canvas.width / 2,canvas.height / 2);
        overSound.play();
        clearInterval(animateInterval);
    }
    else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width-paddleWidth)/2;
    }
    }
}

if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
}
else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
}

x += dx;
y += dy;
requestAnimationFrame(draw);
}
