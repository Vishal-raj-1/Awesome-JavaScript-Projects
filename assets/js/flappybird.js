document.addEventListener('DOMContentLoaded' , () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')
    const scoreDisplay = document.querySelector("#score");
    const elem = document.querySelector("#over");
    const startBtn = document.querySelector(".start");
    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2
    let isGameOver = false
    let gap = 450
    var count = 0
    let s = 0;
    startBtn.addEventListener('click',() =>{
    function startGame (){
        birdBottom -= gravity
        bird.style.bottom = birdBottom + 'px'    
        bird.style.left = birdLeft + 'px'    
    }
    let gameTimerId = setInterval(startGame, 20)


    function control (e){
        if(e.keyCode === 38){
            jump()
        }
    }
    function jump() {        
        if(birdBottom< 500) birdBottom += 50
        bird.style.bottom = birdBottom + 'px'
    }
    document.addEventListener('keyup',control)

    function generateObstacle (){
        let obstacleLeft = 500
        let randomHeight = Math.random() * 60
        let obstacleBottom = randomHeight        
        const obstacle = document.createElement('div')
        const topObstacle = document.createElement('div')
        if(!isGameOver){
            obstacle.classList.add('obstacle')
            topObstacle.classList.add('topObstacle')
            count = count+1
            scoreDisplay.innerHTML = count-1
        }
        gameDisplay.appendChild(obstacle)
        gameDisplay.appendChild(topObstacle)
        obstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        topObstacle.style.left = obstacleLeft + 'px'
        topObstacle.style.bottom = obstacleBottom + gap + 'px'

        function moveObstacle(){
            obstacleLeft -=2
            obstacle.style.left = obstacleLeft + 'px'
            topObstacle.style.left = obstacleLeft + 'px'

            if(obstacleLeft === -60){
                clearInterval(timerId) 
                gameDisplay.removeChild(obstacle)
                gameDisplay.removeChild(topObstacle)
            }
            if(
                obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 && 
                (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap-200)||
                birdBottom === 0
                ) {
                gameOver()
                clearInterval(timerId)
            }
        }
        let timerId = setInterval(moveObstacle, 20)
        if(!isGameOver) setTimeout(generateObstacle, 3000)
    }
    generateObstacle()

    function gameOver(){
        clearInterval(gameTimerId)
        isGameOver = true
        document.removeEventListener('keyup', control)
        elem.style.visibility = "visible";
    }
})
})