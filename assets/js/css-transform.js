var main = document.getElementById("main")

const squares = 15;

const rotate = ['scaleX', 'scaleY', 'scale','translateX','translateY','translate',
'matrix','rotate','skew','skewX','translateZ','skewY','matrix3d','rotateY','rotateX','translate3d'
]

for (let i = 0; i < squares; i++) {
    const sq = document.createElement('div');

    sq.classList.add(`wrap${i}`)

    sq.classList.add(`box${i}`)
    sq.innerHTML = `<h3>${rotate[i]}</h3> `;

    sq.classList.add('blue')
    sq.classList.add(`wrap${i}`)


    main.appendChild(sq)
}