let currentScore = 0;
let currentLives = 5;
let fallingSpeed = 8;
let fallingTime = 1000;

// Start Button cleck event 
document.getElementById("start-button").addEventListener("click", function () {
  initializeEnvironment();
});

// function to intialize game environment */
function initializeEnvironment() {

  let mainMenu = document.getElementById("main-menu");
  
  if(mainMenu !== null)
    mainMenu.remove()

  document.querySelector(".lives").style.display = "block";
  document.querySelector(".score").style.display = "block";
  document.getElementById("lives-count").innerText = "5";
  document.getElementById("score-count").innerText = "0";
  mainGameLoop();
  
}

// Delete remaining pixels after game is over
function deletePixels() {
  
  let pixels = document.querySelectorAll('.pixel');
  for(let i =0; i< pixels.length; i++)
  {
    pixels[i].classList.add('clicked');
    pixels[i].remove();
  }
}

// Function to handle pixel creating and related events 
function Pixel(interval1, interval2) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.left = Math.random() * (window.innerWidth - 50) + "px";
  pixel.style.animationDuration = fallingSpeed + "s";
  document.body.appendChild(pixel);

  // When the player clicks on a pixel
  pixel.addEventListener("click", function () {
    pixel.classList.add("clicked");
    pixel.style.scale = "0";
    currentScore += 10; // update player score with 10
    document.getElementById("score-count").innerText = currentScore;
    setTimeout(() => {
      pixel.remove();
    }, 500);
  });


  //Check if reaches bottom of screen
  setTimeout( () => {
    pixel.remove();

    if (!pixel.classList.contains("clicked")) {
      currentLives = currentLives > 0 ? currentLives -=1 : currentLives;
      document.getElementById("lives-count").innerText = currentLives;
      if(currentLives === 0)
      {
        document.getElementById('game-over-msg').style.display = 'block';
        clearInterval(interval1);
        clearInterval(interval2);
        deletePixels();
        
      }
    }
  }, fallingSpeed * 1000);
}

 

function mainGameLoop() {

 var pixelfall = setInterval(() => Pixel(pixelfall, speedfall), fallingTime);
  
  var speedfall = setInterval(() => {
      if (fallingSpeed > 2) fallingSpeed -= 1;
    }, 10000);
  
}

// Restart game on pressing Play again
document.getElementById('restart-btn').addEventListener('click', () => {
 currentScore = 0;
 currentLives = 5;
 fallingSpeed = 8;
 fallingTime = 1000;
 
 document.getElementById('game-over-msg').style.display = 'none';

 initializeEnvironment();



});