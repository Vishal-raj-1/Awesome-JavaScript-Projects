let ms = 0, s = 0, m = 0;
let timer;
let stopwatchEl = document.querySelector('.stopwatch');
let lapsContainer = document.querySelector('.laps');

function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}
function run() {
    stopwatchEl.textContent = getTimer();
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
}
function stop() {
    clearInterval(timer);
    timer = false
}
function reset() {
    ms = 0;
    s = 0;
    m = 0;
    stopwatchEl.textContent = getTimer();
}
function getTimer() {
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}
function lap() {
    if (timer) {
        let li = document.createElement('li');
        li.innerText = getTimer();
        lapsContainer.appendChild(li);
    }
}
function resetlaps(){
    lapsContainer.innerHTML="";
}