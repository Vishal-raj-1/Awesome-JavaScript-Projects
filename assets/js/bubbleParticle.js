const canvas=document.getElementById("canvas1");

const ctx=canvas.getContext('2d');

let particleArray=[];
let adjustX=2;
let adjustY=15;

//handle mouse interaction

const mouse={
    x:null,
    y:null,
    radius:250
}
window.addEventListener("mousemove",function(e){
mouse.x=e.x;
mouse.y=e.y;

});

ctx.fillStyle="white";
ctx.font="21px ariel";
ctx.fillText('JavaScript is Fun',0,30);
const textCoordinates=ctx.getImageData(0,0,canvas.width,canvas.height);

class Particle{

constructor(x,y){
    this.x=x;
    this.y=y;
    this.size=3;
    this.baseX=this.x; //holds the initial position of particle
    this.baseY=this.y;
    this.density=(Math.random()*10)+1;
    this.distance;

}
draw(){
    ctx.fillStyle="rgba(255,255,255,0.8)";
     ctx.strokeStyle="rgba(34,147,214,1)";
    
    ctx.beginPath();
if(this.distance < mouse.radius-5){
    this.size=13;
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(this.x-3,this.y-3,this.size/2.5,0,Math.PI*2);
    ctx.arc(this.x+7,this.y-1,this.size/3.5,0,Math.PI*2);
}
else if(this.distance <= mouse.radius){
this.size=10;
ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(this.x-2,this.y-2,this.size/3,0,Math.PI*2);

}
else{
this.size=8;
ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(this.x-1,this.y-1,this.size/3,0,Math.PI*2);

}
ctx.closePath();  

ctx.fill();

}
update(){
    let dx=mouse.x-this.x;
    let dy=mouse.y-this.y;
    let distance=Math.sqrt(dx*dx +dy*dy);
    this.distance=distance;
    let forceDirectionX=dx/distance;
    let forceDirectionY=dy/distance;
    let maxDistance=mouse.radius;
        let force=(maxDistance-distance)/maxDistance;
        let directionX=forceDirectionX * force * this.density;
        let directionY=forceDirectionY * force * this.density;

    if(distance<mouse.radius){
        this.x-=directionX;
        this.y-=directionY;
        
    }
    else{
        if(this.x!==this.baseX){
            let dx=this.x-this.baseX;
            this.x-=dx/10;
        }
        if(this.y!==this.baseY){
            let dy=this.y-this.baseY;
            this.y-=dy/10;
        }
    }
}

}

function init(){
    particleArray=[];
for(let y=0,y2=textCoordinates.height;y<y2;y++){
    for(let x=0,x2=textCoordinates.width;x<x2;x++){
 if(textCoordinates.data[(y*4*textCoordinates.width)+(x*4)+3]>128){
let positionX=x +adjustX;
let positionY=y+adjustY;
particleArray.push(new Particle(positionX*10,positionY*10));
 }
}
}}

init();



function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<particleArray.length;i++){
        particleArray[i].draw();
        particleArray[i].update();
    }
   
    requestAnimationFrame(animate);
}
animate();

