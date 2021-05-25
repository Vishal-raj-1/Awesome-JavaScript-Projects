var player1 = prompt("Player One: Enter Your Name!");
var player1Color = 'rgb(239, 123, 141)';

var player2 = prompt("Player Two: Enter Your Name!!");
var player2Color = 'rgb(156, 225, 249)';

var game_on = true;
var table = $('table tr');

function reportWin(rowNum,colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}
// Change the color of a button
function changeColor(rowIndex,colIndex,color) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

// Report Back to current color of a button
function returnColor(rowIndex,colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

// Take in column index, returns the bottom row that is still white
function checkBottom(colIndex) {
  var colorReport = returnColor(5,colIndex);
  for (var row = 5; row > -1; row--) {
    colorReport = returnColor(row,colIndex);
    if (colorReport === 'rgb(255, 255, 255)') {
      return row
    }
  }
}

// Check to see if 4 inputs are of the same color or not
function colorMatchCheck(one,two,three,four){
  return (one===two && one===three && one===four && one !== 'rgb(255, 255, 255)' && one !== undefined);
}

// Horizontal Wins
function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

//Vertical Wins
function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col) ,returnColor(row+2,col), returnColor(row+3,col))) {
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

//Diagonal Wins
function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
        reportWin(row,col);
        return true;
      }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

//End
function gameEnd(winningPlayer) {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 7; row++) {
      $('h5').fadeOut('fast');
      $('h3').fadeOut('fast');
      $('table').fadeOut('fast');
      $('h2').text(winningPlayer+" has won! Refresh your browser to play again!").css("fontSize", "30px")
    }
  }
}

// Start with Player One
var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;

// Start with Player One
$('h5').text(player1+": it is your turn, please pick a column to drop your pink chip.");

$('.board button').on('click',function() {

// Recognize what column was chosen
  var col = $(this).closest("td").index();
// Get back bottom available row to change
  var bottomAvail = checkBottom(col);
// Drop the chip in that column at the bottomAvailable Row
  changeColor(bottomAvail,col,currentColor);
// win or a tie.
  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
    gameEnd(currentName);
  }

// continue, till noone wins
  currentPlayer = currentPlayer * -1 ;
// Re-Check who the current Player is.
  if (currentPlayer === 1) {
    currentName = player1;
    $('h5').text(currentName+": it is your turn, please pick a column to drop your pink chip.");
    currentColor = player1Color;
  }else {
    currentName = player2
    $('h5').text(currentName+": it is your turn, please pick a column to drop your blue chip.");
    currentColor = player2Color;
  }
})
