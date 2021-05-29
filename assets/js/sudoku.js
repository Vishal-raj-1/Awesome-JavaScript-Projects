(function hideVars() {
  
  var settings = document.getElementsByClassName('settings')[0],
    minimize = document.getElementById('min'),
    difficultyLevelRadios = document.getElementsByTagName('input'),
    difficultyLevel;
  
  //difficultu settings
  (function() {
    function setLevel(el, level) {
      el.onclick = function() {
        if (el.checked) {
          difficultyLevel = level;
        }
      };
    }
    setLevel(difficultyLevelRadios[0], 4);
    setLevel(difficultyLevelRadios[1], 3);
    setLevel(difficultyLevelRadios[2], 2);
  })();

  //display and restart
  (function() {
    var desktop = difficultyLevelRadios[3],
      mobile = difficultyLevelRadios[4],
      desktopThings = document.getElementsByClassName('desktop'),
      mobileThings,
      makeSure = document.getElementById('makeSure'),
      restartLabel = document.getElementById('restartLabel');
    desktop.onclick = function() {
      if (desktop.checked) {
        console.log('desktop');
        for (var i = 0; i < desktopThings.length; i++) {
          desktopThings[i].style.display = 'block';
        }
      };
    };
    mobile.onclick = function() {
      if (mobile.checked) {
        console.log('mobile');
        for (var i = 0; i < desktopThings.length; i++) {
          desktopThings[i].style.display = 'none';
        }
      };
    };
    makeSure.onclick = function() {
      if (makeSure.checked) {
        restartLabel.style.color = '#ffff00';
      } else {
        restartLabel.style.color = 'orange';
      }
    }
  })();
  minimize.onclick = function() {
    if (minimize.classList.contains('minimized')) {
      settings.style.top = '0'
      minimize.innerHTML = 'HIDE'
    } else {
      settings.style.top = (-(settings.getBoundingClientRect().height) + 38) + 'px';
      minimize.innerHTML = 'MENU';
    }
    minimize.classList.toggle('minimized')
  };

  var board;
  var startNew = document.getElementsByClassName('btn')[1],
    checkBtn = document.getElementsByClassName('btn')[0];

  (function() {
    fillTheBoarWithAValidSudoku();
  }());

  startNew.onclick = function() {
    if (document.getElementById('makeSure').checked) { 
      var makeSure = window.confirm('Are you sure you\'d like to restart?');
      if (!makeSure) {
       return
      }
    }
    document.getElementsByTagName('h1')[0].innerHTML = "Sudoku";
    fillTheBoarWithAValidSudoku();
  }
  checkBtn.onclick = function() {
    var tmOut = 1500;
    if (checkBoard(viruateBoardBasedOnUI(board))) {
      tmOut = 600;
      document.body.style.border = '20px solid red';
      document.getElementsByTagName('h1')[0].style.color = 'red';
    } else {
      document.body.style.border = '20px solid green';
      document.getElementsByTagName('h1')[0].style.color = 'green';
      checkBoardForFinalWin();
    }
    window.setTimeout(function() {
      document.body.style.border = 'none';
      document.getElementsByTagName('h1')[0].style.color = '#497696';
    }, tmOut);
  }

  function fillTheBoarWithAValidSudoku() {
    var success;
    while (!(success = initGame())) {
      initGame();
    }
  }

  function initGame() {
    startNew.style.color = 'red'
    document.getElementsByTagName('h1')[0].innerText = 'Sudoku';
    document.getElementsByTagName('h1')[0].style.color = '#497696';
    board = initSudokuBoard();
    var success = board.fillAttempt(board);
    board.eraseMost(difficultyLevel);
    initiateOrResetDragDrop();
    board.popDom();
    return success;
  }

  function initSudokuBoard() {
    var board = new Sudoku;
    initX(board.board);
    initY(board.board);
    initBoxes(board.board);
    board.connectDom();
    afterResize(); //makes the height and width of the boxes the same
    board.print();
    return board;
  }

  //==================================
  ////////////////////////////////////////////////////////////////////////
  function Sudoku() {
    var board = [],
      that = this;
    (function() {
      function Pos(origPos) {
        this.x;
        this.y;
        this.availableNums = shuffleArr([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        this.origPos = origPos;
        this.boxId = '';
        this.val = ' ';
        this.dom;
        this.pruneNums = pruneNums;
      }
      for (var i = 0; i < 81; i++) {
        board[i] = new Pos(i);
      };
    }());

    this.xLines = initX(board);
    this.yLines = initY(board);
    this.boxes = initBoxes(board);
    this.board = board;

    this.clearBoard = function() {
      for (var i = 0; i < that.board.length; i++) {
        that.board[i].val = ' ';
      };
    };

    this.fillAttempt = createRndmSudoku;

    this.domSingle = function(num, pos) {
      that.board[pos].val = num;
      that.board[pos].dom.innerText = num;
    };
    this.connectDom = function() {
      var sudBoard = document.getElementById('main'),
        boxes = sudBoard.getElementsByTagName('table'),
        domBoxes = [],
        cells;

      for (var i = 0; i < 9; i++) {
        cells = boxes[i].getElementsByTagName('td');
        domBoxes.push([]);
        for (var j = 0; j < 9; j++) {
          domBoxes[i].push(cells[j]);
          that.boxes[i][j].dom = domBoxes[i][j];
          that.boxes[i][j].dom.innerText = ' ';
        };
      };
    };

    this.eraseMost = function(level) {
      var boardSpot;
      level = level || 3;

      for (var i = 0; i < 81; i++) {
        boardSpot = that.board[i];
        //resettng from previous round
        if (boardSpot.dom.classList.contains('noDrop')) {
          boardSpot.dom.classList.remove('noDrop');
          boardSpot.dom.style.color = 'darkred';
          //boardSpot.dom.style.fontSize = 'initial';
        };
        if ((Math.floor(Math.random() * 10) + 1) > level) {
          boardSpot.val = ' ';
          //will need a better place in code for this iffy
          (function dblClkErase(j) {
            boardSpot.dom.addEventListener('dblclick', function() {
              that.board[j].dom.innerHTML = ' ';
            });
          })(i);
        } else {
          boardSpot.dom.style.color = 'black';
          //boardSpot.dom.style.fontSize = '1.2em'
          boardSpot.dom.classList.add('noDrop');
        }
      };
    }

    this.print = function() {
      console.log('\n------------------------------------------------------');
      that.xLines.forEach(function(each) {
        var str = '';
        each.forEach(function(e) {
          if ((e.x == 3 || e.x == 6) && e.y == 8) {
            console.log(' ')
          };
          str += e.val + '   ';
          if ((e.y + 1) % 3 == 0) {
            str += ' '
          };
        });
        console.log(str);
      });
      console.log('\n');
    };
    this.popDom = function() {
      for (var i = 0; i < 81; i++) {
        that.board[i].dom.innerHTML = that.board[i].val;
      };
    };
  } // end Sudoku
  //////////////////////////////////////////////////////////////

  //BOARD SPLITTER FUNCTIONS
  function initX(board) {
    var xLines = [];
    for (var i = 0; i < 9; i++) {
      xLines.push([]);
      for (var j = 0; j < 9; j++) {
        xLines[i].push(board[j + i * 9]);
        board[j + i * 9].x = i;
        board[j + i * 9].y = j;
      }
    };
    return xLines;
  }

  function initY(board) {
    var yLines = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ]; //[]*9
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        yLines[j].push(board[j + i * 9])
      }
    };
    return yLines;
  }

  function initBoxes(board) {
    var trio1,
      trio2,
      boxes = [];

    for (var i = 0; i < 9; i++) {
      boxes.push([]);
    }

    for (i = 0; i < 9; i++) {
      if (i < 3) {
        trio1 = 0;
      } else if (i < 6) {
        trio1 = 3;
      } else {
        trio1 = 6;
      }
      for (var j = 0; j < 9; j++) {
        if (j < 3) {
          trio2 = 0;
        } else if (j < 6) {
          trio2 = 1;
        } else {
          trio2 = 2;
        }
        board[j + 9 * i].boxId = trio1 + trio2;
        boxes[trio1 + trio2].push(board[j + 9 * i]);
      }
    }
    return boxes;
  }
  //====================================

  //BOARD CHECKER FUNCTIONS
  function checkLineForDbl(line) {
    return line.some(function(e, i) {
      if (e.val == ' ') {
        return false
      };
      return line.some(function(v, j) {
        return (e.val == v.val && i !== j)
      });
    });
  }

  function checkBoard(board) {
    return board.xLines.some(function(xLine) {
      return checkLineForDbl(xLine);
    }) || board.yLines.some(function(yLine) {
      return checkLineForDbl(yLine);
    }) || board.boxes.some(function(box) {
      return checkLineForDbl(box);
    });
  }

  //====================================

  //random helper funcs

  function shuffleArr(arr) {
    var newArr = [],
      lngth = arr.length,
      rnd;
    for (var i = 0; i < lngth; i++) {
      rnd = Math.floor(Math.random() * arr.length)
      newArr.push(arr.splice(rnd, 1)[0])
    };
    return newArr;
  }

  //===================================

  function possibleNums(line) {
    var nums = [];
    for (var i = 1; i < 10; i++) {
      test = line.every(function(e) {
        return (e.val != i)
      });
      if (test) {
        nums.push(i)
      };
    };
    return nums;
  }

  //where the magic happens
  function createRndmSudoku(board) {
    function fillLine(line, nums) {
      nums ? nums = shuffleArr(nums) : nums = shuffleArr([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      for (var i = 0; i < line.length; i++) {
        line[i].val = nums[i];
      };
    } //end fillLine

    var time = new Date().getTime() / 1000; //to see how long it takes to generate the board :)
    var test;
    var safetyCount = 0;

    //first 2 of each box are random, third a bit more calculated
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 100; j++) {
        //if it's the 3rd line of the boxes - there are alot less options (3 possible numebr for each box)
        if (i == 2 || i == 5) {
          fillLine([board.xLines[i][0], board.xLines[i][1], board.xLines[i][2]], possibleNums(board.boxes[board.xLines[i][0].boxId]));
          fillLine([board.xLines[i][3], board.xLines[i][4], board.xLines[i][5]], possibleNums(board.boxes[board.xLines[i][3].boxId]));
          fillLine([board.xLines[i][6], board.xLines[i][7], board.xLines[i][8]], possibleNums(board.boxes[board.xLines[i][6].boxId]));
        } else if (i > 5) { //once we have filled most of the board we can take the y-axis into account and eliminate many numbers
          for (var v = 0; v < board.xLines[i].length; v++) {
            board.xLines[i][v].pruneNums(board, board.xLines[i][v].origPos);
            if (board.xLines[i][v].availableNums.length == 0) {
              board.xLines[i].forEach(function(ech) {
                ech.val = ' '
              });
              i--;
              break
            }
            fillLine([board.xLines[i][v]], board.xLines[i][v].availableNums);
          };
        } else { //just brute force it//
          fillLine(board.xLines[i]);
        }
        //check the board
        if (!checkBoard(board)) { // if the line is solved then break the inner for loop
          board.print();
          console.log(i + 1 + ' out of 9');
          break
        };
        if (j == 99 && checkBoard(board)) { //if it fails try the line again
          i--;
          //break; (loop ends anyways so we don't need to break)
        };
      };
      safetyCount++; //some combos are impossible and we will restart the whole thing
      if (safetyCount > 100) {
        console.log('mission failed :(');
        document.getElementsByTagName('h1')[0].innerText = 'Error, please try again';
        document.getElementsByTagName('h1')[0].style.color = 'red';
        break;
      };
    };

    //final line is forced by previous numbers- faster than randomely blasting it
    for (var i = 0; i < 9; i++) {
      for (var j = 1; j < 10; j++) {
        test = board.yLines[i].every(function(e) {
          return (e.val != j)
        });
        if (test) {
          board.yLines[i][8].val = String(j)
        };
      };
    };

    board.print();
    console.log((new Date().getTime() / 1000 - time) + ' seconds');
    startNew.style.color = 'black';
    return !checkBoard(board);
  }

  //==================================

  //returns all possible nums for a given spot on the board
  function pruneNums(board, origPos) {
    board.board[origPos].availableNums = shuffleArr(possibleNums(board.yLines[board.board[origPos].y].concat(board.xLines[board.board[origPos].x], board.boxes[board.board[origPos].boxId])));
  }

  //create virtual board based on dom
  function viruateBoardBasedOnUI(board) {
    currentDomBoard = new Sudoku();

    currentDomBoard.board = Object.create(board.board);
    currentDomBoard.xLines = Object.create(board.xLines);
    currentDomBoard.yLines = Object.create(board.yLines);
    currentDomBoard.boxes = Object.create(board.boxes);

    for (var i = 0; i < 81; i++) {
      currentDomBoard.board[i].val = currentDomBoard.board[i].dom.innerHTML;
    }

    return currentDomBoard;
  }

  function checkBoardForFinalWin() {
    //weed out non wins
    for (var i = 0; i < 81; i++) {
      if (board.board[i].val == ' ') {
        return
      };
    }

    function rndRGB() {
      return Math.floor(Math.random() * 255);
    }

    function yayIWon() {
      document.body.style.backgroundColor = "rgb(" + rndRGB() + "," + rndRGB() + "," + rndRGB() + ")";
    }

    document.getElementsByTagName('h1')[0].innerHTML = "CONGRATULATIONS!!! You Win!!!"

    var pleaseStop = window.setInterval(yayIWon, 500);
    window.setTimeout(function() {
      clearInterval(pleaseStop);
      document.body.style.backgroundColor = "#e5ecf3";
    }, 10000);
  }

  //=====================

  //Lets allow for the dragging and dropping!!
  function initiateOrResetDragDrop() {
    var orig = document.getElementsByClassName('orig'),
      target = document.getElementsByClassName('target');

    for (var i = 0; i < orig.length; i++) {
      (function(j) {

        orig[j].addEventListener('dragstart', function(e) {
          e.dataTransfer.setData('text', orig[j].firstElementChild.innerHTML)
        });

      })(i);
    }
    for (var i = 0; i < target.length; i++) {
      (function(j) {

        target[j].addEventListener('dragstart', function(e) {
          e.dataTransfer.setData('text', target[j].innerHTML)
        });

      })(i);
    }

    //and some color while we drag (and drop)

    for (var i = 0; i < target.length; i++) {
      (function(j) {

        target[j].addEventListener('dragenter', function(e) {
          e.preventDefault();
        });

        target[j].addEventListener('dragover', function(e) {
          e.preventDefault();
          if (target[j].classList.contains('noDrop')) {
            return
          };
          target[j].style.backgroundColor = 'lightgreen';

        });
        target[j].addEventListener('dragleave', function(e) {
          e.preventDefault();
          if (target[j].classList.contains('noDrop')) {
            return
          };
          target[j].style.backgroundColor = '#e5ecf3';
        });

        target[j].addEventListener('drop', function(e) {
          e.preventDefault();
          if (target[j].classList.contains('noDrop')) {
            return
          };
          target[j].innerHTML = e.dataTransfer.getData('text');
          target[j].style.backgroundColor = 'steelblue';
          window.setTimeout(function() {
            target[j].style.backgroundColor = '#e5ecf3';
          }, 1200);
        });

      })(i);
    }

  }

  //Style and optimizations

  function afterResize() {
    var mainTable = document.getElementById('main'),
      gbcr = mainTable.getBoundingClientRect(),
      pageBody = document.body.getBoundingClientRect().height;
    // mainTable.style.height = pageBody / 1.2 + 'px';
    
    if (gbcr.height >= pageBody) {mainTable.style.height = gbcr.height / 2 + 'px'}
    
    if (gbcr.width > gbcr.height) {
      for (var i = 0; i < 81; i++) {
        mainTable.style.width = gbcr.height + 'px';
      }
    } else {
      for (var i = 0; i < 81; i++) {
        mainTable.style.height = gbcr.width + 'px';
      }
    }
  }

  window.onresize = function() {
    afterResize()
  }

  //keypad for boxes
  function addKeypadFunctionality() {
    //if no keypad return
    for (var i = 0; i < 81; i++) {
      (function(j) {
        var domSpot = board.board[j].dom,
          eraseEvent = false;

        domSpot.addEventListener('touchstart', function() {
          if (domSpot.classList.contains('noDrop')) {
            return
          }
          var stillPressed = true;
          domSpot.addEventListener('touchend', function() {
            stillPressed = false;
          });
          window.setTimeout(function() {
            if (stillPressed) {
              domSpot.innerHTML = ' ';
              eraseEvent = true;
            }
          }, 700);
        });

        domSpot.addEventListener('click', function() {
          if (domSpot.classList.contains('noDrop') || document.getElementsByClassName('keypad').length > 1 || eraseEvent) {
            eraseEvent = false;
            return
          };
          var spotCoor = domSpot.getBoundingClientRect();
          var keypad = document.getElementsByClassName('keypad')[0].cloneNode(true);
          var keypadCoor = document.getElementsByClassName('keypad')[0].getBoundingClientRect();
          var keys;
          var pX, pY;
          
          document.body.appendChild(keypad);

          keypad.style.visibility = 'visible';
          pY = (spotCoor.top - keypadCoor.height / 2 + spotCoor.height / 2) + document.body.scrollTop;
          // if (pY > document.body.getBoundingClientRect().height) {pY = document.body.getBoundingClientRect().height - keypadCoor.height}
          pX = (spotCoor.left - keypadCoor.width / 2 + spotCoor.width / 2) + document.body.scrollLeft;
          keypad.style.top = pY + 'px';
          keypad.style.left = pX + 'px';
         
          keys = keypad.getElementsByTagName('div');//needs to be assigned here rather than at var declaration or breaks in ie
          for (var v = 0; v < keys.length; v++) {
            
            (function(x) {
              keys[x].addEventListener('click', function() {
                if (!keys[x].classList.contains('close')) {
                  domSpot.innerHTML = keys[x].innerHTML;
                  keyboardInputPosition = j;
                }
                keypad.parentNode.removeChild(keypad);
              });
            })(v);
          };
        
          keyboardInputPosition = j;
        });
      })(i);
    }
  }
  addKeypadFunctionality();

  //add keyboard functionality
  var keyboardInputPosition = 0;
  function changeKeyboardPosition (direction) {
    var kip = keyboardInputPosition;
    if (!direction) {return }
    
    board.board[kip].dom.style.backgroundColor = '#e5ecf3';
    function returnNextPos(direction){
    //left
    if (direction == 37) {
      if (board.board[kip].y == 0 && board.board[kip].x == 0) {
        kip = 80;  
      } else {
       kip--; 
      }
    };
    //right
    if (direction == 39) {
     if (board.board[kip].y == 8 && board.board[kip].x == 8) {
        kip = 0;  
     }else{
       kip++;
     }
    };
    //up
    if (direction == 38) {
      if (board.board[kip].x == 0) {
        if (board.board[kip].y == 0) {
          kip = 80;
        } else {
          kip += 71
        }
      } else {
        kip -= 9;
      }
    };
    //down
    if (direction == 40) {
      if (board.board[kip].x == 8) {
        if (board.board[kip].y == 8) {
          kip = 0;
        } else {
          kip -= 71
        }
      } else {
        kip += 9;
      }
    };
    }
    returnNextPos(direction)
    while (board.board[kip].dom.classList.contains('noDrop')) {
      returnNextPos(direction);
    }
    
    board.board[kip].dom.style.backgroundColor = 'white';
    keyboardInputPosition = kip;
    window.setTimeout(function() {
       board.board[kip].dom.style.backgroundColor = '#e5ecf3';
    }, 1500);
  }
  document.addEventListener('keydown',function(e){
	  var temp = e.keyCode ? e.keyCode : (e.charCode ? e.charCode : (e.which ? e.which : false));
	  temp = temp == 37 ? temp : (temp == 38 ? temp : (temp == 39 ? temp : (temp == 40 ? temp : false) ));
	 
    if (temp) {e.preventDefault() }
	  changeKeyboardPosition(temp);
	});
  
  document.addEventListener('keypress', function(e) {
    var temp = e.keyCode ? e.keyCode : (e.charCode ? e.charCode : (e.which ? e.which : false));
    if (temp < 49 || temp > 57) {return }
    board.board[keyboardInputPosition].dom.innerHTML = temp - 48;
  });
  
  return console.log('No Cheating..');
})();