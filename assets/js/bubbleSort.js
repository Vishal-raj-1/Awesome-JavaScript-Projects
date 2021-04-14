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
    delay1 = 0;
    console.log(delay2);
    for (var i = 0; i < N - 1; i++) {
        for (var j = 0; j < N - i - 1; j++) {
            change(divs[j], ARR[j], "yellow"); //Color update

            if (ARR[j] > ARR[j + 1]) {
                change(divs[j], ARR[j], "red"); //Color update
                change(divs[j + 1], ARR[j + 1], "red"); //Color update

                var temp = ARR[j];
                ARR[j] = ARR[j + 1];
                ARR[j + 1] = temp;

                change(divs[j], ARR[j], "red"); //Height update
                change(divs[j + 1], ARR[j + 1], "red"); //Height update
            }
            change(divs[j], ARR[j], "#40E0D0"); //Color update
        }
        change(divs[j], ARR[j], "green"); //Color update
    }
    change(divs[0], ARR[0], "green"); //Color update
}
