let W, H;
let len = 170, branch = 1, angle = 70, branchLimit = 8;
let angleSlider, label, canvas, c;

// click function
const increaseBranch = () => {
    if (branch < branchLimit) {
        branch++;
        init();
    }
}

//function to make these fractals
const tree = (x1, y1, branch, len, a) => {
    if (branch > 0) {
        //making new points
        let x2 = x1 + Math.sin(a * (Math.PI / 180)) * len;
        let y2 = y1 - Math.cos(a * (Math.PI / 180)) * len;

        //drawing lines  
        c.moveTo(x1, y1);
        c.lineTo(x2, y2);
        c.strokeStyle = "#fff";
        c.lineWidth = 1;
        c.stroke();

        // draw fruit
        if (branch == 1) {
            c.fillStyle = "tomato"
            c.strokeStyle = "tomato";
            c.beginPath();
            c.arc(x2, y2, 4, 0, 2 * Math.PI);
            c.fill();
            c.lineWidth = 0.1;
            c.stroke();
        }

        //making recursions
        tree(x2, y2, branch - 1, len * 0.67, a + angle);
        tree(x2, y2, branch - 1, len * 0.67, a - angle);
    }
}

//Main function
const init = () => {
    //Some basic canvas work
    canvas = document.getElementsByTagName("canvas")[0];
    canvas.height = H = 360;
    canvas.width = W = window.innerWidth;

    //To Draw
    angle = Number(angleSlider.value)
    c = canvas.getContext('2d');

    //to shift origin to bottom
    c.translate(W / 2, H);

    //to make color white
    c.strokeStyle = "white";

    //to start the recursion
    tree(0, 0, branch, len * 0.7, 0);

}


window.onload = () => {
    canvas = document.getElementsByTagName("canvas")[0];
    angleSlider = document.getElementById("angle");
    label = document.getElementsByTagName("span")[0];

    angleSlider.oninput = () => {
        branch = branchLimit
        init();
        label.innerText = `Angle : ${angleSlider.value}`;
    }

    // event listeners
    canvas.addEventListener('touchstart', increaseBranch);
    canvas.addEventListener('click', increaseBranch)

    // start
    init()
}