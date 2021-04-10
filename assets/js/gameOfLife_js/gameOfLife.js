// import pre-made formations
import { formations } from "./formations.js";

// variables
let canvas, canvasBound, ctx, w, h;
let grid, cols, rows;
let animationState = "false";
let fps = 10, spacing = 4, boxSize = 16;
let cellActiveColor = "#38ef7d";
let baseColor = "#485563";
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
const startAnimation = () => {
    animationState = setInterval(runLoop, 1000 / fps);
}
const stopAnimation = () => {
    clearInterval(animationState);
    animationState = "false";
}

// control variables
let play, pause, info, bookmark, forward, setting, controlPanel;
let infoTab, settingTab, slider;

const toggleControls = (val = 0) => {
    val = (val == 0) ? "none" : "block";
    // invisible
    play.style.display = val
    info.style.display = val
    forward.style.display = val
    bookmark.style.display = val
    setting.style.display = val

    // visible
    let opp = (val == "none") ? "block" : "none";
    pause.style.display = opp

    // decreasing control panel opacity
    controlPanel = document.querySelector("#control-panel")
    if (val == "none") {
        controlPanel.style.opacity = "0.7"
    } else {
        controlPanel.style.opacity = "1"
    }
}
const closeOnExternalClick = (arr) => {
    let closeTab = (e) => {
        arr.forEach(elem => {
            if (!elem[0].contains(e.target) && e.target !== elem[1] && window.getComputedStyle(elem[0]).display == "flex") {
                elem[0].style.display = "none"
            }
        });
    }
    window.onkeydown = (e) => {
        closeTab(e)
    }
    window.onclick = (e) => {
        closeTab(e)
    }
}

// adding event listeners to control
window.onload = () => {
    // control buttons
    play = document.querySelector("#play");
    pause = document.querySelector("#pause");
    info = document.querySelector("#info");
    bookmark = document.querySelector("#bookmark");
    forward = document.querySelector("#forward");
    setting = document.querySelector("#setting");

    // tabs in control
    infoTab = document.querySelector("#game-info")
    settingTab = document.querySelectorAll(".setting-tab")[0]

    play.onclick = () => {
        startAnimation()
        toggleControls(0)
    }
    pause.onclick = () => {
        stopAnimation();
        toggleControls(1)
    }
    forward.onclick = () => {
        stopAnimation()
        toggleControls(1)
        runLoop();
    }

    // to bring tabs
    info.onclick = () => {
        if (window.getComputedStyle(infoTab).display == "none") {
            infoTab.style.display = "flex";
        } else {
            infoTab.style.display = "none";
        }
    }
    setting.onclick = () => {
        if (window.getComputedStyle(settingTab).display == "none") {
            settingTab.style.display = "flex";
        } else {
            settingTab.style.display = "none";
        }
    }

    // to close tabs on click outside them
    closeOnExternalClick([[infoTab, info], [settingTab, setting]]);

    // setting tab sliders
    // box size and speed
    slider = document.getElementsByClassName("slider");
    slider[0].addEventListener("input", () => {
        fps = slider[0].value;
    })
    slider[1].addEventListener("input", () => {
        boxSize = slider[1].value;
        init();
    })

    //To events for keypress
    window.addEventListener("keydown", (e) => {
        e.preventDefault();
        // console.log(e);

        // space for pause/play
        if (e.code == "Space") {
            if (animationState == "false") {
                play.onclick()
                // printAliveCellsArray();
            } else {
                pause.onclick()
            }
        }

        // forward
        if (e.code == "ArrowRight") {
            forward.onclick()
        }
    });

}