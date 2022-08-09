"use strict";

// Get dom elements
const body = document.getElementsByTagName("body")[0];
const resetBtnEl = document.getElementById("reset_btn");
const checkBtnEl = document.getElementById("check_btn");
const inputEl = document.getElementById("input_num");
const [guessStatusEl, scoreEl, highscoreEl] =
  document.getElementById("status_container").children;
const modalEl = document.getElementById("modal");
const closeBtnEl = document.getElementById("close_btn");
const modalBtnEl = document.getElementById("modal_trigger");
const contentContainerEl = document.getElementById("content_container");

// variables
let goal;
let score = 20;
let highscore = 0;

// generate random goal number
function generateGoal() {
  goal = Math.floor(Math.random() * 20) + 1;
  console.log(goal);
}

generateGoal();

checkBtnEl.addEventListener("click", () => {
  // get user input
  const userGuess = Number(inputEl.value);
  console.log(userGuess);

  // game logic
  if (userGuess > goal) {
    guessStatusEl.textContent = "Too high!";
    score--;
    scoreEl.textContent = `Score: ${score}`;
  } else if (userGuess < goal) {
    guessStatusEl.textContent = "Too low!";
    score--;
    scoreEl.textContent = `Score: ${score}`;
  } else {
    guessStatusEl.textContent = "Bingo!!!";
    body.classList.add("victory");
    score > highscore && (highscore = score);
    highscoreEl.textContent = `Highscore: ${highscore}`;
  }
  if (score <= 0) {
    body.classList.add("defeat");
  }
});

// reset game
resetBtnEl.addEventListener("click", () => {
  body.classList.remove("victory");
  body.classList.remove("defeat");
  score = 20;
  scoreEl.textContent = `Score: ${score}`;
  generateGoal();
  guessStatusEl.textContent = "";
  inputEl.value = "";
});

// open model
modalBtnEl.addEventListener("click", () => {
  modalEl.style.display = "block";
  contentContainerEl.classList.add("fade");
});

// close modal
closeBtnEl.addEventListener("click", () => {
  modalEl.style.display = "none";
  contentContainerEl.classList.remove("fade");
});

// close btn with "esc" button
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modalEl.style.display = "none";
    contentContainerEl.classList.remove("fade");
  }
});

// bind "Enter" with Check button ( pressing enter = clicking check button)
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // get user input
    const userGuess = Number(inputEl.value);
    console.log(userGuess);

    // game logic
    if (userGuess > goal) {
      guessStatusEl.textContent = "Too high!";
      score--;
      scoreEl.textContent = `Score: ${score}`;
    } else if (userGuess < goal) {
      guessStatusEl.textContent = "Too low!";
      score--;
      scoreEl.textContent = `Score: ${score}`;
    } else {
      guessStatusEl.textContent = "Bingo!!!";
      body.classList.add("victory");
      score > highscore && (highscore = score);
      highscoreEl.textContent = `Highscore: ${highscore}`;
    }
    if (score <= 0) {
      body.classList.add("defeat");
    }
  }
});
