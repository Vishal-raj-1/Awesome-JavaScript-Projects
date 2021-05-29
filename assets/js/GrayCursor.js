let Cursor = document.querySelector(".cursor");
let image = document.querySelector("img");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  Cursor.style.top = e.pageY + "px";
  Cursor.style.left = e.pageX + "px";
}
