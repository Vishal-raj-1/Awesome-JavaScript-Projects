const allCells = document.querySelectorAll(".cell:not(.row-top)");
const topCells = document.querySelectorAll(".cell.row-top");
const resetButton = document.querySelector(".reset");
const statusSpan = document.querySelector(".status");
const playerTurn = document.querySelector(".player-turn");

const column0 = [
  allCells[35],
  allCells[28],
  allCells[21],
  allCells[14],
  allCells[7],
  allCells[0],
  topCells[0],
];

const column1 = [
  allCells[36],
  allCells[29],
  allCells[22],
  allCells[15],
  allCells[8],
  allCells[1],
  topCells[1],
];

const column2 = [
  allCells[37],
  allCells[30],
  allCells[23],
  allCells[16],
  allCells[9],
  allCells[2],
  topCells[2],
];

const column3 = [
  allCells[38],
  allCells[31],
  allCells[24],
  allCells[17],
  allCells[10],
  allCells[3],
  topCells[3],
];

const column4 = [
  allCells[39],
  allCells[32],
  allCells[25],
  allCells[18],
  allCells[11],
  allCells[4],
  topCells[4],
];

const column5 = [
  allCells[40],
  allCells[33],
  allCells[26],
  allCells[19],
  allCells[12],
  allCells[5],
  topCells[5],
];

const column6 = [
  allCells[41],
  allCells[34],
  allCells[27],
  allCells[20],
  allCells[13],
  allCells[6],
  topCells[6],
];

const columns = [column0, column1, column2, column3, column4, column5, column6];

const topRow = [
  topCells[0],
  topCells[1],
  topCells[2],
  topCells[3],
  topCells[4],
  topCells[5],
  topCells[6],
];

const row0 = [
  allCells[0],
  allCells[1],
  allCells[2],
  allCells[3],
  allCells[4],
  allCells[5],
  allCells[6],
];

const row1 = [
  allCells[7],
  allCells[8],
  allCells[9],
  allCells[10],
  allCells[11],
  allCells[12],
  allCells[13],
];

const row2 = [
  allCells[14],
  allCells[15],
  allCells[16],
  allCells[17],
  allCells[18],
  allCells[19],
  allCells[20],
];

const row3 = [
  allCells[21],
  allCells[22],
  allCells[23],
  allCells[24],
  allCells[25],
  allCells[26],
  allCells[27],
];

const row4 = [
  allCells[28],
  allCells[29],
  allCells[30],
  allCells[31],
  allCells[32],
  allCells[33],
  allCells[34],
];

const row5 = [
  allCells[35],
  allCells[36],
  allCells[37],
  allCells[38],
  allCells[39],
  allCells[40],
  allCells[41],
];

const rows = [row0, row1, row2, row3, row4, row5, topRow];

alert("Welcome to Connect Four");
let firstPlayer = prompt("Enter First Player Name ( Green Ball ) ");
let secondPlayer = prompt("Enter Second Player Name ( Red Ball ) ");

if (firstPlayer === "" || firstPlayer === null) {
  firstPlayer = "Green";
}

if (secondPlayer === "" || secondPlayer === null) {
  secondPlayer = "Red";
}

let gameIsLive = true;
let greenIsNext = true;

playerTurn.textContent = `${firstPlayer}'s turn`;

const getClassListArray = (cell) => {
  const classList = cell.classList;

  return [...classList];
};

const getCellLocation = (cell) => {
  const classList = getClassListArray(cell);

  const rowClass = classList.find((className) => className.includes("row"));
  const colClass = classList.find((className) => className.includes("col"));
  const rowIndex = rowClass[4];
  const colIndex = colClass[4];

  const rowNumber = parseInt(rowIndex, 10);
  const colNumber = parseInt(colIndex, 10);

  return [rowNumber, colNumber];
};

const getFirstOpenCellForColumn = (colIndex) => {
  const column = columns[colIndex];

  const columnsWithoutTop = column.slice(0, 6);

  for (const cell of columnsWithoutTop) {
    const classList = getClassListArray(cell);

    if (!classList.includes("green") && !classList.includes("red")) {
      return cell;
    }
  }

  return null;
};

const clearColorFromTop = (colIndex) => {
  const topCell = topCells[colIndex];

  topCell.classList.remove("green");
  topCell.classList.remove("red");
};

const getColorOfCell = (cell) => {
  const classList = getClassListArray(cell);

  if (classList.includes("green")) return "green";
  if (classList.includes("red")) return "red";

  return null;
};

const checkWinningCells = (cells) => {
  if (cells.length < 4) return false;

  gameIsLive = false;
  for (const cell of cells) {
    cell.classList.add("win");
  }

  statusSpan.textContent = `${
    greenIsNext ? firstPlayer : secondPlayer
  } has won!`;
  return true;
};

