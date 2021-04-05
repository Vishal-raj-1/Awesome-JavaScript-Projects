let canvas, ctx, w, h;
let grid, cols, rows;
let run = "false";
let fps = 6, spacing = 4, boxSize = 20;

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
    grid = make2Darray(rows, cols);

    //drawing or animating
    draw();

}

const draw = () => {
    //clearing canvas by creating grid
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#fff";
            ctx.fillStyle = "#262626";
            ctx.rect(j * boxSize, i * boxSize, boxSize - 1, boxSize - 1);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

        }
    }
}

// generic function to make 2d arrays
const make2Darray = (rows, cols) => {
    let arr = new Array(rows);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(cols);
    }
    return arr;
}

//event listeners
window.addEventListener("load", init);
window.addEventListener("resize", init);
