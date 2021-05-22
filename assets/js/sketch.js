function MAKE2DARRAY(column, rows) {
    let arr = new Array(column);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }
  
  let grid;
  let column;
  let rows;
  let resolution = 10;
  
  function setup() {
    createCanvas(1500,620);
    column = width / resolution;
    rows = height / resolution;
  
    grid = MAKE2DARRAY(column, rows);
    for (let i = 0; i < column; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = floor(random(2));
      }
    }
  }
  
  function draw() {
    background(236, 236, 236);
  
    for (let i = 0; i < column; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * resolution;
        let y = j * resolution;
        if (grid[i][j] == 1) {
          fill(247,136,136);
          stroke(144,204,244);
          rect(x, y, resolution - 1, resolution - 1);
        }
      }
    }
  
    let next = MAKE2DARRAY(column, rows);
  
    // Compute next based on grid
    for (let i = 0; i < column; i++) {
      for (let j = 0; j < rows; j++) {
        let state = grid[i][j];
        // Count live neighbors!
        let sum = 0;
        let neighbors = COUNTNEIGHBORS(grid, i, j);
  
        if (state == 0 && neighbors == 3) {
          next[i][j] = 1;
        } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0;
        } else {
          next[i][j] = state;
        }
      }
    }
  
    grid = next;
  }
  
  function COUNTNEIGHBORS(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + column) % column;
        let row = (y + j + rows) % rows;
        sum += grid[col][row];
      }
    }
    sum -= grid[x][y];
    return sum;
  }