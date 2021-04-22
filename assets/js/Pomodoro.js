var add = prompt("set the timer ");
while (add <= 0) {
  alert("invalid time");
  var add = prompt("set the timer ");
}
var minutes = add;
var seconds = 00;
var click = new Audio("../assets/sounds/click.mp3");
var bell = new Audio("../assets/sounds/bell.mp3");

function template() {
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

function start() {
  click.play();
  if (add == 1) {
    minutes = 0;
  } else {
    minutes = add - 1 || 24;
  }
  seconds = 59;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  var minute_inetrval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);
  function minutesTimer() {
    minutes = minutes - 1;
    document.getElementById("minutes").innerHTML = minutes;
  }
  function secondsTimer() {
    seconds = seconds - 1;
    document.getElementById("seconds").innerHTML = seconds;

    if (seconds <= 0) {
      if (minutes <= 0) {
        clearInterval(minute_inetrval);
        clearInterval(seconds_interval);
        document.getElementById("done").innerHTML =
          "Session Completed ! Take a break";
        document.getElementById("done").classList.add("show");

        bell.play();
      }
      seconds = 60;
    }
  }
}
