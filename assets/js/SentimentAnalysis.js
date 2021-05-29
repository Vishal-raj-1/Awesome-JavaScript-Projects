let sentiment;
let statusEl;
let submitBtn;
let inputBox;
let sentimentResult;
let warning, score, thoughts;

function setup() {
  // initialize sentiment
  sentiment = ml5.sentiment("movieReviews", modelReady);

  statusEl = document.querySelector(".spinner");
  resultbox = document.querySelector(".resultbox");

  inputBox = document.querySelector("#inputText");
  submitBtn = document.querySelector("#submitBtn");
  sentimentResult = document.querySelector("#score");

  warning = document.querySelector(".warning");
  thoughts = document.querySelector(".thoughts");
  score = document.querySelector(".score");

  // predicting the sentiment on mousePressed()
  submitBtn.addEventListener("click", getSentiment);
}

setup();

function getSentiment() {
  // setup the html environment
  statusEl.style.display = "inline-block";
  warning.style.display = "none";
  score.style.display = "none";
  thoughts.style.display = "none";

  // get the values from the input
  const text = inputBox.value;
  if (text === "") {
    statusEl.style.display = "none";
    warning.style.display = "flex";
    return;
  }

  // make the prediction
  const prediction = sentiment.predict(text);

  statusEl.style.display = "none";
  // display sentiment result on html page

  score.style.display = "flex";

  sentimentResult.innerHTML = prediction.score;
  sentimentType(prediction.score);
}

function sentimentType(score) {
  thoughts.style.display = "flex";
  let type = document.querySelector("#type");

  if (score > 0.5) {
    type.innerHTML = "Positive";
  } else if (score === 0.5) {
    type.innerHTML = "Neutral";
  } else {
    type.innerHTML = "Negative";
  }
}

function modelReady() {
  // model is ready
  statusEl.style.display = "none";
}
