/* the supposed line structure for our purpose

From :
           ___________________
           A                 B
     
To :
                    E
                    /\
                   /  \
           _______/    \_______
          A      C     D     B
   
*/


//the onclick function to make it deeper by every click
var D_D = 0;

window.onclick = function () {
    if (D_D < 5) { D_D++; init(); }
}
window.onload = init();

//Main function
function init() {

    //Some basic canvas work
    var canvas = document.querySelector('canvas');
    canvas.height = 260;
    canvas.width = 280;


    //To Draw
    var context = canvas.getContext('2d');

    fractal([20, 80], [260, 80], D_D); fractal([140, 1.732 * 140], [20, 80], D_D); fractal([260, 80], [140, 1.7132 * 140], D_D);

}

function fractal(A, B, depth) {
    if (depth < 0) { return null; }

    var C = divide(add(multiply(A, 2), B), 3);
    var D = divide(add(multiply(B, 2), A), 3);
    var mid = divide(add(A, B), 2);

    var V1 = divide(minus(mid, A), length(mid, A));
    var V2 = [V1[1], -V1[0]];

    var E = add(multiply(V2, (Math.sqrt(3) / 6) * length(A, B)), mid); DrawLine(A, B, "white");

    if (depth != 0) {
        for (var i = 0; i < 10; i++) { DrawLine(C, D, "black"); }

    }

    //recursion for every part of line
    fractal(A, C, depth - 1);
    fractal(C, E, depth - 1);
    fractal(E, D, depth - 1);
    fractal(D, B, depth - 1);

}

//to actually draw lines    
function DrawLine(a, b, c) {
    var canvas = document.querySelector('canvas');
    var context = canvas.getContext('2d');
    context.beginPath();
    context.strokeStyle = c;
    context.moveTo(a[0], a[1]);
    context.lineTo(b[0], b[1]);
    context.stroke();
    context.closePath();
}

//Some math functions 
function multiply(v, num) { return [v[0] * num, v[1] * num]; }

function divide(v, num) { return [v[0] / num, v[1] / num]; }

function add(a, b) { return [a[0] + b[0], a[1] + b[1]]; }

function minus(a, b) { return [a[0] - b[0], a[1] - b[1]]; }

function length(a, b) { return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)); }

