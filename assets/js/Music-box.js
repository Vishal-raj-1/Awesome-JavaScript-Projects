var a = document.querySelectorAll(".music").length
// detecting button press 
for (var i = 0; i < a; i++) {
    document.querySelectorAll(".music")[i].addEventListener("click", function () {
        var b = this.innerHTML
        showanimations(b)
        switch (b) {
            case "w":
                var audio = new Audio("../assets/sounds/Airhorn.ogg")
                audio.play()
                break;
            case "a":
                var audio = new Audio("../assets/sounds/amongus.mp3")
                audio.play()
                break;
            case "s":
                var audio = new Audio("../assets/sounds/bell.mp3")
                audio.play()
                break;
            case "d":
                var audio = new Audio("../assets/sounds/tom-4.mp3")
                audio.play()
                break;
            case "j":
                var audio = new Audio("../assets/sounds/bubbles.mp3")
                audio.play()
                break;
            case "k":
                var audio = new Audio("../assets/sounds/clap.wav")
                audio.play()
                break;
            case "l":
                var audio = new Audio("../assets/sounds/clay.mp3")
                audio.play()
                break;
            case "b":
                var audio = new Audio("../assets/sounds/green.mp3")
                audio.play()
                break;
            case "c":
                var audio = new Audio("../assets/sounds/harp.wav")
                audio.play()
                break;
            case "d":
                var audio = new Audio("../assets/sounds/kick.wav")
                audio.play()
                break;
            case "e":
                var audio = new Audio("../assets/sounds/moon.mp3")
                audio.play()
                break;
            case "f":
                var audio = new Audio("../assets/sounds/tom-1.mp3")
                audio.play()
                break;
            case "g":
                var audio = new Audio("../assets/sounds/ride.wav")
                audio.play()
                break;
            case "h":
                var audio = new Audio("../assets/sounds/snare.wav")
                audio.play()
                break;
            case "i":
                var audio = new Audio("../assets/sounds/tom.wav")
                audio.play()
                break;
            case "m":
                var audio = new Audio("../assets/sounds/tom-2.mp3")
                audio.play()
                break;
            case "n":
                var audio = new Audio("../assets/sounds/tom-3.mp3")
                audio.play()
                break;
            case "o":
                var audio = new Audio("../assets/sounds/tink.wav")
                audio.play()
                break;
            case "p":
                var audio = new Audio("../assets/sounds/ufo.mp3")
                audio.play()
                break;
            case "q":
                var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (a).mp3")
                audio.play()
                break;
            case "r":
                var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (b).mp3")
                audio.play()
                break;
            case "t":
                var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (c).mp3")
                audio.play()
                break;
            case "u":
                var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (d).mp3")
                audio.play()
                break;
            case "v":
                var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (e).mp3")
                audio.play()
                break;
            case "w":
                var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (f).mp3")
                audio.play()
                break;
            case "x":
                var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (g).mp3")
                audio.play()
                break;
            default:
        }
    })
}

// detecting keyboard press 

document.addEventListener("keydown", function (event) {
    makeSoundKey(event.key)
    showanimations(event.key)
})

function makeSoundKey(key) {
    switch (key) {
        case "w":
            var audio = new Audio("../assets/sounds/Airhorn.ogg")
            audio.play()
            break;
        case "a":
            var audio = new Audio("../assets/sounds/amongus.mp3")
            audio.play()
            break;
        case "s":
            var audio = new Audio("../assets/sounds/bell.mp3")
            audio.play()
            break;
        case "d":
            var audio = new Audio("../assets/sounds/tom-4.mp3")
            audio.play()
            break;
        case "j":
            var audio = new Audio("../assets/sounds/bubbles.mp3")
            audio.play()
            break;
        case "k":
            var audio = new Audio("../assets/sounds/clap.wav")
            audio.play()
            break;
        case "l":
            var audio = new Audio("../assets/sounds/clay.mp3")
            audio.play()
            break;
        case "b":
            var audio = new Audio("../assets/sounds/green.mp3")
            audio.play()
            break;
        case "c":
            var audio = new Audio("../assets/sounds/harp.wav")
            audio.play()
            break;
        case "d":
            var audio = new Audio("../assets/sounds/kick.wav")
            audio.play()
            break;
        case "e":
            var audio = new Audio("../assets/sounds/moon.mp3")
            audio.play()
            break;
        case "f":
            var audio = new Audio("../assets/sounds/tom-1.mp3")
            audio.play()
            break;
        case "g":
            var audio = new Audio("../assets/sounds/ride.wav")
            audio.play()
            break;
        case "h":
            var audio = new Audio("../assets/sounds/snare.wav")
            audio.play()
            break;
        case "i":
            var audio = new Audio("../assets/sounds/tom.wav")
            audio.play()
            break;
        case "m":
            var audio = new Audio("../assets/sounds/tom-2.mp3")
            audio.play()
            break;
        case "n":
            var audio = new Audio("../assets/sounds/tom-3.mp3")
            audio.play()
            break;
        case "o":
            var audio = new Audio("../assets/sounds/tink.wav")
            audio.play()
            break;
        case "p":
            var audio = new Audio("../assets/sounds/ufo.mp3")
            audio.play()
            break;
        case "q":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (a).mp3")
            audio.play()
            break;
        case "r":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (b).mp3")
            audio.play()
            break;
        case "t":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (c).mp3")
            audio.play()
            break;
        case "u":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (d).mp3")
            audio.play()
            break;
        case "v":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (e).mp3")
            audio.play()
            break;
        case "w":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (f).mp3")
            audio.play()
            break;
        case "x":
            var audio = new Audio("../assets/sounds/yt1s (mp3cut.net) (g).mp3")
            audio.play()
            break;
        default:
    }
}
function showanimations(currentkey) {
    var active = document.querySelector("." + currentkey);
    active.classList.add("pressed")

    setTimeout(function () {
        active.classList.remove("pressed")
    }, 100)
}