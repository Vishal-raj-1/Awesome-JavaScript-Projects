let _snowCanvas = function (obj) {
  var canvas = obj.el || document.getElementById("snowCanvas");
  if (!canvas) {
    console.log("please set the canvas element");
    return;
  }
  if (canvas.tagName.toLowerCase() !== "canvas") {
    console.log("please use this function on canvas element");
    return;
  }

  canvas.style.backgroundColor = obj.background || "black";
  var fillStyle = obj.snowColor || "#a6a6a6";

  if (
    !_check(
      _isColor,
      [canvas.style.backgroundColor, fillStyle],
      ["background color", "snow color"]
    )
  ) {
    return;
  }

  var ctx = canvas.getContext("2d");

  var maxSpeed = obj.maxSpeed || 3.5,
    minSpeed = obj.minSpeed || 0.3,
    count = obj.amount || 150,
    rMax = obj.rMax || 4,
    rMin = obj.rMin || 1,
    W,
    H;
  setHeightWidth();

  if (
    !_check(
      _isNumber,
      [maxSpeed, minSpeed, count, rMax, rMin, W, H],
      [
        "max speed 'maxSpeed'",
        "min speed 'minSpeed'",
        "amount",
        "max radius of snow 'rMax'",
        "min radius of snow 'rMin'",
        "width",
        "height"
      ]
    )
  ) {
    return;
  }

  function setHeightWidth() {
    W = obj.width || window.innerWidth;
    H = obj.height || window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  }

  window.onresize = setHeightWidth;

  var snowGroup = [];
  var i;
  for (i = 0; i < count; i++) {
    snowGroup.push(initialEverySnow());
  }

  function initialEverySnow() {
    return {
      x: Math.random() * W - rMax,
      y: Math.random() * H - rMax,
      r: Math.random() * (rMax - rMin) + rMin,
      s: Math.random() * (maxSpeed - minSpeed) + minSpeed,
      xChangeRate: Math.random() * 1.6 - 0.8
    };
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.beginPath();

    var p;
    for (var i = 0; i < snowGroup.length; i++) {
      p = snowGroup[i];
      ctx.fillStyle = fillStyle;
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
    }
    ctx.fill();
    update();
  }

  var delta = 0;
  function update() {
    //update position of every snow
    delta += 0.01;
    var p;
    for (var i = 0; i < snowGroup.length; i++) {
      p = snowGroup[i];
      p.y += p.s;
      p.x += Math.sin(delta + p.xChangeRate) * p.xChangeRate;
      if (p.x > W + p.r || p.y > H + p.r || p.x < -p.r) {
        snowGroup[i] = initialEverySnow();
        var randomStartPostion = Math.ceil(Math.random() * 3);
        switch (randomStartPostion) {
          case 1:
            snowGroup[i].x = Math.random() * W;
            snowGroup[i].y = -rMax;
            break;
          case 2:
            snowGroup[i].x = -rMax;
            snowGroup[i].y = Math.random() * H;
            break;
          case 3:
            snowGroup[i].x = W + rMax;
            snowGroup[i].y = Math.random() * H;
            break;
        }
      }
    }
  }
  setInterval(draw, 1000 / 60);
};

let _isColor = function (color) {
  var color2 = "";
  var el = document.createElement("i");
  el.style.background = "";
  el.style.background = color;
  color2 = el.style.background;
  if (color2.length === 0) {
    return false;
  }
  el.style.borderColor = "";
  return true;
};

let _check = (checkFunc, checkItemArr, warningStringArr) => {
  for (let i = 0; i < checkItemArr.length; i++) {
    if (!checkFunc(checkItemArr[i])) {
      console.log(
        "_snowCanvas: please set the right " + warningStringArr[i] + "."
      );
      return false;
    }
  }
  return true;
};

let _isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
