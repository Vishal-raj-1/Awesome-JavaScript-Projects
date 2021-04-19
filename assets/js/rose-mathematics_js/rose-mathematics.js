var canvas, ctx, w, h;
var angle, k, n, d;
var current, fps;
var isInfo = false;
let anim;
//event listeners for onload & resize
window.addEventListener("resize", () => {
    restart();
});
window.addEventListener("load", init);
window.addEventListener('click', (e) => {
    let parentDOM = e.originalTarget.offsetParent;
    // console.log(parentDOM);
    if (isInfo && parentDOM.id != "info" && e.target.id != "infoBTN") {
        info();
    }
})
function info() {

    let infoTab = document.getElementById("info");
    if (!isInfo) {
        infoTab.style.display = "block";
        isInfo = true;
    } else {
        infoTab.style.display = "none";
        isInfo = false;
    }
}
//initial function
function init() {

    //setting things up
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    ctx.translate(w / 2, h / 2);

    n = Math.floor(random(1, 7));
    d = Math.floor(random(1, 9));

    document.getElementById("n").innerText = n;
    document.getElementById("d").innerText = d;

    k = n / d;
    angle = 0;

    current = Date.now();
    fps = document.getElementById("fps");

    //drawing or animating the stars
    animate();

    //refresh option
    document.getElementById("redo").onclick = () => {
        restart();
    };
}

function animate() {
    calcFPS();

    let dis = (h > w) ? w : h;

    let r = (dis / 2 - 10) * Math.cos(k * angle);

    let x = r * Math.cos(angle);
    let y = r * Math.sin(angle);

    if (angle < 100) {
        ctx.fillStyle = "#d24";

        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        angle += 0.01;
        anim = requestAnimationFrame(animate);
    }
}


//calculation of fps
function calcFPS() {
    //current time - last 
    let timeDiff = Date.now() - current;

    //update time
    current = Date.now();

    fps.innerText = "fps: " + Math.floor(1000 / timeDiff);
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

const restart = () => {
    cancelAnimationFrame(anim);
    anim = null;
    init();
}
