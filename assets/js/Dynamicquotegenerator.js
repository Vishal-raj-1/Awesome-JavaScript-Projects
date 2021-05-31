//declaring variables for dom manipulation...
let quote = document.getElementById("quotes");
let author = document.getElementById("author");
let btn = document.getElementById("newQ");
const tweetMe = document.getElementById("tweet");
let realdata = "";

// color choice
let pink = document.getElementById("pink");
let grey = document.getElementById("grey");
let blue = document.getElementById("blue");
console.log(pink, grey, blue);

const getNewQuotes = () => {
  //for getting a random quote
  quote.innerHTML = `" ${realdata.content} "`;
  realdata.author == null
    ? (author.innerHTML = " - Unknown")
    : (author.innerHTML = `- ${realdata.author}`);
};

//function to get quotedata
const getQuote = async () => {
  const api = "https://api.quotable.io/random";
  let data = await fetch(api);
  realdata = await data.json();
  getNewQuotes();
};

const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${realdata.content}-${realdata.author}`;
  window.open(tweetPost);
};

const changeColor = (color) => {
  console.log("clicked");
  if (color === "pink") {
    document.body.style.background = "#ffc8dd";
  } else if (color === "blue") {
    document.body.style.background = "#a2d2ff";
  } else {
    document.body.style.background = "#e0e0e0";
  }
};

//onclick of button calling function getquote
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
tweetMe.addEventListener("click", tweetNow);

pink.addEventListener("click", () => changeColor("pink"));
grey.addEventListener("click", () => changeColor("grey"));
blue.addEventListener("click", () => changeColor("blue"));
