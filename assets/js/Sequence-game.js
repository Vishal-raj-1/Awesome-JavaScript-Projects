let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let started =false;
let level=0;
let body=document.querySelector('body');
let leveltitle=document.querySelector('#level-title');
let red=document.querySelector('#red');
let green=document.querySelector('#green');
let yellow=document.querySelector('#yellow');
let blue=document.querySelector('#blue');

document.addEventListener('click',function() {
    if (!started) {
      leveltitle.innerText="Level "+ level;
      nextSequence();
      started = true;
    }
  });
document.addEventListener('keypress',function() {
    if (!started) {
      leveltitle.innerText="Level "+ level;
      nextSequence();
      started = true;
    }
  });
function nextSequence(){
    userClickedPattern=[];
    level++;

    leveltitle.innerText="Level "+ level;
    let randomNumber=Math.floor(Math.random()*4);

    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    blink(randomChosenColour);
    
}
 red.addEventListener('click',function(){
     clicked('red');
 });
 yellow.addEventListener('click',function(){
    clicked('yellow');
});
green.addEventListener('click',function(){
    clicked('green');
});
blue.addEventListener('click',function(){
   clicked('blue');
});

function playSound(name){
    let audio = new Audio('../assets/sounds/'+name+'.mp3');
    audio.play();
}

function animatePress(currentColor){
   currentColor.className+="pressed";
    setTimeout(function () {
         currentColor.classList="";
      }, 100);
}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
 
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {    
        playSound("wrong");
       body.classList.add("game-over");
        setTimeout(function () {
         body.classList.remove("game-over");
        }, 200);

        leveltitle.innerText="Game Over, Press Any Key to Restart";
        startOver();
    }

}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
function clicked(userChosenColour){
    userClickedPattern.push(userChosenColour);
     playSound(userChosenColour);
     animatePress(userChosenColour);
     checkAnswer(userClickedPattern.length-1);
}

function blink(elemColor) {
    let elem=document.getElementById(''+elemColor);
    setTimeout(function() {
        elem.style.opacity=1;
     }, 200);
    setTimeout(function() {
       elem.style.opacity=0.2;
       playSound(elemColor);
    }, 500);
    setTimeout(function() {
       elem.style.opacity=1;
    }, 1000);
 }
