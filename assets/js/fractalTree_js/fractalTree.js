let W, H;
let len = 180, branch = 1, angle = 35, branchLimit = 8;

// click function
const increaseBranch = () => {
    if (branch < branchLimit) {
        branch++;
        init();
    }
}
//Main function
const init = () => {
    //Some basic canvas work
    let canvas = document.querySelector('canvas');
    canvas.height = H = 300;
    canvas.width = W = window.innerWidth;

    //To Draw
    let c = canvas.getContext('2d');

    //to shift origin to bottom
    c.translate(W / 2, H);

    //to make color white
    c.strokeStyle = "white";

    //function to make these fractals
    const tree = (x1, y1, branch, len, a) => {
        if (branch > 0) {
            //making new points
            var x2 = x1 + Math.sin(a * (Math.PI / 180)) * len;
            var y2 = y1 - Math.cos(a * (Math.PI / 180)) * len;

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

    //to start the recursion
    tree(0, 0, branch, len * 0.6, 0);

}

// event listeners
document.addEventListener('touchstart', increaseBranch);
document.addEventListener('click', increaseBranch)

window.onload = () => {
    init()
}