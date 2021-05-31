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
let peach = document.getElementById("peach");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let lightblue = document.getElementById("lightblue");
let purple = document.getElementById("purple");
let orange = document.getElementById("orange");
console.log(pink, grey, blue, peach, yellow ,green, lightblue, purple, orange);

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
  } else if (color === "peach") {
    document.body.style.background = "#fa7a7a"; 
  } else if (color === "yellow") {
    document.body.style.background = "#fafa8c";
  } else if (color === "green") {
    document.body.style.background = "#b6fc90";
  }else if (color === "lightblue") {
    document.body.style.background = "#a2eafa";
  }else if (color === "purple") {
    document.body.style.background = "#c968f2";
  }else if (color === "orange") {
    document.body.style.background = "#fc9162";
  }else {
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
peach.addEventListener("click", () => changeColor("peach"));
yellow.addEventListener("click", () => changeColor("yellow"));
green.addEventListener("click", () => changeColor("green"));
lightblue.addEventListener("click", () => changeColor("lightblue"));
purple.addEventListener("click", () => changeColor("purple"));
orange.addEventListener("click", () => changeColor("orange"));
