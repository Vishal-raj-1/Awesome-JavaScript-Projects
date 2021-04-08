// grab a reference of our "canvas" using its id
const canvas = document.getElementById('canvas');
/* get a "context". Without "context", we can't draw on canvas */
const ctx = canvas.getContext('2d');

// some sounds
const hitSound = new Audio();
const scoreSound = new Audio();
const wallHitSound = new Audio();

hitSound.src = 'https://raw.githubusercontent.com/the-coding-pie/Ping-Pong-Javascript/master/sounds/hitSound.wav';
scoreSound.src = 'https://raw.githubusercontent.com/the-coding-pie/Ping-Pong-Javascript/master/sounds/scoreSound.wav';
wallHitSound.src = 'https://raw.githubusercontent.com/the-coding-pie/Ping-Pong-Javascript/master/sounds/wallHitSound.wav';

/* some extra variables */
const netWidth = 4;
const netHeight = canvas.height;

const paddleWidth = 10;
const paddleHeight = 100;

let upArrowPressed = false;
let downArrowPressed = false;

/* some extra variables ends */

/* objects */
// net
const net = {
  x: canvas.width / 2 - netWidth / 2,
  y: 0,
  width: netWidth,
  height: netHeight,
  color: "green"
};

// user paddle
const user = {
  x: 10,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: '#FFF',
  score: 0
};

const ai = {
  x: canvas.width - (paddleWidth + 10),
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: '#FFF',
  score: 0
};

// ball
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 7,
  speed: 7,
  velocityX: 5,
  velocityY: 5,
  color: 'white'
};

/* objects declaration ends */

/* drawing functions */
// function to draw net
function drawNet() {
  // set the color of net
  ctx.fillStyle = net.color;

  // syntax --> fillRect(x, y, width, height)
  ctx.fillRect(net.x, net.y, net.width, net.height);
}

// function to draw score
function drawScore(x, y, score) {
  ctx.fillStyle = 'white';
  ctx.font = '35px sans-serif';

  // syntax --> fillText(text, x, y)
  ctx.fillText(score, x, y);
  
  

}

// function to draw paddle
function drawPaddle(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

// function to draw ball
function drawBall(x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  // syntax --> arc(x, y, radius, startAngle, endAngle, antiClockwise_or_not)
  ctx.arc(x, y, radius, 0, Math.PI * 2, true); // π * 2 Radians = 360 degrees
  ctx.closePath();
  ctx.fill();
}

/* drawing functions end */

/* moving Paddles */
// add an eventListener to browser window
window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

// gets activated when we press down a key
function keyDownHandler(event) {
  // get the keyCode
  switch (event.keyCode) {
    // "up arrow" key
    case 38:
      // set upArrowPressed = true
      upArrowPressed = true;
      break;
    // "down arrow" key
    case 40:
      downArrowPressed = true;
      break;
  }
}

// gets activated when we release the key
function keyUpHandler(event) {
  switch (event.keyCode) {
    // "up arraow" key
    case 38:
      upArrowPressed = false;
      break;
    // "down arrow" key
    case 40:
      downArrowPressed = false;
      break;
  }
}

/* moving paddles section end */

// reset the ball
function reset() {
  // reset ball's value to older values
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.speed = 7;

  // changes the direction of ball
  ball.velocityX = -ball.velocityX;
  ball.velocityY = -ball.velocityY;
}

// collision Detect function
function collisionDetect(player, ball) {
  // returns true or false
  player.top = player.y;
  player.right = player.x + player.width;
  player.bottom = player.y + player.height;
  player.left = player.x;

  ball.top = ball.y - ball.radius;
  ball.right = ball.x + ball.radius;
  ball.bottom = ball.y + ball.radius;
  ball.left = ball.x - ball.radius;

  return ball.left < player.right && ball.top < player.bottom && ball.right > player.left && ball.bottom > player.top;
}

// update function, to update things position
function update() {
  // move the paddle
  if (upArrowPressed && user.y > 0) {
    user.y -= 8;
  } else if (downArrowPressed && (user.y < canvas.height - user.height)) {
    user.y += 8;
  }

  // check if ball hits top or bottom wall
  if (ball.y + ball.radius >= canvas.height || ball.y - ball.radius <= 0) {
    // play wallHitSound
    wallHitSound.play();
    ball.velocityY = -ball.velocityY;
  }

   // if ball hit on right wall
   if (ball.x + ball.radius >= canvas.width) {
    // play scoreSound
    scoreSound.play();
    // then user scored 1 point
    user.score += 1;
    reset();
  }

  // if ball hit on left wall
  if (ball.x - ball.radius <= 0) {
    // play scoreSound
    scoreSound.play();
    // then ai scored 1 point
    ai.score += 1;
    reset();
  }

  // move the ball
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  // ai paddle movement
  ai.y += ((ball.y - (ai.y + ai.height / 2))) * 0.09;

  // collision detection on paddles
  let player = (ball.x < canvas.width / 2) ? user : ai;

  if (collisionDetect(player, ball)) {
    // play hitSound
    hitSound.play();
    // default angle is 0deg in Radian
    let angle = 0;

    // if ball hit the top of paddle
    if (ball.y < (player.y + player.height / 2)) {
      // then -1 * Math.PI / 4 = -45deg
      angle = -1 * Math.PI / 4;
    } else if (ball.y > (player.y + player.height / 2)) {
      // if it hit the bottom of paddle
      // then angle will be Math.PI / 4 = 45deg
      angle = Math.PI / 4;
    }

    /* change velocity of ball according to on which paddle the ball hitted */
    ball.velocityX = (player === user ? 1 : -1) * ball.speed * Math.cos(angle);
    ball.velocityY = ball.speed * Math.sin(angle);

    // increase ball speed
    ball.speed += 0.2;
  }
}

// render function draws everything on to canvas
function render() {
  // set a style
  ctx.fillStyle = "#000"; /* whatever comes below this acquires black color (#000). */
  // draws the black board
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // draw net
  drawNet();
  // draw user score
  drawScore(canvas.width / 4, canvas.height / 6, user.score);
  // draw ai score
  drawScore(3 * canvas.width / 4, canvas.height / 6, ai.score);
  // draw user paddle
  drawPaddle(user.x, user.y, user.width, user.height, user.color);
  // draw ai paddle
  drawPaddle(ai.x, ai.y, ai.width, ai.height, ai.color);
  // draw ball
  drawBall(ball.x, ball.y, ball.radius, ball.color);
}

// gameLoop
function gameLoop() {
  // update() function here
  update();
  // render() function here
  render();
}

// calls gameLoop() function 60 times per second
setInterval(gameLoop, 1000 / 60);