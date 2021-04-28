//select the elememts from page

const canvas = document.querySelector("#Etch-Sketch");
const ctx = canvas.getContext("2d");
const shakeBtn = document.querySelector(".shakes");
const MOVE_AMOUNT = 10;
//set up canvas for drawing

ctx.lineJoin = "round"; //round corner when two lines meet
ctx.lineCap = "round"; //also for smooth edges
ctx.lineWidth = 20; //line width

// const width = canvas.width; //width of the canvas
// const height = canvas.height; //height of canvas

//when we use the same var name as that of the property name then we can declare it by:
const { width, height } = canvas;

let w = Math.floor(Math.random() * width);
let h = Math.floor(Math.random() * height);

ctx.beginPath(); //start the drwaing
ctx.moveTo(w, h);
ctx.lineTo(w, h);
ctx.stroke(); //to draw at the coordinate
let color = 0;
//write a draw function
function draw({ key }) {
  console.log(key);
  //begin path
  ctx.beginPath();
  ctx.moveTo(w, h);
  //move the value depending on what user did
  switch (key) {
    case "ArrowUp":
      h = h - MOVE_AMOUNT;
      break;
    case "ArrowDown":
      h = h + MOVE_AMOUNT;
      break;
    case "ArrowLeft":
      w = w - MOVE_AMOUNT;
      break;
    case "ArrowRight":
      w = w + MOVE_AMOUNT;
      break;
  }

  ctx.lineTo(w, h);
  color = color + Math.random() * 10;
  ctx.strokeStyle = `hsl(${color},100%,50%)`;
  ctx.stroke();
}
//handler for keys
function handleKeys(e) {
  if (e.key.includes("Arrow")) {
    draw({ key: e.key });
    //if they key name is arrowup or arrow down or arrowleft or arrowright
  }
}
//shake and clear function
function clearcanvas() {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height);
  ctx.moveTo(w, h);
  ctx.lineTo(w, h);
  ctx.stroke(); //to draw at the coordinate
  canvas.addEventListener(
    "animationend",
    () => {
      canvas.classList.remove("shake");
    },
    { once: true } //this will add only one eventlistner
  );
}

//listen for arrow keys
window.addEventListener("keydown", handleKeys); //keydown means when key is pressed
shakeBtn.addEventListener("click", clearcanvas);
