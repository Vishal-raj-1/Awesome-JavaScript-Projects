const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES_NR = 500;

for (let i = 0; i < SQUARES_NR; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColorToEl(square);
    });

    square.addEventListener('mouseout', () => {
        removeColorFromEl(square);
    });

    container.appendChild(square);
}


function setColorToEl(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColorFromEl(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}


const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});


