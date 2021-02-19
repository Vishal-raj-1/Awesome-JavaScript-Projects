let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

function setClock(){
    const day = new Date();
    const hh = day.getHours();
    const mm = day.getMinutes();
    const ss = day.getSeconds();

    const hourdeg = (hh*30) + (mm*0.5);
    const minutedeg = (mm *6)+(ss*0.1);
    const seconddeg = (ss*6);

    setRotation(second,seconddeg);
    setRotation(minute,minutedeg);
    setRotation(hour,hourdeg);
}

function setRotation(element,rotation){
    element.style.setProperty(`--rotate`,rotation);
}

setInterval(setClock,1000)