const checkStatusOfGame = (cell) => {
  const color = getColorOfCell(cell);

  if (!color) return;
  const [rowIndex, colIndex] = getCellLocation(cell);

  /* Check Horizontally */

  let winningCells = [cell];
  let rowToCheck = rowIndex;
  let colToCheck = colIndex - 1;

  while (colToCheck >= 0) {
    const cellToCheck = rows[rowToCheck][colToCheck];

    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      colToCheck--;
    } else {
      break;
    }
  }

  colToCheck = colIndex + 1;

  while (colToCheck <= 6) {
    const cellToCheck = rows[rowToCheck][colToCheck];

    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      colToCheck++;
    } else {
      break;
    }
  }

  let isWinningCombo = checkWinningCells(winningCells);
  if (isWinningCombo) return;

  /* Check Vertically */

  winningCells = [cell];
  rowToCheck = rowIndex - 1;
  colToCheck = colIndex;

  while (rowToCheck >= 0) {
    const cellToCheck = rows[rowToCheck][colToCheck];

    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      rowToCheck--;
    } else {
      break;
    }
  }

  rowToCheck = rowIndex + 1;

  while (rowToCheck <= 5) {
    const cellToCheck = rows[rowToCheck][colToCheck];

    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      rowToCheck++;
    } else {
      break;
    }
  }

  isWinningCombo = checkWinningCells(winningCells);
  if (isWinningCombo) return;

  /* Check diagonally right */

  winningCells = [cell];
  rowToCheck = rowIndex - 1;
  colToCheck = colIndex - 1;

  while (colToCheck >= 0 && rowToCheck >= 0) {
    const cellToCheck = rows[rowToCheck][colToCheck];
    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      rowToCheck--;
      colToCheck--;
    } else {
      break;
    }
  }

  rowToCheck = rowIndex + 1;
  colToCheck = colIndex + 1;

  while (colToCheck <= 6 && rowToCheck <= 5) {
    const cellToCheck = rows[rowToCheck][colToCheck];
    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      rowToCheck++;
      colToCheck++;
    } else {
      break;
    }
  }

  isWinningCombo = checkWinningCells(winningCells);
  if (isWinningCombo) return;

  /* Check diagonally left */

  winningCells = [cell];
  rowToCheck = rowIndex + 1;
  colToCheck = colIndex - 1;

  while (colToCheck >= 0 && rowToCheck <= 5) {
    const cellToCheck = rows[rowToCheck][colToCheck];

    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      rowToCheck++;
      colToCheck--;
    } else {
      break;
    }
  }

  rowToCheck = rowIndex - 1;
  colToCheck = colIndex + 1;

  while (colToCheck <= 6 && rowToCheck >= 0) {
    const cellToCheck = rows[rowToCheck][colToCheck];

    if (getColorOfCell(cellToCheck) === color) {
      winningCells.push(cellToCheck);
      rowToCheck--;
      colToCheck++;
    } else {
      break;
    }
  }

  isWinningCombo = checkWinningCells(winningCells);
  if (isWinningCombo) return;

  const rowsWithoutTop = rows.slice(0, 6);
  for (const row of rowsWithoutTop) {
    for (const cell of row) {
      const classList = getClassListArray(cell);
      if (!classList.includes("green") && !classList.includes("red")) {
        return;
      }
    }
  }

  gameIsLive = false;
  statusSpan.textContent = "Game is a tie!";
};

const handleCellMouseOver = (e) => {
  if (!gameIsLive) return;

  const cell = e.target;
  const [rowIndex, colIndex] = getCellLocation(cell);

  const topCell = topCells[colIndex];

  if (greenIsNext) {
    topCell.classList.add("green");
  } else {
    topCell.classList.add("red");
  }
};

const handleCellMouseOut = (e) => {
  const cell = e.target;
  const [rowIndex, colIndex] = getCellLocation(cell);

  clearColorFromTop(colIndex);
};

const handleCellClick = (e) => {
  if (!gameIsLive) return;

  const cell = e.target;
  const [rowIndex, colIndex] = getCellLocation(cell);

  const openCell = getFirstOpenCellForColumn(colIndex);

  if (!openCell) return;

  openCell.classList.add(greenIsNext ? "green" : "red");
  checkStatusOfGame(openCell);

  greenIsNext = !greenIsNext;
  clearColorFromTop(colIndex);

  if (gameIsLive) {
    const topCell = topCells[colIndex];
    topCell.classList.add(greenIsNext ? "green" : "red");
    playerTurn.textContent = `${
      greenIsNext ? firstPlayer : secondPlayer
    }'s turn`;
  }
};

for (const row of rows) {
  for (const cell of row) {
    cell.addEventListener("mouseover", handleCellMouseOver);
    cell.addEventListener("mouseout", handleCellMouseOut);
    cell.addEventListener("click", handleCellClick);
  }
}

resetButton.addEventListener("click", () => {
  for (const row of rows) {
    for (const cell of row) {
      cell.classList.remove("red");
      cell.classList.remove("green");
      cell.classList.remove("win");
    }
  }

  gameIsLive = true;
  greenIsNext = true;
  statusSpan.textContent = "";
  playerTurn.textContent = `${firstPlayer}'s turn`;
});