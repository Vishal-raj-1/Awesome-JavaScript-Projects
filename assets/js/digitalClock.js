function clock() {
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  hours.innerHTML = new Date().getHours();
  minutes.innerHTML = new Date().getMinutes();
  seconds.innerHTML = new Date().getSeconds();

  hours.innerHTML =
    hours.innerHTML == 0
      ? 12
      : hours.innerHTML > 12
      ? hours.innerHTML - 12
      : hours.innerHTML;

  if (hours.innerHTML.toString().length == 1) {
    hours.innerHTML = "0" + hours.innerHTML;
  }

  if (minutes.innerHTML.toString().length == 1) {
    minutes.innerHTML = "0" + minutes.innerHTML;
  }

  if (seconds.innerHTML.toString().length == 1) {
    seconds.innerHTML = "0" + seconds.innerHTML;
  }
}

let start = document.querySelector(".start");
let stop = document.querySelector(".stop");

var interval;
console.log(interval);

function clockStart() {
  start.setAttribute("disabled", true);
  start.classList.add("disabled");
  interval = setInterval(clock, 1000);
  stop.removeAttribute("disabled");
  stop.classList.remove("disabled");
}

function clockStop() {
  start.removeAttribute("disabled");
  start.classList.remove("disabled");
  clearInterval(interval);
  stop.setAttribute("disabled", true);
  stop.classList.add("disabled");
}

start.addEventListener("click", clockStart);
stop.addEventListener("click", clockStop);
clockStart();
