//Array to hold all drops
var dropArray = [];

//Main function
function init() {

    //Some basic canvas work
    var canvas = document.querySelector('canvas');

    //i.e setting size       
    canvas.width = W = window.innerWidth;
    canvas.height = H = window.innerHeight;

    //To Draw
    var c = canvas.getContext('2d');

    //when screen in resized
    window.addEventListener('resize', function () {
        canvas.width = W = window.innerWidth;
        canvas.height = H = window.innerHeight;
        create();
    })
    window.addEventListener("load", () => {
        canvas.width = W = window.innerWidth;
        canvas.height = H = window.innerHeight;
        create();
    })

    //class Drop which will draw drops
    function Drop(x, y, dy, width, height) {
        this.x = x; this.y = y;
        this.dy = dy;
        this.width = width;
        this.height = height;
        this.color = "rgb(138, 43, 226)";

        //to make sure no drop is chilling & waiting around rather than falling
        if (dy < 2) { dy = 3; }


        //drawing of drops
        this.draw = function () {
            c.beginPath();
            c.rect(this.x, this.y, this.width, this.height);
            c.fillStyle = this.color;
            c.fill();
        }

        //changes in the circles
        this.update = function () {

            this.y += dy;

            //to put the drops on top again as they reach the bottom
            if (this.y > H) { this.y = -20; }

            //to draw drops
            this.draw();
        }

    }

    //drawing of Drops through class
    function create() {
        dropArray = [];

        for (var i = 0; i <= 300; i++) {
            //parameters of drops
            var width = (Math.random() * 2) + 2;
            var height = (Math.random() * 4) + 14; var x = (Math.random() * (W - 2 * width)) + width;
            var y = Math.random() * H;
            var dy = Math.random() * 6;

            dropArray[i] = new Drop(x, y, dy, width, height);
        }
    }

    //to make it rain
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, W, H);

        for (var j = 0; j < dropArray.length; j++) { dropArray[j].update(); }
    }

    //calling required function
    animate();
    create();
}
init()
