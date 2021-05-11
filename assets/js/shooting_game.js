const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d')
const scoreEl = document.querySelector('#scoreEl')
const startgameBtn = document.querySelector('#startgameBtn')
const modalEl = document.querySelector('#modalEl')
const bigScoreEl = document.querySelector('#bigScoreEl')

canvas.width = innerWidth
canvas.height = innerHeight

var ctx = canvas.getContext("2d");

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

class Enemy {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }

    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}


class Special {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }

    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

const friction = 0.99
class Particle {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.alpha = 1
    }
    draw() {
        c.save()
        c.globalAlpha = this.alpha
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.restore()
    }

    update() {
        this.draw()
        this.velocity.x *= friction
        this.velocity.y *= friction
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        this.alpha -= 0.01
    }
}

//expansão do especial
function new_circle() {

    c.strokeStyle = 'red';
    c.lineWidth = 5;

    var startTime = 0;
    var animationTime = 5; // seconds
    var fn = function (time) {
        if (startTime) {
            var t = (time - startTime) / 100;
            if (t > animationTime) {
                t = animationTime;
            }
            var i = canvas.height / 2 * t / animationTime;
            c.beginPath();
            c.arc(canvas.width / 2, canvas.height / 2, i, 0, 2 * Math.PI);

            //explosoes com o toque
            enemies.forEach((enemy, index) => {
                const dist = Math.hypot(c.x - enemy.x, c.y - enemy.y)
                if (dist - enemy.radius - c.radius < 1) {
                    for (let i = 0; i < c.radius * 2; i++) {
                        particles.push(new Particle(c.x, c.y, Math.random() * 2, enemy.color, {
                            x: (Math.random() - 0.5) * (Math.random() * 6),
                            y: (Math.random() - 0.5) * (Math.random() * 6),
                        }))
                    }
                }
                setTimeout(() => {
                    enemies.splice(index, 1)
                    projectiles.splice(projectileIndex, 1)
                }, 0)
            })
            c.fill();
            c.stroke();
            //-----------------------
            if (t < animationTime) {
                requestAnimationFrame(fn);
            }
        } else { // first call to requestAnimationFrame sets the start time
            startTime = time;
            requestAnimationFrame(fn);
        }
    };
    requestAnimationFrame(fn);
}



const x = canvas.width / 2
const y = canvas.height / 2

let player = new Player(x, y, 10, 'white')
let projectiles = []
let enemies = []
let specials = []
let particles = []

function init() {
    player = new Player(x, y, 10, 'white')
    projectiles = []
    enemies = []
    specials = []
    particles = []
    score = 0
    scoreEl.innerHTML = score
    bigScoreEl.innerHTML = score
}

function spawEnemies() {
    setInterval(() => {
        const radius = Math.random() * (30 - 4) + 4

        let x
        let y

        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
            y = Math.random() * canvas.height
        } else {
            x = Math.random() * canvas.width
            y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
        }
        const color = 'red'
        const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x)
        const velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }

        enemies.push(new Enemy(x, y, radius, color, velocity));
    }, 1000)
}

function spawSpecials() {
    setInterval(() => {
        const radius = Math.random() * (30 - 4) + 4

        let x
        let y

        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
            y = Math.random() * canvas.height
        } else {
            x = Math.random() * canvas.width
            y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius
        }
        var color = 'rgba(255,255,0, 0.6)'
        const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x)
        const velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }

        specials.push(new Special(x, y, radius, color, velocity));
    }, 30000)
}

let animationId
let score = 0

function animate() {
    animationId = requestAnimationFrame(animate)
    stars = 200;

    c.fillStyle = 'rgba(0, 0, 0, 0.1)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()
    particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
            particles.splice(index, 1)
        } else {
            particle.update()
        }

    })
    projectiles.forEach((projectile, index) => {
        projectile.update()

        //remove o projetil do canto da tela
        if (projectile.x + projectile.radius < 0 || projectile.x - projectile.radius > canvas.width || projectile.y + projectile.radius < 0 || projectile.y - projectile.radius > canvas.height) {
            setTimeout(() => {
                projectiles.splice(index, 1)
            }, 0)
        }
    })

    enemies.forEach((enemy, index) => {
        enemy.update()

        const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y)

        //Fim do jogo 
        if (dist - enemy.radius - player.radius < 1) {
            cancelAnimationFrame(animationId)
            modalEl.style.display = 'flex'
            bigScoreEl.innerHTML = score
        }

        projectiles.forEach((projectile, projectileIndex) => {
            const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)

            //quando os projeteis tocam o inimigo 
            if (dist - enemy.radius - projectile.radius < 1) {

                //criando explosões
                for (let i = 0; i < enemy.radius * 2; i++) {
                    particles.push(new Particle(projectile.x, projectile.y, Math.random() * 2, enemy.color, {
                        x: (Math.random() - 0.5) * (Math.random() * 6),
                        y: (Math.random() - 0.5) * (Math.random() * 6),
                    }))
                }
                if (enemy.radius - 10 > 5) {

                    //pontuando
                    score += 100
                    scoreEl.innerHTML = score / 10

                    gsap.to(enemy, {
                        radius: enemy.radius - 10
                    })
                    setTimeout(() => {
                        projectiles.splice(projectileIndex, 1)
                    }, 0)
                } else {
                    //pontuando inimigo morto
                    score += 250
                    scoreEl.innerHTML = score / 10
                    setTimeout(() => {
                        enemies.splice(index, 1)
                        projectiles.splice(projectileIndex, 1)
                    }, 0)
                }
            }
        })
    })
    //----------------------------------------------
    specials.forEach((special, index) => {
        special.update()

        const dist = Math.hypot(player.x - special.x, player.y - special.y)

        //Quando o especial toca o jogador
        if (dist - special.radius - player.radius < 1) {
            setTimeout(() => {
                specials.splice(index, 1)
            }, 0)
            new_circle();
        }

        projectiles.forEach((projectile, projectileIndex) => {
            const dist = Math.hypot(projectile.x - special.x, projectile.y - special.y)

            //quando os projeteis tocam o especial 
            if (dist - special.radius - projectile.radius < 1) {

                //criando explosões
                for (let i = 0; i < special.radius * 2; i++) {
                    particles.push(new Particle(projectile.x, projectile.y, Math.random() * 2, special.color, {
                        x: (Math.random() - 0.5) * (Math.random() * 6),
                        y: (Math.random() - 0.5) * (Math.random() * 6),
                    }))
                }
                if (special.radius - 10 > 5) {

                    //pontuando
                    score += 100
                    scoreEl.innerHTML = score / 10

                    gsap.to(special, {
                        radius: special.radius - 10
                    })
                    setTimeout(() => {
                        projectiles.splice(projectileIndex, 1)
                    }, 0)
                } else {
                    //pontuando especial morto
                    score += 250
                    scoreEl.innerHTML = score / 10
                    setTimeout(() => {
                        specials.splice(index, 1)
                        projectiles.splice(projectileIndex, 1)
                    }, 0)
                }
            }
        })

    })
}

addEventListener('click', (event) => {
    const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width / 2)
    const velocity = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5
    }
    projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 5, 'white', velocity))
})

startgameBtn.addEventListener('click', () => {
    init()
    animate()
    spawEnemies()
    spawSpecials()
    modalEl.style.display = 'none'

})