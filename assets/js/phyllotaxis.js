var canvas, ctx, w, h;
var n, c;

//event listeners for onload & resize
window.addEventListener("resize", init);
window.addEventListener("load", init);


//initial function
function init() {
    //setting things up
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    ctx.translate(w / 2, h / 2);

    n = 0; c = 6;

    //drawing or animating the stars
    animate();
}

function animate() {


    let r = c * Math.sqrt(n);
    let angle = n * 137.5 * (Math.PI / 180);

    let dis = (h > w) ? w : h;

    if (r < dis / 2 - 10) {

        let x = r * Math.cos(angle);
        let y = r * Math.sin(angle);
        let h = (n % 255) / 2;

        ctx.fillStyle = "hsl(" + 1 + h + ",80%,50%)";
        ctx.strokeStyle = "white";
        ctx.lineWidth = this.z / 2;
        ctx.beginPath();
        ctx.arc(x, y, c / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        n++;
        requestAnimationFrame(animate);
    }

}

