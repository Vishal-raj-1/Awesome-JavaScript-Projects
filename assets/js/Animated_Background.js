function animation () {

    const colors = ["2196F3", "e91e63", "ffeb3b", "74ff1d"];

    const section = document.querySelector("section");
    const square = document.createElement("span");
    const star = document.createElement("i");

    star.classList.add("fas");
    star.classList.add("fa-star");

    let size = Math.random() * 100;

    star.style.height = 20 + size + "px";
    star.style.width = 20 + size + "px";

    star.style.top = Math.random() * innerHeight + "px";
    star.style.left = Math.random() * innerWidth + "px";

    // const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let randomColor = colors[Math.floor(Math.random()*4)];
    star.style.color = "#" + randomColor;

    section.appendChild(star);

    size = Math.random() * 20;

    square.style.height = 20 + size + "px";
    square.style.width = 20 + size + "px";

    square.style.top = Math.random() * innerHeight + "px";
    square.style.left = Math.random() * innerWidth + "px";

    randomColor = colors[Math.floor(Math.random()*4)];
    square.style.backgroundColor = "#" + randomColor;

    section.appendChild(square);

    setTimeout(function() {
        section.removeChild(square);
        section.removeChild(star);
    }, 5000);
}

setInterval(animation,100);