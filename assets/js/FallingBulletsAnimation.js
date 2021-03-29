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