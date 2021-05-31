const src = 'https://media.tenor.com/images/2cee493e1a50452657bf30778226ec48/tenor.gif'

setTimeout(function () {
    var name = prompt("Enter your name")
    const first = document.getElementById('first')
    const second = document.getElementById('second')
    first.classList.add('first')
    second.classList.add('sec')

    first.innerHTML = `<img src=${src} > <br><br>${name}`
    second.innerHTML = 'Nice to meet you !'


}, 2000);
