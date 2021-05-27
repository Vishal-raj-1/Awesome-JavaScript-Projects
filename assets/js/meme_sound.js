var numberOfButtons = document.querySelectorAll(".meme").length;
for (var i = 0; i <= numberOfButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerText;
        console.log(buttonInnerHTML[0]);
        makeSound(buttonInnerHTML[0])
        buttonAnimation(buttonInnerHTML[0])

    });
}
function makeSound(key) {
    switch (key) {
        case "A":
            var A = new Audio("../assets/sounds/Airhorn.ogg");
            A.play();
            break;
        case "B":
            var B = new Audio("../assets/sounds/Anime Wow.ogg");
            B.play();
            break;
        case "C":
            var C = new Audio("../assets/sounds/Are You Winning Son.ogg");
            C.play();
            break;
        case "D":
            var D = new Audio("../assets/sounds/Ba Dum Tsss.ogg");
            D.play();
            break;
        case "E":
            var E = new Audio("../assets/sounds/Be Gone Thot.ogg");
            E.play();
            break;
        case "F":
            var F = new Audio("../assets/sounds/Brah.ogg");
            F.play();
            break;
        case "G":
            var G = new Audio("../assets/sounds/Crickets.ogg");
            G.play();
            break;
        case "H":
            var H = new Audio("../assets/sounds/Donald Trump China.ogg");
            H.play();
            break;
        case "I":
            var I = new Audio("../assets/sounds/Exclamation Point.ogg");
            I.play();
            break;
        case "J":
            var J = new Audio("../assets/sounds/FBI Open Up.ogg");
            J.play();
            break;
        case "K":
            var K = new Audio("../assets/sounds/Here We Go Again.ogg");
            K.play();
            break;
        case "L":
            var L = new Audio("../assets/sounds/It was at this moment he knew.ogg");
            L.play();
            break;
        case "M":
            var M = new Audio("../assets/sounds/Megalovania.ogg");
            M.play();
            break;
        case "N":
            var N = new Audio("../assets/sounds/Mission Failed.ogg");
            N.play();
            break;
        case "O":
            var O = new Audio("../assets/sounds/Naniii.ogg");
            O.play();
            break;
        case "Q":
            var Q = new Audio("../assets/sounds/Nice Meme.ogg");
            Q.play();
            break;
        case "R":
            var R = new Audio("../assets/sounds/No God No God Please No.ogg");
            R.play();
            break;
        case "S":
            var S = new Audio("../assets/sounds/No No No No Laugh.ogg");
            S.play();
            break;
        case "T":
            var T = new Audio("../assets/sounds/Not To Be Racist.ogg");
            T.play();
            break;
        case "U":
            var U = new Audio("../assets/sounds/Ooof.ogg");
            U.play();
            break;
        case "V":
            var V = new Audio("../assets/sounds/PewDiePie Big Chungus Anthem.ogg");
            V.play();
            break;
        case "W":
            var W = new Audio("../assets/sounds/PewDiePie Good Morning Gamers.ogg");
            W.play();
            break;
        case "X":
            var X = new Audio("../assets/sounds/PewDiePie I Got Your Knees.ogg");
            X.play();
            break;
        case "Y":
            var Y = new Audio("../assets/sounds/Why Are We Still Here.ogg");
            Y.play();
            break;
        case "Z":
            var Z = new Audio("../assets/sounds/WTF Was That Damage My Guy.ogg");
            Z.play();
            break;

        default:
            console.log(key);
    }
}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("playing");

    setTimeout(function () {
        activeButton.classList.remove("playing");
    }, 100);
}

