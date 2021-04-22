var ARR = [];
var divs = [];
var N = 50;
var delay1 = 0; //milliseconds
var delay2 = 100;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

window.onload = genArray();

function changeN() {
    N = document.getElementById("values").value;
    genArray();
}

function changeSpeed() {
    var factor = document.getElementById("speed").value;
    delay2 = factor*100;
    genArray();
}

function change(d, h, c) {
    setTimeout(function () {
        d.style = ` margin:0% 0.2%;  width: 60px; height:${h}px; background-color:${c};`;
    }, (delay1 += delay2));
}

function genArray() {
    cont.innerHTML = "";

    for (var i = 0; i < N; i++) {
        ARR[i] = Math.floor(Math.random() * 100 + 1);
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        divs[i].style = `margin:0% 0.2%;  width:60px; height:${ARR[i]}px; background-color: #40E0D0;`;
    }
}

function sorting() {
    genArray();
    delay1 = 0;
    bubbleSort();
}

function bubbleSort() {
    // left the algorithm implementation for the other assignee
}