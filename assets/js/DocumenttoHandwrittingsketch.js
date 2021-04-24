myData = `Hi! my name is Priyadarshan I develop this Site this Site Convert Doc To Handwritting..`
let img, 
myFont = [];
myFonts = 7
imgNum = 1
fontNum = 0
pageNum = 1
xaxis=20
yaxis=20
fontsize=30
w=700
linespacing=false
function preload() {
    fontLoad();
    loadPage();
}

function setup(){
    canvas = createCanvas(750,1000)
    canvas.parent('contributing')
    rectMode(CORNER);
}

function draw(){
    image(img, 0, 0, width, height)
    textFont(myFont[fontNum]);
    textSize(fontsize)
    fill('#264180')
    if(linespacing){
        textLeading(linespacing);
    }
    data = "\n"+myData
    text(data, xaxis, yaxis, w, 900);
}

function fontLoad(){
    for(var i = 0; i < myFonts; i++){
        myFont.push(loadFont('../assets/fonts/font ('+str(i)+').ttf'));
    }
}

function changeFont(){
    fontNum += 1;
    fontNum %= myFonts
}

function loadPage(){
    img = loadImage('../assets/pages/page (2).jpg');
}