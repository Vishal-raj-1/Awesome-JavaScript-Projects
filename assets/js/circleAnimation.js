let colors = ['#db1032','#ffff00','#cf1dcf','#4b0082','#1cf11c','#ffa500'];
document.onmousemove = animate; 

// Event-Handler Function
function animate(event) {
    let circle = document.createElement("circle");     //Creating a <circle> element
    circle.setAttribute("class", "circle");        //Adding the <class> attribute to the <circle> element
    document.body.appendChild(circle);            //Inserting <circle> to DOM

    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';
    
    var color = colors[Math.floor(Math.random() * colors.length)];      //Assigning colors to circle borders randomly
    circle.style.borderColor = color;

    //Adding animation to the circles
    circle.style.transition = "all 0.5s linear 0s";
    
    circle.style.left = circle.offsetLeft - 20 + 'px';
    circle.style.top = circle.offsetTop - 20 + 'px';

    circle.style.color = color;
    circle.style.width = "35px";
    circle.style.height = "35px";
    circle.style.borderWidth = "10px";
    circle.style.opacity = 0;


}
