const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');
const countDown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading')

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear+1} 00:00:00`);

year.innerText = currentYear;

function updateCountDown(){
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    // const diff = 0;

    const daysLeft = Math.floor(diff/1000/60/60/24);
    const hoursLeft = Math.floor(diff/1000/60/60) %24;
    const minutesLeft = Math.floor(diff/1000/60) %60;
    const secondsLeft = Math.floor(diff/1000) %60;

    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft <10 ? '0'+hoursLeft :hoursLeft;
    mins.innerHTML = minutesLeft <10? '0'+minutesLeft:minutesLeft;
    secs.innerHTML = secondsLeft <10? '0'+secondsLeft:secondsLeft;
    if(diff === 0){
        setTimeout(function () {
            confetti.start();
        }, 1000);
        setTimeout(function () {
            confetti.stop();
        }, 5000);
    }
}

setTimeout(()=>{
    loading.remove();
    countDown.style.display = 'flex';
},1000);

setInterval(updateCountDown,1000);

