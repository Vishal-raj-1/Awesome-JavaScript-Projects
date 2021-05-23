
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
    'rgba(149, 157, 165, 0.2) 0 8px 24px',
    '0 7px 29px 0 rgba(100,100,111,.2)',
    'rgba(0,0,0,.15) 1.95px 1.95px 2.6px',
    '0px 5px 15px rgba(0, 0, 0, 0.35)',
    {
        boxShadow: 'rgba(0, 0, 0, 0.16) 0 1px 4px'
    },
    'rgba(0, 0, 0, 0.24) 0 3px 8px',
    '0 2px 8px 0 rgba(99,99,99,.2)',
    'rgba(0, 0, 0, 0.16) 0 1px 4px, #333 0 0 0 3px',
    'rgba(0, 0, 0, 0.02) 0 1px 3px 0, rgba(27, 31, 35, 0.15) 0 0 0 1px',
    {
        boxShadow: 'rgba(0, 0, 0, 0.1) 0 4px 12px'
    },
    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, .09) 0px -3px 5px',
    {
        boxShadow: 'rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px'
    },
    {
        boxShadow: 'rgba(0, 0, 0, 0.16) 0 10px 36px 0, rgba(0, 0, 0, 0.06) 0 0 0 1px'
    },
    'rgba(17, 12, 46, 0.15) 0 48px 100px 0',

    {
        boxShadow: 'rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px, rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset'
    },
    {
        boxShadow: 'rgba(255, 255, 255, 0.1) 0 1px 1px 0 inset, rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px'
    },
    {
        boxShadow: 'rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px'
    },
    {
        boxShadow: '0 50px 100px -20px rgba(50,50,93,.25), 0 30px 60px -30px rgba(0,0,0,.3)'
    },
    {
        boxShadow: '0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3)'
    },
    {
        boxShadow: '0 2px 5px -1px rgba(50,50,93,.25), 0 1px 3px -1px rgba(0,0,0,.3)'
    },
    {
        boxShadow: '0 20px 30px -10px #26394d'
    },
    {
        boxShadow: '0 0 0 2px rgba(6,24,44,.4), 0 4px 6px -1px rgba(6,24,44,.65), inset 0 1px 0 hsla(0,0%,100%,.08)'
    },
    '0 6px 12px -2px rgba(50,50,93,0.25),0 3px 7px -3px rgba(0,0,0,0.3)',
    '0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3)',
    '0 30px 60px -12px rgba(50,50,93,0.25),0 18px 36px -18px rgba(0,0,0,0.3)',
    'inset 0 30px 60px -12px rgba(50,50,93,0.25),inset 0 18px 36px -18px rgba(0,0,0,0.3)',
    '0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3)',

    {
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
    },
    {
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
    },
    {
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        credits: 'Material',
    },
    {
        boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        credits: 'Material',
    },
    {
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
        credits: 'Material',
    },


    {
        boxShadow: 'rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 6px 2px',
        credits: 'Material',
    },
    {
        boxShadow: 'rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 1px 3px 1px'
    },

    {
        boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)'
    },
    {
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
    },
    {
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
    },
    {
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    },
    {
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    },
    {
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    },
    {
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    {
        boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
    },

    '0 0 5px 0 rgba(0, 0, 0, 0.1),0 0 1px 0 rgba(0, 0, 0, 0.1)',

    {
        boxShadow: '0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)',
        credits: 'Tobias Ahlin',
    },
    {
        boxShadow: '0 2px 1px rgba(0,0,0,0.09), 0 4px 2px rgba(0,0,0,0.09), 0 8px 4px rgba(0,0,0,0.09), 0 16px 8px rgba(0,0,0,0.09), 0 32px 16px rgba(0,0,0,0.09)',
    },

    {
        boxShadow: 'rgba(0, 0, 0, 0.2) 0 18px 50px -10px',
    },
    {
        boxShadow: 'rgba(67, 71, 85, 0.27) 0 0 .25em, rgba(90, 125, 188, 0.05) 0 .25em 1em'
    },
    'rgba(0,0,0,.1) 0 1px 2px 0',
    {
        boxShadow: 'rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset'
    },
    {
        boxShadow: 'rgba(3, 102, 214, 0.3) 0 0 0 3px'
    },
    'rgba(14, 30, 37, 0.12) 0 2px 4px 0, rgba(14, 30, 37, 0.32) 0 2px 16px 0',
    {
        boxShadow: '0 12px 28px 0 rgba(0, 0, 0, 0.2),0 2px 4px 0 rgba(0, 0, 0, 0.1),inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
    },

    {
        boxShadow: 'rgba(0, 0, 0, 0.15) 0 5px 15px 0'
    },
    {
        boxShadow: 'rgba(33, 35, 38, 0.1) 0 10px 10px -10px'
    },

    ,


    {
        boxShadow: '3px 3px 6px 0px #CCDBE8 inset, -3px -3px 6px 1px rgba(255,255,255,0.5) inset',
    },
    {
        boxShadow: '6px 2px 16px 0px rgba(136, 165, 191, 0.48) , -6px -2px 16px 0px rgba(255, 255, 255, 0.8)',
    },

    {
        boxShadow: '0px 1px 0px rgba(17,17,26,0.1)'
    },
    {
        boxShadow: '0px 1px 0px rgba(17,17,26,0.05), 0px 0px 8px rgba(17,17,26,0.1)'
    },
    {
        boxShadow: '0px 1px 0px rgba(17,17,26,0.05), 0px 0px 8px rgba(17,17,26,0.1)'
    },
    {
        boxShadow: '0px 0px 16px rgba(17,17,26,0.1)'
    },
    {
        boxShadow: '0px 4px 16px rgba(17,17,26,0.05), 0px 8px 32px rgba(17,17,26,0.05)'
    },
    {
        boxShadow: '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 32px rgba(17,17,26,0.05)'
    },
    {
        boxShadow: '0px 1px 0px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 48px rgba(17,17,26,0.1)'
    },
    {
        boxShadow: '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1)'
    },
    {
        boxShadow: '0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1), 0px 24px 80px rgba(17,17,26,0.1)'
    },

    {
        boxShadow: 'rgba(50, 50, 105, 0.15) 0 2px 5px 0, rgba(0, 0, 0, 0.05) 0 1px 1px 0'
    },

    {
        boxShadow: '0 15px 25px rgba(0, 0, 0, 0.15),0 5px 10px rgba(0, 0, 0, 0.05)'
    },

    {
        boxShadow: 'rgba(0,0,0,.15) 2.4px 2.4px 3.2px'
    },

    {
        boxShadow: '0 3px 3px 0 rgba(0,0,0,0.15)'
    }
    ,
    {
        boxShadow: 'rgba(0, 0, 0, 0.08) 0 4px 12px'
    },

    {
        boxShadow: 'rgba(0, 0, 0, 0.15) 0 2px 8px'
    },

    {
        boxShadow: 'rgba(0, 0, 0, 0.18) 0 2px 4px'
    },

    {
        boxShadow: '-4px 9px 25px -6px rgba(0,0,0,.1)'
    },

    {
        boxShadow: '0 60px 40px -7px rgba(0,0,0,.2)'
    },

    {
        boxShadow: '0 30px 90px rgba(0,0,0,0.4)'
    },

    {
        boxShadow: '0 22px 70px 4px rgba(0, 0, 0, 0.56)'
    },
    {
        boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.2)'
    },
    {
        boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px'
    },
    {
        boxShadow: '0 .0625em .0625em rgba(0, 0, 0, 0.25), 0 .125em .5em rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(255, 255, 255, 0.1)'
    }

]

async function addShadow(shadow) {
    const li = document.createElement('li')
    li.innerHTML = `<span>#${shadows.indexOf(shadow)}</span>`

    if (typeof shadow === 'object') {
        li.style.boxShadow = shadow.boxShadow


    } else {
        li.style.boxShadow = shadow
    }
    ul.appendChild(li)

    li.addEventListener('click', function (e) {
        const previousHTML = li.innerHTML
        li.classList.add('copied')
        copyToClipboard(`box-shadow: ${li.style.boxShadow};`)
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
