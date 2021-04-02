const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
resize();

window.addEventListener("resize", resize);

let mousePos = {
  x: 0,
  y: 0,
};

let color = "black";
let size = 8;

document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", mousePosition);
document.addEventListener("mouseenter", mousePosition);

function setColor(elem) {
  color = elem.dataset.color;
  size = 8;
}

function setSize(elem) {
  size = elem.dataset.size;
}

function erase(elem) {
  color = "#ffffff";
  size = 15;
}

function clearCanva(elem) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function mousePosition(e) {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
}

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function draw(e) {
  console.log(e);
  if (e.buttons !== 1) return;

  ctx.beginPath();
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.lineWidth = parseInt(size, 10);
  ctx.moveTo(mousePos.x, mousePos.y);
  mousePosition(e);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
}

download_img = function(el) {
  var imgData=ctx.getImageData(0,0,canvas.width,canvas.height);
var data=imgData.data;
for(var i=0;i<data.length;i+=4){
    if(data[i+3]<255){
        data[i]=255;
        data[i+1]=255;
        data[i+2]=255;
        data[i+3]=255;
    }
}
ctx.putImageData(imgData,0,0);
  var image = canvas.toDataURL("image/jpeg");
  el.href = image;
};
