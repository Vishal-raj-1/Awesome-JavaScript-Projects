const animation = document.querySelector('.animated-area');

function bullets(){
    const meteor = document.createElement('span');
    meteor.style.left = Math.random() * innerWidth + 'px';
    animation.append(meteor);

    setTimeout(()=>{
        meteor.remove();
    },2000);
}

setInterval(bullets,100);


// Changing Background Color

var btn = document.getElementById('btn-click');
var mainDiv = document.querySelector('.animated-area')

console.log(mainDiv);

function onBtnClick(){
    mainDiv.style.backgroundColor = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')'
}

btn.addEventListener('click', onBtnClick)