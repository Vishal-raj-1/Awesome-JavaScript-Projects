const monthName = [
    'January', 'February', 'March', 'Apirl', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];
const weekName = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

//Selecting countdown items
let showDay = document.querySelector('.giveway-day');
let showHour = document.querySelector('.giveway-hour');
let showMin = document.querySelector('.giveway-min');
let showSec = document.querySelector('.giveway-sec'); 

//console.log(monthName, weekName);
let period = 'PM';
let givewayDate = '20 apr 2021';
const deadline = document.querySelector('.giveway-dealine');
let curretDate = new Date(2021, 03, 20, 11, 15, 00);
//console.log(curretDate);
const hour = curretDate.getHours();
const mini = curretDate.getMinutes();
const year = curretDate.getFullYear();
const date = curretDate.getDate();
const month = curretDate.getMonth();
const day = curretDate.getDay();
const getMonthName = monthName[month];
const getDayName = weekName[day];
//console.log(getMonthName, getDayName);

deadline.textContent = `Giveway ends on ${getDayName}, ${date} ${getMonthName} ${year} ${hour} : ${mini} ${period}`;

//countdown 
function showCountDown(){
    let newGiveway = new Date(givewayDate);
    //console.log(newGiveway);
    let todayDate = new Date();
    const totalSec= (newGiveway - todayDate) / 1000;
    //console.log(totalSec);

    const getCountDays = Math.floor(totalSec / 3600 / 24);
    const getCountHour = Math.floor(totalSec / 3600 ) % 24;
    
    const getCountMinitue = Math.floor(totalSec / 60) % 60;
    const getCountSecond = Math.floor(totalSec % 60);

    showDay.textContent = getCountDays;
    showHour.textContent = timeFormate(getCountHour);
    showMin.textContent = timeFormate(getCountMinitue);
    showSec.textContent = timeFormate(getCountSecond);


    function timeFormate(time){
        return time < 10 ? ` 0${time}` : time;
    }
}
showCountDown();
setInterval(showCountDown, 1000 )
