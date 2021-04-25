var c = document.createElement("canvas");
var ctx = c.getContext("2d");
c.width = 1850;
c.height = 700;
document.body.appendChild(c);

var perm = [];
while (perm.length < 255) {
    while (perm.includes(val = Math.floor(Math.random() * 255)));
    perm.push(val);
}

var lerp = (a, b, t) => a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;
var noise = x => {
    x = x * 0.01 % 255;
    return lerp(perm[Math.floor(x)], perm[Math.ceil(x)], x - Math.floor(x));
}

var player = new function () {
    this.x = c.width / 2;
    this.y = 0;
    this.ySpeed = 0;
    this.rot = 0;
    this.rSpeed = 0;

    this.img = new Image();
    this.img.src = "../assets/Images/Bikegame/moto.png";
    this.draw = function () {
        var p1 = c.height - noise(t + this.x) * 0.25;
        var p2 = c.height - noise(t + 5 + this.x) * 0.25;

        var grounded = 0;
        if (p1 - 15 > this.y) {
            this.ySpeed += 0.1;
        } else {
            this.ySpeed -= this.y - (p1 - 15);
            this.y = p1 - 15;
            grounded = 1;
        }
        if (!playing || grounded && Math.abs(this.rot) > Math.PI * 0.5) {
            playing = false;
            this.rSpeed = 5;
            k.ArrowUp = 2;
            this.x -= speed * 5;
        }
        var angle = Math.atan2((p2 - 15) - this.y, (this.x + 5) - this.x);
        this.y += this.ySpeed;

        if (grounded && playing) {
            this.rot -= (this.rot - angle) * 0.5;
            this.rSpeed = this.rSpeed - (angle - this.rot);
        }
        this.rSpeed += (k.ArrowLeft - k.ArrowRight) * 0.5;
        this.rot -= this.rSpeed * 0.1;
        if (this.rot > Math.PI) this.rot = -Math.PI;
        if (this.rot < -Math.PI) this.rot = Math.PI;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rot);
        ctx.drawImage(this.img, -15, -15, 30, 30);
        ctx.restore();
    }
}




var t = 0;
var speed = 0;
var playing = true;
var k = { ArrowUp: 0, ArrowDown: 0, ArrowLeft: 0, ArrowRight: 0 };
function loop() {
    speed -= (speed - (k.ArrowUp - k.ArrowDown)) * 0.05;
    t += 5 * speed;
    ctx.fillStyle = "#19f";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, c.height);
    for (let i = 5; i < c.width; i++)
        ctx.lineTo(i, c.height - noise(t + i) * 0.25);

    ctx.lineTo(c.width, c.height);
    ctx.fill();

    player.draw();
    requestAnimationFrame(loop);
}
onkeydown = d => k[d.key] = 1;
onkeyup = d => k[d.key] = 0;
loop();