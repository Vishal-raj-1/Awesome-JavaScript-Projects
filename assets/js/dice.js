"use strict";

//Selecting Elements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");


let playing = true;
let currentScore = 0;
    let activePlayer = 0;
    let scores = [0, 0];
//Intial Conditions

 
function newGame(){
    playing = true;
    currentScore = 0;
    activePlayer = 0;
    scores = [0, 0];
    
    dice.classList.add("hidden");
    score1.textContent = 0;
    current0.textContent = currentScore ; 
    current1.textContent = currentScore ; 
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
    score0.textContent = 0; 
    
}
newGame();

function setName(){
    document.querySelector('#name--0').textContent = prompt("Enter Player 1 Name");
    document.querySelector('#name--1').textContent = prompt("Enter Player 2 Name");
}
//fucntions

function switchPlayer() {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
}

//Rolling dice
btnRoll.addEventListener("click", function () {
    if (playing) {
        //1.    Generating Dice
        let diceNum = Math.floor(Math.random() * 6 + 1);
        console.log(diceNum);

        //2.    Displaying Dice Image
        dice.classList.remove("hidden");
        dice.src = `../assets/Images/dice-${diceNum}.png`;

        //3.    Checking if it is 1 ; if yes pass to player 2
        if (diceNum != 1) {
            currentScore += diceNum;
            document.querySelector(
                `#current--${activePlayer}`
            ).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

//Holding Score
btnHold.addEventListener("click", function () {
    if(playing){
    //1.    Add current score to active player score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
        scores[activePlayer];

    //2.    Check if >= 100
    if (scores[activePlayer] >= 20) {
        playing = false;
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove("player--active");
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.add("player--winner");
        dice.classList.add("hidden");
    } else {
        // 3.   Swicth Player
        switchPlayer();
    }

}
});

//Play Again
btnNew.addEventListener('click', function(){
        newGame();
})
document.querySelector('.btn--name').addEventListener('click', setName);