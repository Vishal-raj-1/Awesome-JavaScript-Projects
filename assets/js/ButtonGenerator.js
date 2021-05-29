document.addEventListener("DOMContentLoaded", function (event) {
  let btnText = document.getElementById("btn-text");
  let bgColor = document.getElementById("btn-bgColor");
  let txtColor = document.getElementById("btn-textColor");
  let txtTransform = document.getElementById("btn-textTransform");
  // Padding
  let tPad = document.getElementById("btn-tPad");
  let rPad = document.getElementById("btn-rPad");
  let bPad = document.getElementById("btn-bPad");
  let lPad = document.getElementById("btn-lPad");

  //Radius
  let tlRad = document.getElementById("btn-tlRad");
  let trRad = document.getElementById("btn-trRad");
  let blRad = document.getElementById("btn-blRad");
  let brRad = document.getElementById("btn-brRad");

  let btn = document.getElementById("btn");

  // Generate code button
  let generateCode = document.getElementById("generateCode");
  console.log(generateCode);

  let html = document.querySelector("html1");
  let css = document.querySelector("html2");

  //code
  let htmlCode = document.getElementById("html-code");
  let csCode = document.getElementById("css-code");

  let cssCode = "";
  let bColor = "";
  let tColor = "";
  let tTransform = "";
  let tPadding = "";
  let lPadding = "";
  let bPadding = "";
  let rPadding = "";
  let tLeftRadius = "";
  let tRightRadius = "";
  let bLeftRadius = "";
  let bRightRadius = "";
  let borderProp = "";
  let button = "";

  btnText.addEventListener("input", function () {
    btn.innerText = btnText.value;
    button = `<button>${btnText.value}</button>`;
  });

  bgColor.addEventListener("input", function () {
    bColor = bgColor.value;
    btn.style.backgroundColor = bgColor.value;
  });

  txtColor.addEventListener("input", function () {
    tColor = txtColor.value;
    btn.style.color = txtColor.value;
  });

  txtTransform.addEventListener("input", function () {
    console.log(tTransform.value);
    tTransform = txtTransform.value;
    btn.style.textTransform = txtTransform.value;
  });

  tPad.addEventListener("input", function () {
    tPadding = `${tPad.value}px`;
    btn.style.paddingTop = `${tPad.value}px`;
  });

  rPad.addEventListener("input", function () {
    rPadding = `${rPad.value}px`;
    btn.style.paddingRight = `${rPad.value}px`;
  });

  bPad.addEventListener("input", function () {
    bPadding = `${bPad.value}px`;
    btn.style.paddingBottom = `${bPad.value}px`;
  });

  lPad.addEventListener("input", function () {
    lPadding = `${lPad.value}px`;
    btn.style.paddingLeft = `${lPad.value}px`;
  });

  tlRad.addEventListener("input", function () {
    tLeftRadius = `${tlRad.value}px`;
    btn.style.borderTopLeftRadius = `${tlRad.value}px`;
  });

  trRad.addEventListener("input", function () {
    tRightRadius = `${trRad.value}px`;
    btn.style.borderTopRightRadius = `${trRad.value}px`;
  });

  blRad.addEventListener("input", function () {
    bLeftRadius = `${blRad.value}px`;
    btn.style.borderBottomLeftRadius = `${blRad.value}px`;
  });

  brRad.addEventListener("input", function () {
    bRightRadius = `${brRad.value}px`;
    btn.style.borderBottomRightRadius = `${brRad.value}px`;
  });

  const filterProps = (props, value) => {
    return value === "" ? "" : value === "px" ? "" : `${props}: ${value};\n`;
  };

  generateCode.addEventListener("click", function () {
    console.log("presses");
    cssCode =
      "background-color: " +
      bColor +
      ";\n" +
      "color: " +
      `${tColor !== "" ? tColor : "#000"};\n` +
      filterProps("text-transform", tTransform) +
      filterProps("padding-top", tPadding) +
      filterProps("padding-left", lPadding) +
      filterProps("padding-bottom", bPadding) +
      filterProps("padding-right", rPadding) +
      filterProps("border-top-left-radius", tLeftRadius) +
      filterProps("border-top-right-radius", tRightRadius) +
      filterProps("border-bottom-left-radius", bLeftRadius) +
      filterProps("border-bottom-right-radius", bRightRadius);

    cssCode = `button {${cssCode}}`;
    htmlCode.innerText = button;
    csCode.innerText = cssCode;
  });
});
