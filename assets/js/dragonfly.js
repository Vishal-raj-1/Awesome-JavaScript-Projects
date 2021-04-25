score = 0;
collision = true;
audio = new Audio('../assets/sounds/dragonfly_music.mp3');
audiogameover = new Audio('../assets/sounds/dragonfly_gameOver.wav');
setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function (e) {
    console.log("Key Code: ", e.keyCode)
    if (e.keyCode == 38) {
        dragon = document.getElementById('warrior');
        dragon.classList.add('animateDragon');
        setTimeout(() => {
            dragon.classList.remove('animateDragon')
        }, 600);
    }

    if (e.keyCode == 39) {
        dragon = document.getElementById('warrior');
        dragX = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
        dragon.style.left = dragX + 105 + "px";
    }

    if (e.keyCode == 37) {
        dragon = document.getElementById('warrior');
        dragX = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
        dragon.style.left = (dragX - 105) + "px";
    }
}

setInterval(() => {
    dragon = document.querySelector('.dragon');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');


    dx = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)

    if (offsetX < 73 && offsetY < 52) {
        audiogameover.play();
        gameOver.innerHTML = "Game Over - Reload to try again !";
        obstacle.classList.remove('obstacleAnimate');
        setTimeout(() => {
            alert("You Lose - GameOver");
            var newGame = confirm("Start new Game?");
            if (newGame) {
                location.reload();
            }
            setTimeout(() => {
                audiogameover.pause();
                audio.pause();
            }, 1000);
        }, 2000);
    }
    else if (offsetX < 55 && collision) {
        score += 10;
        currentScore(score);
        collision = false;
        setTimeout(() => {
            collision = true;
        }, 500);

        animateDuration = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        newDuration = animateDuration - 0.1;
        obstacle.style.animationDuration = newDuration + 's';
    }

}, 10);

function currentScore(score) {
    scoreCount.innerHTML = "Your Score: " + score
}
