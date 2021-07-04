

$(document).ready(function() {
    //Preloader
    preloaderFadeOutTime = 500;
    function hidePreloader() {
    var preloader = $('#spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

$(document).ready(function()
 {
    if ($('.typed').length) {
        var typed=new Typed('.typed', {
              
              strings:["The great collection of JavaScript projects,just for you!!!"],
              loop: true,
              typeSpeed: 100,
              backSpeed: 50,
              backDelay: 2000
            });}
    
    
});




let menuBar = document.getElementById('menuBar');
let menus = document.getElementById('menu');
let menuCloses = document.getElementById('menuClose');

function menu (){
    menus.style.right= '0';
    menuCloses.style.display= 'inherit';
}
function menuClose(){
    menus.style.right="-280px";
    menuCloses.style.display= 'none';
}

window.onscroll = function()
{
    if(pageYOffset >= 90)
    {
        document.getElementById('goToTop').style.visibility="visible";
    }else
    {
        document.getElementById('goToTop').style.visibility="hidden";
    }
};

navbar = document.querySelector(".navbar").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element =>{
    element.addEventListener("click",function(){
        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
} );