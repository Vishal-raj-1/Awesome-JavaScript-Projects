document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const resultDisplay = document.getElementById('result')
    let boxes = []
    const width = 4
    let score = 0

    //create the playing board
    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            boxes.push(square)
        }
        generate()
        generate()
    }
    createBoard()

    //generate a new number
    function generate() {
        randomNumber = Math.floor(Math.random() * boxes.length)
        if (boxes[randomNumber].innerHTML == 0) {
            boxes[randomNumber].innerHTML = 2
            checkForGameOver()
        } else generate()
    }

    function moveRight() {
        for (let i = 0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = boxes[i].innerHTML
                let totalTwo = boxes[i + 1].innerHTML
                let totalThree = boxes[i + 2].innerHTML
                let totalFour = boxes[i + 3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

                let filteredRow = row.filter(num => num)
                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(0)
                let newRow = zeros.concat(filteredRow)

                boxes[i].innerHTML = newRow[0]
                boxes[i + 1].innerHTML = newRow[1]
                boxes[i + 2].innerHTML = newRow[2]
                boxes[i + 3].innerHTML = newRow[3]
            }
        }
    }

    function moveLeft() {
        for (let i = 0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = boxes[i].innerHTML
                let totalTwo = boxes[i + 1].innerHTML
                let totalThree = boxes[i + 2].innerHTML
                let totalFour = boxes[i + 3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

                let filteredRow = row.filter(num => num)
                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(0)
                let newRow = filteredRow.concat(zeros)

                boxes[i].innerHTML = newRow[0]
                boxes[i + 1].innerHTML = newRow[1]
                boxes[i + 2].innerHTML = newRow[2]
                boxes[i + 3].innerHTML = newRow[3]
            }
        }
    }


    function moveUp() {
        for (let i = 0; i < 4; i++) {
            let totalOne = boxes[i].innerHTML
            let totalTwo = boxes[i + width].innerHTML
            let totalThree = boxes[i + (width * 2)].innerHTML
            let totalFour = boxes[i + (width * 3)].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

            let filteredColumn = column.filter(num => num)
            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill(0)
            let newColumn = filteredColumn.concat(zeros)

            boxes[i].innerHTML = newColumn[0]
            boxes[i + width].innerHTML = newColumn[1]
            boxes[i + (width * 2)].innerHTML = newColumn[2]
            boxes[i + (width * 3)].innerHTML = newColumn[3]
        }
    }

    function moveDown() {
        for (let i = 0; i < 4; i++) {
            let totalOne = boxes[i].innerHTML
            let totalTwo = boxes[i + width].innerHTML
            let totalThree = boxes[i + (width * 2)].innerHTML
            let totalFour = boxes[i + (width * 3)].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

            let filteredColumn = column.filter(num => num)
            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill(0)
            let newColumn = zeros.concat(filteredColumn)

            boxes[i].innerHTML = newColumn[0]
            boxes[i + width].innerHTML = newColumn[1]
            boxes[i + (width * 2)].innerHTML = newColumn[2]
            boxes[i + (width * 3)].innerHTML = newColumn[3]
        }
    }

    function combineRow() {
        for (let i = 0; i < 15; i++) {
            if (boxes[i].innerHTML === boxes[i + 1].innerHTML) {
                let combinedTotal = parseInt(boxes[i].innerHTML) + parseInt(boxes[i + 1].innerHTML)
                boxes[i].innerHTML = combinedTotal
                boxes[i + 1].innerHTML = 0
                score += combinedTotal
                scoreDisplay.innerHTML = score
            }
        }
        checkForWin()
    }

    function combineColumn() {
        for (let i = 0; i < 12; i++) {
            if (boxes[i].innerHTML === boxes[i + width].innerHTML) {
                let combinedTotal = parseInt(boxes[i].innerHTML) + parseInt(boxes[i + width].innerHTML)
                boxes[i].innerHTML = combinedTotal
                boxes[i + width].innerHTML = 0
                score += combinedTotal
                scoreDisplay.innerHTML = score
            }
        }
        checkForWin()
    }

    //assign functions to keyCodes
    function control(e) {
        if (e.keyCode === 37) {
            keyLeft()
        } else if (e.keyCode === 38) {
            keyUp()
        } else if (e.keyCode === 39) {
            keyRight()
        } else if (e.keyCode === 40) {
            keyDown()
        }
    }
    document.addEventListener('keyup', control)

    function keyRight() {
        moveRight()
        combineRow()
        moveRight()
        generate()
    }

    function keyLeft() {
        moveLeft()
        combineRow()
        moveLeft()
        generate()
    }

    function keyUp() {
        moveUp()
        combineColumn()
        moveUp()
        generate()
    }

    function keyDown() {
        moveDown()
        combineColumn()
        moveDown()
        generate()
    }

    //check for the number 2048 in the boxes to win
    function checkForWin() {
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].innerHTML == 2048) {
                resultDisplay.innerHTML = 'You WIN'
                document.removeEventListener('keyup', control)
                setTimeout(() => clear(), 3000)
            }
        }
    }

    //check if there are no zeros on the board to lose
    function checkForGameOver() {
        let zeros = 0
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].innerHTML == 0) {
                zeros++
            }
        }
        if (zeros === 0) {
            resultDisplay.innerHTML = 'You LOSE'
            document.removeEventListener('keyup', control)
            setTimeout(() => clear(), 3000)
        }
    }

    //clear timer
    function clear() {
        clearInterval(myTimer)
    }


    //add colours
    function addColours() {
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].innerHTML == 0) boxes[i].style.backgroundColor = '#afa192'
            else if (boxes[i].innerHTML == 2) boxes[i].style.backgroundColor = '#eee4da'
            else if (boxes[i].innerHTML == 4) boxes[i].style.backgroundColor = '#ede0c8'
            else if (boxes[i].innerHTML == 8) boxes[i].style.backgroundColor = '#f2b179'
            else if (boxes[i].innerHTML == 16) boxes[i].style.backgroundColor = '#ffcea4'
            else if (boxes[i].innerHTML == 32) boxes[i].style.backgroundColor = '#e8c064'
            else if (boxes[i].innerHTML == 64) boxes[i].style.backgroundColor = '#ffab6e'
            else if (boxes[i].innerHTML == 128) boxes[i].style.backgroundColor = '#fd9982'
            else if (boxes[i].innerHTML == 256) boxes[i].style.backgroundColor = '#ead79c'
            else if (boxes[i].innerHTML == 512) boxes[i].style.backgroundColor = '#76daff'
            else if (boxes[i].innerHTML == 1024) boxes[i].style.backgroundColor = '#beeaa5'
            else if (boxes[i].innerHTML == 2048) boxes[i].style.backgroundColor = '#d7d4f0'
        }
    }
    addColours()

    var myTimer = setInterval(addColours, 50)

})