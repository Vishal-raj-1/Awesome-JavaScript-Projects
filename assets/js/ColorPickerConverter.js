// Random Picker
function randompickerbtn() {
    var colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    var color = '';
    for (let i=0; i<6; i++) {
      let randomNum = Math.floor(Math.random() * colorArr.length);
      color += colorArr[randomNum];
    }
    let colorChange = document.getElementById("randomPicker").style.backgroundColor = '#' + color;
    let valueChange = document.getElementById("randomValuePara").innerHTML = '#' + color;
}

// Range Selector
function RangeSelector() {
  var RrInp = document.getElementById("RrInput").value;
  var GrInp = document.getElementById("GrInput").value;
  var BrInp = document.getElementById("BrInput").value;

  rgbValue = "rgb(" + RrInp + "," + GrInp + "," + BrInp + ")";
  document.getElementById("range-color-box").innerText = rgbValue;
  document.getElementById("range-color-box").style.backgroundColor = rgbValue;
  if(RrInp < 80 && GrInp < 80 && BrInp < 80){
    document.getElementById("range-color-box").style.color = "white";
  } else {
    document.getElementById("range-color-box").style.color = "black";
  }
}

// Hex to RGB Converter Helper Func
String.prototype.convertToRGB = function(){
  var aRgbHex = this.match(/.{1,2}/g);
  var aRgb = [
      parseInt(aRgbHex[0], 16),
      parseInt(aRgbHex[1], 16),
      parseInt(aRgbHex[2], 16)
  ];
  return aRgb;
}

// Hex to RGB Converter
function hexConvbtn() {
  let HEXconvIp = document.getElementById("hexCInp").value;
  if(HEXconvIp.length == 6){
  let HEXconvOp = document.getElementById("hexCOut");
  let tempVal = HEXconvIp.convertToRGB();
  let finalVal = "rgb(" + tempVal + ")";
  HEXconvOp.innerText = finalVal; 
  document.getElementById("hexCInp").style.borderColor = "green"; 
} else {
  document.getElementById("hexCInp").style.borderColor = "red";
  let HEXconvOp = document.getElementById("hexCOut").innerText = "Invalid Input";
}
}

// RGB to Hex Converter
function rgbConvbtn() {
  let RCOnvIp = document.getElementById("RCInput").value;
  let GCOnvIp = document.getElementById("GCInput").value;
  let BCOnvIp = document.getElementById("BCInput").value;

  let r = Number(RCOnvIp).toString(16);
  let g = Number(GCOnvIp).toString(16);
  let b = Number(BCOnvIp).toString(16);

  if (r.length == 1) {
    r = 0 + r
  }
  if (g.length == 1) {
    g = 0 + g
  }if (b.length == 1) {
    b = 0 + b
  }
  document.getElementById("rgbCOut").innerText = "#" + r + g + b;
}