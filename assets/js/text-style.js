function copyToClipboard(value) {
    const tempInput = document.createElement("textarea");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    return true;
}

const ul = document.querySelector('ul')
const shadows = [
    {
        color: 'white',
        letterSpacing: '5px',
        textShadow: '3px 3px 20px #ff99cc,-2px 1px 30px #ff99cc',
        background: 'white',
        fontSize: '4em'
    },
    {
        background: 'black',
        letterSpacing: '5px',
        color: 'rgba(0,0,0,0.3)',
        fontSize: '4em',
        textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de'

    },
    {
        background: 'rgb(130, 45, 63)',
        color: 'white',
        fontSize: '4em',
        textShadow: '-2px 4px 0 rgba(0, 0, 0, 0.3)'

    }, {
        background: 'skyblue',
        color: 'white',
        fontSize: '4em',
        textShadow: '0px 3px 0px #b2a98f, 0px 14px 10px rgba(0, 0, 0, 0.15), 0px 24px 2px rgba(0, 0, 0, 0.1), 0px 34px 30px rgba(0, 0, 0, 0.1)'

    }, {
        background: 'sienna',
        color: 'lighten(sienna, 10 %)',
        fontSize: '4em',
        textShadow: '0 0 1em rgba(0, 0, 0, 0.9)'

    }, {
        background: 'rgb(30, 233, 66)',
        color: '#f1f1f1',
        textShadow: '0px 4px 3px rgba(0, 0, 0, 0.4),0px 8px 13px rgba(0, 0, 0, 0.1),0px 18px 23px rgba(0, 0, 0, 0.1)',
        fontSize: '4em'


    }, {
        background: '#f6dfeb',
        color: 'white',
        textShadow: '0px 15px 5px rgba(0, 0, 0, 0.1),10px 20px 5px rgba(0, 0, 0, 0.05),-10px 20px 5px rgba(0, 0, 0, 0.05)',
        fontSize: '4em'


    }, {
        color: '#2c2c2c',
        background: '#344fa1',
        letterSpacing: '.05em',
        textShadow: '4px 4px 0px #d5d5d5,7px 7px 0px rgba(0, 0, 0, 0.2)',
        fontSize: '4em'


    }, {
        color: '#f1ebe5',
        textShadow: '0 13.36px 8.896px #c4b59d, 0 - 2px 1px #fff',
        letterSpacing: '-4px',
        background: '#ca8a8b',
        fontSize: '4em'


    }, {
        background: '#8e7f7f',
        textShadow: '0px 4px 3px rgba(0, 0, 0, 0.4),0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1)',
        fontSize: '4em'


    }, {
        color: '##808080',
        background: '#907fa4',
        textShadow: '0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb, 0 4px 0 #b9b9b9,0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, .1),0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px rgba(0, 0, 0, .25),0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px rgba(0, 0, 0, .15),0 30px 20px rgba(0, 0, 0, .1)',
        fontSize: '4em'

    }, {
        color: '##808080',
        background: '#0a043c',
        textShadow: '0px 3px 2px #ccc,0px 8px 10px rgba(0, 0, 0, 0.15),0px 12px 2px rgba(0, 0, 0, 0.7)',
        fontSize: '4em'


    }, {
        background: '#810000',
        color: '##808080',

        textShadow: ' 0px 4px 3px rgba(0, 0, 0, 0.4),0px 8px 13px rgba(0, 0, 0, 0.1),0px 18px 23px rgba(0, 0, 0, 0.1)',
        fontSize: '4em'


    }, {
        textShadow: '0px 1px 4px #23430C',
        color: '#4a7e4e',
        background: '#d3e0ea',
        fontSize: '4em'


    }, {
        textShadow: '0 13.36px 8.896px #2c482e, 0 - 2px 1px #aeffb4',
        fontSize: '4em',

        letterSpacing: '-4px',
        color: '#6fb374',
        background: '#02475e'
    }, {
        color: '#121212',
        letterSpacing: '5px',
        background: '#5a995e',
        textShadow: '2px 7px 5px rgba(0,0,0,0.3),0px -4px 10px rgba(255,255,255,0.3)',
        fontSize: '4em'


    }, {
        letterSpacing: '5px',
        textShadow: '3px 0px 7px rgba(81,67,21,0.8), -3px 0px 7px rgba(81,67,21,0.8), 0px 4px 7px rgba(81,67,21,0.8)',
        color: '#CFC547',
        background: '#f5f7b2',
        fontSize: '4em'


    }, {
        color: '#121212',
        letterSpacing: '5px',
        textShadow: '-1px 1px 0 #41ba45,1px 1px 0 #c63d2b,1px -1px 0 #42afac,-1px -1px 0 #c6c23f',
        background: '#121212',
        fontSize: '4em'


    }, {
        background: '#000000',
        color: '#dfdfdf',
        letterSpacing: '7px',
        textShadow: '4px 4px 0px #000, -4px 0 0px #000,7px 4px 0 #fff',
        fontSize: '4em'


    },
    {
        color: 'rgba(0,0,0,0.7)',

        textShadow: 'text-shadow: 2px 4px 3px rgba(0,0,0,0.3)',
        background: '#da7f8f',
        fontSize: '4em'


    },
    {
        color: 'rgba(0,0,0,0.6)',
        textShadow: '2px 2px 3px rgba(255,255,255,0.1)',
        background: '#0a043c',
        fontSize: '4em'



    }
    , {
        color: 'white',
        background: '#f05945',
        fontSize: '4em',
        textShadow: '3px 3px 0px rgba(0,0,0,0.2)'

    }, {
        textShadow: '2px 2px 0px #fff, 4px 4px 0px rgba(0,0,0,0.15)',
        background: '#4527',
        color: 'rgba(0,0,0,0.6)',
        fontSize: '4em'


    },
    {
        background: '#222',
        color: 'rgba(0, 0, 0, 0.6)',
        textShadow: '2px 2px 3px rgba(255, 255, 255, 0.1)',
        fontSize: '4em'


    }

]
async function addShadow(shadow) {
    const li = document.createElement('li')
    li.innerHTML = `<h1>Demo of text</h1>`

    if (typeof shadow === 'object') {
        li.style.textShadow = shadow.textShadow
        li.style.background = shadow.background
        li.style.color = shadow.color
        li.style.letterSpacing = shadow.letterSpacing || 'normal'
        li.style.fontSize = shadow.fontSize || '4em'


    } else {
        li.style.textShadow = shadow
    }
    ul.appendChild(li)

    li.addEventListener('click', function (e) {
        const previousHTML = li.innerHTML
        li.classList.add('copied')
        copyToClipboard(`text-shadow: ${li.style.textShadow};
                         color:${li.style.color};
                         letter-spacing:${li.style.letterSpacing};
                         background:${li.style.background};
                         font-size:${li.style.fontSize};
        `)
        li.innerHTML = 'Copied!'
        setTimeout(() => {
            li.innerHTML = previousHTML
            li.classList.remove('copied')
        }, 1000)
    })
}

async function processArray(array) {
    for (const item of shadows) {
        await addShadow(item);
    }
}

processArray(shadows)
