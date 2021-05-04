const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');
let lastHole;
let timeUp = false;
let score;
const highscore = document.querySelector('.hscore');
let hscore = JSON.parse(localStorage.getItem('highscore')) || 0;
highscore.textContent = hscore;


function resetHighScore() {
    localStorage.removeItem('highscore');
    hscore = 0;
    highscore.textContent = hscore;
}

function randomTime(min, max) {  //in milliseconds
    return Math.random() * (max - min) + min;
}


function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];

    if (hole === lastHole) {
        // console.log("same 1");
        return randomHole(holes);
    }

    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    // console.log(time,hole);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

function startGame() {

    scoreBoard.textContent = 0;
    score = 0
    timeUp = false;
    peep();
    setTimeout(() => {
        timeUp = true;
        if (score > hscore) {
            console.log("score is greater");
            highscore.textContent = score;
            localStorage.setItem('highscore', score);
            console.log("hscore:", hscore);
        }
    }, 10000)
}

function bonk(e) {
    if (!e.isTrusted) return; //cheater
    score++;
    this.classList.remove('up');
    // console.log('score:', score)
    scoreBoard.textContent = score;
    localStorage.setItem('highscore', score);
    console.log("hscore:", hscore)

}



moles.forEach(mole => mole.addEventListener('click', bonk));