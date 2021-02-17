function createCircle() {
  const circleEl = document.createElement("div");
  circleEl.classList.add("heart");
  circleEl.style.top = Math.random() * window.innerHeight + "px";
  circleEl.style.left = Math.random() * window.innerWidth + "px";

  document.body.appendChild(circleEl);

  setTimeout(() => {
    circleEl.remove();
  }, 3000);
}

setInterval(createCircle, 150);

window.addEventListener("click", (e) => {
  console.log("hello");
  console.log(e.pageY);

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.top = e.pageY + "px";
  heart.style.left = e.pageX + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
});
