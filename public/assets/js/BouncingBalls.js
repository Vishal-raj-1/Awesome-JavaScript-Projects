// Javascript project using Math object

const canvas = document.getElementById("canvas");

// getContext function is used to use the api having all the functions used to draw something on the canvas.
const c = canvas.getContext("2d");

// tx is the total width of the window + vertical scrollbar width if any.
let tx = window.innerWidth;

// ty is the total height of the window + horizontal scrollbar width if any.
let ty = window.innerHeight;

canvas.width = tx; // canvas width.
canvas.height = ty; // canvas height.

let mousex = 0;
let mousey = 0;

addEventListener("mousemove", function () {
    // clientX gives the x coordinate of the mouse pointer when a mouse event is triggered.
    mousex = event.clientX;

    // clientY gives the y coordinate of the mouse pointer when a mouse event is triggered.
    mousey = event.clientY;
});


let grav = 0.99;

// strokewidth is used to set the border width of a shape.
c.strokeWidth = 5;

// function to get random colors to fill in our balls.
function randomColor() {
    return (
        "rgba(" +
        Math.round(Math.random() * 250) +
        "," +
        Math.round(Math.random() * 250) +
        "," +
        Math.round(Math.random() * 250) +
        "," +
        Math.ceil(Math.random() * 10) / 10 +
        ")"
    );
}

// Funtion to make our balls(to set each and every property used to draw a ball)
function Ball() {
    this.color = randomColor();

    // to make circle of radius ranging from 14mm to 34mm
    this.radius = Math.random() * 20 + 14;
    this.startradius = this.radius;
    this.x = Math.random() * (tx - this.radius * 2) + this.radius;
    this.y = Math.random() * (ty - this.radius);
    this.dy = Math.random() * 2;
    this.dx = Math.round((Math.random() - 0.5) * 10);

    // velocity of ball.
    this.vel = Math.random() / 5;
    this.update = function () {

        // to begin a path of the ball.
        c.beginPath();
        // arc function is used to draw a circle.
        // arc(x coordinate of centre, y coordinate of centre, radius of circle, starting angle, ending angle)
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.fillStyle = this.color;

        // fill is used to fill the current drawing path and fillstyle is used to choose the color to be filled
        c.fill();
    };
}

// Array containing all the balls
let bal = [];
for (let i = 0; i < 50; i++) {
    // creating and pushing all the balls one by one.
    bal.push(new Ball());
}

// Function to give animations to the balls so that they will look like bouncing.
function animate() {

    // checking if canvas height/width is equal to the window's height/width
    if (tx != window.innerWidth || ty != window.innerHeight) {
        tx = window.innerWidth;
        ty = window.innerHeight;
        canvas.width = tx;
        canvas.height = ty;
    }

    // it tells the browser that you want to do some animations using a callback function as an argument in it
    requestAnimationFrame(animate);

    // it sets the pixels in a rectangular area to transparent black
    c.clearRect(0, 0, tx, ty);

    // again going through each and every ball and changing its properties.
    for (let i = 0; i < bal.length; i++) {

        // update function is used to update each and every balls by changing values of their properties.
        bal[i].update();

        // translation in y direction.
        bal[i].y += bal[i].dy;

        // translation in x direction.
        bal[i].x += bal[i].dx;

        // if ball exceedes the total canvas height then translate it in upward direction with some gravity.
        if (bal[i].y + bal[i].radius >= ty) {
            bal[i].dy = -bal[i].dy * grav;
        }
        // otherwise translate it in downward direction with some velocity.
        else {
            bal[i].dy += bal[i].vel;
        }
        // if during translation of ball either in -x or +x direction, it exceedes the canvas size, translate it in the opposite direction.
        if (bal[i].x + bal[i].radius > tx || bal[i].x - bal[i].radius < 0) {
            bal[i].dx = -bal[i].dx;
        }
        
        let distance = Math.floor(Math.sqrt(
              Math.pow(mousex - bal[i].x, 2) + Math.pow(mousey - bal[i].y, 2)
            ));
        
        // increasing ball's size on mouse triggered. At max the radius of the ball should be less than 70mm.
        if (distance < bal[i].radius &&  bal[i].radius < 70 ) {
            bal[i].radius += 5;
        }
        else {
            if (bal[i].radius > bal[i].startradius) {
                bal[i].radius += -5;
            }
        }
        //forloop end
    }
    //animation end
}

// calling animate function to give animations to the ball.
animate();

// to push a new ball after every .4sec.
setInterval(function () {
    bal.push(new Ball());

    // deleting first ball using splice.
    bal.splice(0, 1); 
}, 400);
