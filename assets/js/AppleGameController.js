
/**
 * If you have completely understood whats going on here in the code then
 * your next challenge is to recreate this game in Object Oriented Style.
 * Also you can add some more effects like moving clouds, birds, sounds to game.
 */

//these are global variables because they need to be accessed by multiple functions.
var score = 0,
    highScore = 0,
    time = 30,
    timer;
var IsPlaying = false;
var timeBoard = document.getElementById('time'),
    scoreBoard = document.getElementById('score'),
    btnStart = document.getElementById('btn');

/**
 * Makes the provided element fall down by changing the top property.
 * @param {HTMLElement} apple 
 */
function fallDown(apple) {
    if (!(IsPlaying && apple instanceof HTMLElement)) {
        return;
    }
    //store the current top position for future refrence.
    apple.setAttribute('data-top', apple.style.top);
    //change the top position, this is animated using transition property in CSS
    apple.style.top = "380px";
    //increase score
    score = score + 5;
    //show the score by calling this function
    renderScore();
    //hide the apple after it reaches the ground by calling this function
    hideFallenApple(apple);
}

/**
 * Hides the provided element by changing the display property.
 * @param {HTMLElement} apple 
 */
function hideFallenApple(apple) {
    //we need to wait until the apple has fallen down
    //so we will use this setTimeout function to wait and the hide the apple
    setTimeout(function () {
        apple.style.display = 'none';
        //call the function that will move the apple to top
        //and display it again
        restoreFallenApple(apple);
    }, 501);
}

/**
 * Shows the provided element by changing the display property and restores top position.
 * @param {HTMLElement} apple 
 */
function restoreFallenApple(apple) {
    //as in hideFallenApple we need to wait and the make the html element visible
    //restore the top value
    apple.style.top = apple.getAttribute('data-top');
    setTimeout(function () {
        apple.style.display = 'inline-block';
    }, 501);
}

/**
 * Shows the score in the HTMLElement and checks for High Score.
 * 
 */
function renderScore() {
    scoreBoard.innerText = score;
    if (score > highScore) {
        highScore = score;
        document.getElementById('high').innerText = highScore;
    }
}

/**
 * Makes the game playable by setting IsPlaying flag to true.
 * 
 */
function startGame() {
    //disable the button to make it unclickable
    btnStart.disabled = "disabled";
    IsPlaying = true;
    renderScore();
    //start countDown function and call it every second
    //1000 is in millisecond = 1 second
    //timer variable stores refrence to the current setInterval
    //which will be used to clearInterval later.
    timer = setInterval(countDown, 1000);
}

/**
 * Performs countDown and the displays the time left.
 * if the time has end it will end the game
 * 
 */
function countDown() {
    time = time - 1;
    timeBoard.innerText = time;
    if (time == 0) {
        //clear the interval by using the timer refrence
        clearInterval(timer);
        //call end game
        endGame();
    }
}

/**
 * Ends the game by setting IsPlaying to false,
 * finally resets the score, time and enables btnStart.
 */
function endGame() {
    IsPlaying = false;
    alert("Your score is " + score);
    //reset score and time for next game.
    score = 0;
    time = 30;
    //enable the button to make it clickable
    btnStart.removeAttribute('disabled');
}
