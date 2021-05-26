let p1 = document.querySelector('.percentage');
let p2 = document.querySelector('.percent');
navigator.getBattery().then(function(battery){
   p1.style.width = battery.level * 100 + '%';
   p2.innerHTML = battery.level * 100 + '%';

})

let a = document.querySelector('.sec');
let t = document.querySelector('.toggle');
t.onclick = function(){
   a.classList.toggle('dark');
}



