// Display
let display = document.getElementById("display");
// Buttons
// Numbers Row
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnClear = document.getElementById("btnClear");
// First row of letters
let btnQ = document.getElementById("btnQ");
let btnW = document.getElementById("btnW");
let btnE = document.getElementById("btnE");
let btnR = document.getElementById("btnR");
let btnT = document.getElementById("btnT");
let btnY = document.getElementById("btnY");
let btnU = document.getElementById("btnU");
let btnI = document.getElementById("btnI");
let btnO = document.getElementById("btnO");
let btnP = document.getElementById("btnP");
// Second row of letters
let btnA = document.getElementById("btnA");
let btnS = document.getElementById("btnS");
let btnD = document.getElementById("btnD");
let btnF = document.getElementById("btnF");
let btnG = document.getElementById("btnG");
let btnH = document.getElementById("btnH");
let btnJ = document.getElementById("btnJ");
let btnK = document.getElementById("btnK");
let btnL = document.getElementById("btnL");
let btnColon = document.getElementById("btnColon");
let btnQuote = document.getElementById("btnQuote");
// Third row of letter
let btnZ = document.getElementById("btnZ");
let btnX = document.getElementById("btnX");
let btnC = document.getElementById("btnC");
let btnV = document.getElementById("btnV");
let btnB = document.getElementById("btnB");
let btnN = document.getElementById("btnN");
let btnM = document.getElementById("btnM");
let btnComma = document.getElementById("btnComma");
let btnPeriod = document.getElementById("btnPeriod");
let btnSlash = document.getElementById("btnSlash");
// spacebar and Rturn Buttons

let btnSpace = document.getElementById("btnSpace");
let btnRtrn = document.getElementById("btnRtrn");
// Temp variables
let tempTxt = "";

