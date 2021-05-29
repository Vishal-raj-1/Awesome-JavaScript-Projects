document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const flagsLeft = document.querySelector("#flags-left");
  const result = document.querySelector("#result");
  let width = 10;
  let numBombs = 20;
  let flags = 0;
  let squares = [];
  let isGameOver = false;

  //create Board
  function createBoard() {
    flagsLeft.innerHTML = numBombs;

    //get shuffled game array with random bombs
    const bombsArray = Array(numBombs).fill("bomb");
    const emptyArray = Array(width * width - numBombs).fill("valid");
    const gameArray = emptyArray.concat(bombsArray);
    const shuffledArray = gameArray.sort(() => Math.random() - 0.5);

    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("id", i);
      square.classList.add(shuffledArray[i]);
      grid.appendChild(square);
      squares.push(square);

      //normal click
      square.addEventListener("click", function (e) {
        click(square);
      });

      //cntrl and left click
      square.oncontextmenu = function (e) {
        e.preventDefault();
        addFlag(square);
      };
    }

    //add numbers
    for (let count = 0; count < squares.length; count++) {
      let total = 0;
      const isLeftEdge = count % width === 0;
      const isRightEdge = count % width === width - 1;

      if (squares[count].classList.contains("valid")) {
        if (
          count > 0 &&
          !isLeftEdge &&
          squares[count - 1].classList.contains("bomb")
        )
          total++;
        if (
          count > 9 &&
          !isRightEdge &&
          squares[count + 1 - width].classList.contains("bomb")
        )
          total++;
        if (count > 10 && squares[count - width].classList.contains("bomb"))
          total++;
        if (
          count > 11 &&
          !isLeftEdge &&
          squares[count - 1 - width].classList.contains("bomb")
        )
          total++;
        if (
          count < 98 &&
          !isRightEdge &&
          squares[count + 1].classList.contains("bomb")
        )
          total++;
        if (
          count < 90 &&
          !isLeftEdge &&
          squares[count - 1 + width].classList.contains("bomb")
        )
          total++;
        if (
          count < 88 &&
          !isRightEdge &&
          squares[count + 1 + width].classList.contains("bomb")
        )
          total++;
        if (count < 89 && squares[count + width].classList.contains("bomb"))
          total++;
        squares[count].setAttribute("data", total);
      }
    }
  }
  createBoard();

  //add Flag with right click
  function addFlag(square) {
    if (isGameOver) return;
    if (!square.classList.contains("checked") && flags < numBombs) {
      if (!square.classList.contains("flag")) {
        square.classList.add("flag");
        square.innerHTML = " 🚩";
        flags++;
        flagsLeft.innerHTML = numBombs - flags;
        checkForWin();
      } else {
        square.classList.remove("flag");
        square.innerHTML = "";
        flags--;
        flagsLeft.innerHTML = numBombs - flags;
      }
    }
  }

  //click on square actions
  function click(square) {
    let currentId = square.id;
    if (isGameOver) return;
    if (
      square.classList.contains("checked") ||
      square.classList.contains("flag")
    )
      return;
    if (square.classList.contains("bomb")) {
      gameOver(square);
    } else {
      let total = square.getAttribute("data");
      if (total != 0) {
        square.classList.add("checked");
        if (total == 1) square.classList.add("one");
        if (total == 2) square.classList.add("two");
        if (total == 3) square.classList.add("three");
        if (total == 4) square.classList.add("four");
        square.innerHTML = total;
        return;
      }
      checkSquare(square, currentId);
    }
    square.classList.add("checked");
  }

  //check neighboring squares once square is clicked
  function checkSquare(square, currentId) {
    const isLeftEdge = currentId % width === 0;
    const isRightEdge = currentId % width === width - 1;

    setTimeout(() => {
      if (currentId > 0 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) - 1].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId > 9 && !isRightEdge) {
        const newId = squares[parseInt(currentId) + 1 - width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId > 10) {
        const newId = squares[parseInt(currentId - width)].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId > 11 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) - 1 - width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId < 98 && !isRightEdge) {
        const newId = squares[parseInt(currentId) + 1].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId < 90 && !isLeftEdge) {
        const newId = squares[parseInt(currentId) - 1 + width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId < 88 && !isRightEdge) {
        const newId = squares[parseInt(currentId) + 1 + width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
      if (currentId < 89) {
        const newId = squares[parseInt(currentId) + width].id;
        const newSquare = document.getElementById(newId);
        click(newSquare);
      }
    }, 10);
  }

  //game over
  function gameOver(square) {
    result.innerHTML = "BOOM! Game Over!";
    isGameOver = true;

    //show ALL the bombs
    squares.forEach((square) => {
      if (square.classList.contains("bomb")) {
        square.innerHTML = "💣";
        square.classList.remove("bomb");
        square.classList.add("checked");
      }
    });
  }

  //check for win
  function checkForWin() {
    let matches = 0;

    for (let count = 0; count < squares.length; count++) {
      if (
        squares[count].classList.contains("flag") &&
        squares[count].classList.contains("bomb")
      ) {
        matches++;
      }
      if (matches === numBombs) {
        result.innerHTML = "YOU WIN!";
        isGameOver = true;
      }
    }
  }
});
