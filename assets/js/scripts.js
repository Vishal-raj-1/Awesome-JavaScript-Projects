

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

navbar = document.querySelector(".navbar").querySelectorAll("a");
console.log(navbar);

navbar.forEach(element =>{
    element.addEventListener("click",function(){
        navbar.forEach(nav=>nav.classList.remove("active"))

        this.classList.add("active");
    })
} );


