const circles = document.querySelectorAll(".circle");
const tooltip1 = document.querySelector(".tooltip1");
const tooltip2 = document.querySelector(".tooltip2");
const tooltip3 = document.querySelector(".tooltip3");
let activeLight = 0;

setInterval(() => {
  changeLight();
}, 1000);

function changeLight() {
  circles[activeLight].className = "circle";
  console.log(circles[activeLight]);
  activeLight++;
  tooltip1.style.opacity = 0;
  tooltip2.style.opacity = 0;
  tooltip3.style.opacity = 0;

  if (activeLight > 2) {
    activeLight = 0;
  }

  const currentLight = circles[activeLight];

  currentLight.classList.add(currentLight.getAttribute("data-color"));
  if (currentLight.getAttribute("data-color") === "red") {
    tooltip1.style.opacity = 1;
  }

  if (currentLight.getAttribute("data-color") === "yellow") {
    tooltip2.style.opacity = 1;
  }

  if (currentLight.getAttribute("data-color") === "green") {
    tooltip3.style.opacity = 1;
  }
}
