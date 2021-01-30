console.log("Hello");

const body = document.body;
const span_color = document.getElementById("color");
const btn = document.getElementById("btn");
let color = span_color.innerHTML;

btn.addEventListener("click", () => {
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);

    color = `rgb(${x}, ${y}, ${z})`;
    span_color.innerHTML = color;
    body.style.backgroundColor = color;
});