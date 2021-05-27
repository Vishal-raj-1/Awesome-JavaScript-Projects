function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);
}

function draw() {
  strokeWeight(50);
  if (mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth - 5, windowHeight - 5);
}
