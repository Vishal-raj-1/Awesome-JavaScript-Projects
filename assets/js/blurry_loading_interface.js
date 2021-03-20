let loadtext = document.querySelector('.loading-text');
let bg = document.querySelector('.bg')

let load = 0;
let int = setInterval(blurring, 50);

function blurring(){
    load++
    if(load > 99){
        clearInterval(int);
        
    }
    loadtext.innerHTML = `${load}%`
    loadtext.style.opacity = `${1-load/100}`
    bg.style.filter = `blur(${30-(load/100)*30}px)`
}
// This project is based on the starter page of any website which is a Blurry effect with a countdown from 0% to 100%.
// The structure is made from blurry_loading_interface.html file.
// To butify The project we use the blurry_loading_interface.css file.
// The main brain of the body that is how will the opacity change from 100% to 0% is written under this javascript file that is blurry_loading_interface.js file.
// You can use this repository to add a starter page to your website and showcase it to your friends or for company basis as well.
// Thank you guys for viewing this project... 
