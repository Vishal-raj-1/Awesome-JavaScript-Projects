console.log("Hello, This is My Counter");

const counter = document.getElementById("count");
const decreaseCount = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increaseCount = document.getElementById("increase");
let count = counter.innerHTML;
let countColor = "black";
counter.style.color = countColor;

decreaseCount.addEventListener("click", () => {
    count = count - 1;
    counter.innerHTML = count;
    if (count < 0) {
        countColor = "red";
        counter.style.color = countColor;
    }
    else if (count == 0) {
        countColor = "black";
        counter.style.color = countColor;
    }
});

increaseCount.addEventListener("click", () => {
    count = count + 1;
    counter.innerHTML = count;
    if (count > 0) {
        countColor = "green";
        counter.style.color = countColor;
    }
    else if (count == 0) {
        countColor = "black";
        counter.style.color = countColor;
    }
});

reset.addEventListener("click", () => {
    count = 0;
    countColor = "black";
    counter.style.color = countColor;
    counter.innerHTML = count;
});