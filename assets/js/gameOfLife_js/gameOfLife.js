// import pre-made formations
import { formations } from "./formations.js";

// variables
let canvas, canvasBound, ctx, w, h;
let grid, cols, rows;
let animationState = "false";
let fps = 25, spacing = 4, boxSize = 15;
let cellActiveColor = "hsl(220,12%,80%)";
let baseColor = "hsl(220,15%,17%)";
let gridLine = "hsl(220, 30%,30%)";

const init = () => {
    //setting things up
    canvas = document.getElementById("canvas");

    ctx = canvas.getContext("2d");
    canvas.width = w = window.innerWidth;
    canvas.height = h = window.innerHeight;

    cols = Math.floor(w / boxSize) - spacing;
    rows = Math.floor(h / boxSize) - spacing;
    canvas.width = cols * boxSize;
    canvas.height = rows * boxSize;
    canvasBound = canvas.getBoundingClientRect();
    grid = make2dArray(rows, cols);

    // assign initial formation
    assignFormation(formations["gosperGlider"].cells);

    //drawing or animating
    draw();
}
const assignFormation = (arr) => {
    grid = make2dArray(rows, cols);
    for (let i = 0; i < arr.length; i++) {
        grid[arr[i][0]][arr[i][1]] = 1;
    }
}
const draw = () => {
    //clearing canvas by creating grid
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {
                ctx.fillStyle = cellActiveColor;
            } else {
                ctx.fillStyle = baseColor;
            }
            ctx.beginPath();
            ctx.lineWidth = 0.7;
            ctx.strokeStyle = gridLine;
            ctx.rect(j * boxSize, i * boxSize, boxSize - 1, boxSize - 1);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }
    }
}
const update = () => {
    //A new grid to store next location of live cells
    let newGrid = make2dArray(rows, cols);

    //conditions i.e actual conway's game of life rules
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let count = neighbors(grid, i, j);

            if (count == 3) {
                newGrid[i][j] = 1;
            } else if (count < 2 || count > 3) {
                newGrid[i][j] = 0;
            } else {
                newGrid[i][j] = grid[i][j];
            }
        }
    }

    //assigning the newly created grid to the old grid to update the environment
    grid = newGrid;
}

// function to check neighboring grid cells
const neighbors = (arr, x, y) => {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let posX = x + i;
            let posY = y + j;
            if (posX > -1 && posX < rows && posY > -1 && posY < cols) {
                if (arr[posX][posY] == 1) {
                    sum++;
                }
            }
        }
    }

    if (arr[x][y] == 1) {
        return sum - 1;
    } else {
        return sum;
    }
}

// loop to run and update the grid
const runLoop = () => {
    draw();
    update();
}

// generic function to make 2d arrays
const make2dArray = (rows, cols) => {
    let arr = new Array(rows);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(cols);
    }
    return arr;
}

//event listeners
window.addEventListener("load", () => {
    init();
    makeCellClickable();
});
window.addEventListener("resize", () => {
    clearInterval(animationState);
    animationState = "false";
    console.log("Restarting...");
    init();
});

//giving each cell the ability to live or die as the click
const makeCellClickable = () => {
    canvas = document.getElementById("canvas");
    canvas.addEventListener("click", (e) => {
        // console.log(e);
        e.preventDefault();
        let pX = Math.floor((e.clientX - canvasBound.x) / boxSize);
        let pY = Math.floor((e.clientY - canvasBound.y) / boxSize);

        if (grid[pY][pX] != 1) {
            grid[pY][pX] = 1;
        } else {
            grid[pY][pX] = null;
        }

        // draw the newly formed cell
        draw();
        // console.table(grid);
        // console.log("[" + pY + "," + pX + "]");
    });
}

const printAliveCellsArray = () => {
    let res = "[";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {
                res += `[${i},${j}],`;
            }
        }
    }
    res += "]"
    console.log(res);
}

//To start and pause
window.addEventListener("keydown", (e) => {
    e.preventDefault();
    // console.log(e);
    if (e.code == "Space") {
        if (animationState == "false") {
            animationState = setInterval(runLoop, 1000 / fps);
            console.log("Starting...");
            printAliveCellsArray();
        } else {
            clearInterval(animationState);
            animationState = "false";
            console.log("Game stopped");
        }
    }
});