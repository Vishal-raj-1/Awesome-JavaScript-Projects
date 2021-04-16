var color1 = document.getElementById("c1"); //to get the value of color 1
var color2 = document.getElementById("c2"); // to get the value of color 2
var css = document.getElementById("code");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

// function to generate random hexadecimal values
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
}

// function to dynamically set css values for linear gradient
function setgradient() {
  body.style.background =
    "linear-gradient(to right , " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

// function to receive random hexadecimal values from getRandomColor()
function randomgradient() {
  var randomColor1 = getRandomColor();
  var randomColor2 = getRandomColor();
  color1.value = randomColor1;
  color2.value = randomColor2;
  body.style.background =
    "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
  css.textContent = body.style.background + ";";
}

// event listener to the input button and click random button and also for reload of the web app
color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);
button.addEventListener("click", randomgradient);
window.onload = randomgradient();
