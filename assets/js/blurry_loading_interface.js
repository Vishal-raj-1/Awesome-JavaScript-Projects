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