// Functions
// Numbers
const btn1F = () => {
    display.innerHTML = tempTxt + "1";
    tempTxt = tempTxt + "1";
};
const btn2F = () => {
    display.innerHTML = tempTxt + "2";
    tempTxt = tempTxt + "2";
};
const btn3F = () => {
    display.innerHTML = tempTxt + "3";
    tempTxt = tempTxt + "3";
};
const btn4F = () => {
    display.innerHTML = tempTxt + "4";
    tempTxt = tempTxt + "4";
};
const btn5F = () => {
    display.innerHTML = tempTxt + "5";
    tempTxt = tempTxt + "5";
};
const btn6F = () => {
    display.innerHTML = tempTxt + "6";
    tempTxt = tempTxt + "6";
};
const btn7F = () => {
    display.innerHTML = tempTxt + "7";
    tempTxt = tempTxt + "7";
};
const btn8F = () => {
    display.innerHTML = tempTxt + "8";
    tempTxt = tempTxt + "8";
};
const btn9F = () => {
    display.innerHTML = tempTxt + "9";
    tempTxt = tempTxt + "9";
};
const btn0F = () => {
    display.innerHTML = tempTxt + "0";
    tempTxt = tempTxt + "0";
};
const btnClearF = () => {
    display.innerHTML = "";
    tempTxt = "";
};
// First row of letters
const btnQf = () => {
    display.innerHTML = tempTxt + "Q";
    tempTxt = tempTxt + "Q";
};
const btnWf = () => {
    display.innerHTML = tempTxt + "W";
    tempTxt = tempTxt + "W";
};
const btnEf = () => {
    display.innerHTML = tempTxt + "E";
    tempTxt = tempTxt + "E";
};
const btnRf = () => {
    display.innerHTML = tempTxt + "R";
    tempTxt = tempTxt + "R";
};
const btnTf = () => {
    display.innerHTML = tempTxt + "T";
    tempTxt = tempTxt + "T";
};
const btnYf = () => {
    display.innerHTML = tempTxt + "Y";
    tempTxt = tempTxt + "Y";
};
const btnUf = () => {
    display.innerHTML = tempTxt + "U";
    tempTxt = tempTxt + "U";
};
const btnIf = () => {
    display.innerHTML = tempTxt + "I";
    tempTxt = tempTxt + "I";
};
const btnOf = () => {
    display.innerHTML = tempTxt + "O";
    tempTxt = tempTxt + "O";
};
const btnPf = () => {
    display.innerHTML = tempTxt + "P";
    tempTxt = tempTxt + "P";
};
// Second row of letters
const btnAf = () => {
    display.innerHTML = tempTxt + "A";
    tempTxt = tempTxt + "A";
};
const btnSf = () => {
    display.innerHTML = tempTxt + "S";
    tempTxt = tempTxt + "S";
};
const btnDf = () => {
    display.innerHTML = tempTxt + "D";
    tempTxt = tempTxt + "D";
};
const btnFf = () => {
    display.innerHTML = tempTxt + "F";
    tempTxt = tempTxt + "F";
};
const btnGf = () => {
    display.innerHTML = tempTxt + "G";
    tempTxt = tempTxt + "G";
};
const btnHf = () => {
    display.innerHTML = tempTxt + "H";
    tempTxt = tempTxt + "H";
};
const btnJf = () => {
    display.innerHTML = tempTxt + "J";
    tempTxt = tempTxt + "J";
};
const btnKf = () => {
    display.innerHTML = tempTxt + "K";
    tempTxt = tempTxt + "K";
};
const btnLf = () => {
    display.innerHTML = tempTxt + "L";
    tempTxt = tempTxt + "L";
};
const btnColonF = () => {
    display.innerHTML = tempTxt + ";";
    tempTxt = tempTxt + ";";
};
const btnQuoteF = () => {
    display.innerHTML = tempTxt + '"';
    tempTxt = tempTxt + '"';
};
//Third row of letters
const btnZf = () => {
    display.innerHTML = tempTxt + "Z";
    tempTxt = tempTxt + "Z";
};
const btnXf = () => {
    display.innerHTML = tempTxt + "X";
    tempTxt = tempTxt + "X";
};
const btnCf = () => {
    display.innerHTML = tempTxt + "C";
    tempTxt = tempTxt + "C";
};
const btnVf = () => {
    display.innerHTML = tempTxt + "V";
    tempTxt = tempTxt + "V";
};
const btnBf = () => {
    display.innerHTML = tempTxt + "B";
    tempTxt = tempTxt + "B";
};
const btnNf = () => {
    display.innerHTML = tempTxt + "N";
    tempTxt = tempTxt + "N";
};
const btnMf = () => {
    display.innerHTML = tempTxt + "M";
    tempTxt = tempTxt + "M";
};
const btnCommaF = () => {
    display.innerHTML = tempTxt + ",";
    tempTxt = tempTxt + ",";
};
const btnPeriodF = () => {
    display.innerHTML = tempTxt + ".";
    tempTxt = tempTxt + ".";
};
const btnSlashF = () => {
    display.innerHTML = tempTxt + "/";
    tempTxt = tempTxt + "/";
};
const btnSpaceF = () => {
    display.innerHTML = tempTxt + "\n";
    tempTxt = tempTxt + "\n";
};
const btnRtrnF = () => {
    display.innerHTML = tempTxt + "</br>";
};
// OnClicks
// Numbers OnClicks
btn1.onclick = function () {
    btn1F();
};
btn2.onclick = function () {
    btn2F();
};
btn3.onclick = function () {
    btn3F();
};
btn4.onclick = function () {
    btn4F();
};
btn5.onclick = function () {
    btn5F();
};
btn6.onclick = function () {
    btn6F();
};
btn7.onclick = function () {
    btn7F();
};
btn8.onclick = function () {
    btn8F();
};
btn9.onclick = function () {
    btn9F();
};
btn0.onclick = function () {
    btn0F();
};
btnClear.onclick = function () {
    btnClearF();
};
// First row of letter
btnQ.onclick = function () {
    btnQf();
};
btnW.onclick = function () {
    btnWf();
};
btnE.onclick = function () {
    btnEf();
};
btnR.onclick = function () {
    btnRf();
};
btnT.onclick = function () {
    btnTf();
};
btnY.onclick = function () {
    btnYf();
};
btnU.onclick = function () {
    btnUf();
};
btnI.onclick = function () {
    btnIf();
};
btnO.onclick = function () {
    btnOf();
};
btnP.onclick = function () {
    btnPf();
};
// Second row of letters
btnA.onclick = function () {
    btnAf();
};
btnS.onclick = function () {
    btnSf();
};
btnD.onclick = function () {
    btnDf();
};
btnF.onclick = function () {
    btnFf();
};
btnG.onclick = function () {
    btnGf();
};
btnH.onclick = function () {
    btnHf();
};
btnJ.onclick = function () {
    btnJf();
};
btnK.onclick = function () {
    btnKf();
};
btnL.onclick = function () {
    btnLf();
};
btnColon.onclick = function () {
    btnColonF();
};
btnQuote.onclick = function () {
    btnQuoteF();
};
// Third row of letters
btnZ.onclick = function () {
    btnZf();
};
btnX.onclick = function () {
    btnXf();
};
btnC.onclick = function () {
    btnCf();
};
btnV.onclick = function () {
    btnVf();
};
btnB.onclick = function () {
    btnBf();
};
btnN.onclick = function () {
    btnNf();
};
btnM.onclick = function () {
    btnMf();
};
btnComma.onclick = function () {
    btnCommaF();
};
btnPeriod.onclick = function () {
    btnPeriodF();
};
btnSlash.onclick = function () {
    btnSlashF();
};
//  SpaceBar

btnSpace.onclick = function () {
    btnSpaceF();
};
btnRtrn.onclick = function () {
    btnRtrnF();
};
