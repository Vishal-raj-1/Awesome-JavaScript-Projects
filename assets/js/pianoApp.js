for(var i = 0; i<document.querySelectorAll(".piano").length; i++){

document.querySelectorAll(".piano")[i].addEventListener("click",function () {

    var buttonInnerHTML =  this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

});
}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(keys) {
    switch (keys) {
        case "c":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (c).mp3")
            audio.play();
            var buttonclick1=document.querySelector(".x1");
            buttonclick1.classList.add("click")
            setTimeout(() => { buttonclick1.classList.remove("click")}, 1000);
            break;
        case "d":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (d).mp3")
            audio.play();
            var buttonclick2=document.querySelector(".x2");
            buttonclick2.classList.add("click")
            setTimeout(() => { buttonclick2.classList.remove("click") }, 1000);
            break; 
        case "e":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (e).mp3")
            audio.play();
            var buttonclick3=document.querySelector(".x3");
            buttonclick3.classList.add("click")
            setTimeout(() => {buttonclick3.classList.remove("click")}, 1000);
            break;       
        case "f":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (f).mp3")
            audio.play();
            var buttonclick4=document.querySelector(".x4");
            buttonclick4.classList.add("click")
            setTimeout(() => {buttonclick4.classList.remove("click")}, 1000);
            break;
        case "g":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (g).mp3")
            audio.play();
            var buttonclick5=document.querySelector(".x5");
            buttonclick5.classList.add("click")
            setTimeout(() => {  buttonclick5.classList.remove("click") }, 1000);
            break;   
        case "a":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (a).mp3")
            audio.play();
            var buttonclick6=document.querySelector(".x6");
            buttonclick6.classList.add("click")
            setTimeout(() => { buttonclick6.classList.remove("click") }, 1000);
            break;
        case "b":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (b).mp3")
            audio.play();
            var buttonclick7=document.querySelector(".x7");
            buttonclick7.classList.add("click")
            setTimeout(() => { buttonclick7.classList.remove("click") }, 1000);
            break;             
    
        default: console.log(buttonInnerHTML);
            break;
    }
    
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
}