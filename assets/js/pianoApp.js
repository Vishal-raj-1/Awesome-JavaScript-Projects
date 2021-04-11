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
            break;
        case "d":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (d).mp3")
            audio.play();
            break; 
        case "e":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (e).mp3")
            audio.play();
            break;       
        case "f":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (f).mp3")
            audio.play();
            break;
        case "g":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (g).mp3")
            audio.play();
            break;   
        case "a":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (a).mp3")
            audio.play();
            break;
        case "b":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (b).mp3")
            audio.play();
            break;             
    
        default: console.log(buttonInnerHTML);
            break;
    }
    
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

}