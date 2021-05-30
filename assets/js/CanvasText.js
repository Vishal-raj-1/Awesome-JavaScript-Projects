var text = document.querySelector("canvas").getAttribute("data-text");
var ctx = document.querySelector("canvas").getContext("2d"),
  dashLen = 220,
  dashOffset = dashLen,
  speed = 5,
  txt = text,
  x = 20,
  i = 0;

ctx.font = "120px Helvetica";
ctx.lineWidth = 2;
ctx.lineJoin = "round";
ctx.globalAlpha = 2 / 2;
ctx.strokeStyle = "#fff";
ctx.fillStyle = "transparent";

(function loop() {
  ctx.clearRect(x, 0, 60, 150);
  // create a long dash mask
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]);
  // reduce dash length
  dashOffset -= speed;
  // stroke letter
  ctx.strokeText(txt[i], x, 90);
  // animate
  if (dashOffset > 0) requestAnimationFrame(loop);
  else {
    // fill final letter
    ctx.fillText(txt[i], x, 90);
    // prep next char
    dashOffset = dashLen;
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
    // random y-delta
    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());
    // random rotation
    ctx.rotate(Math.random() * 0.005);
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();
