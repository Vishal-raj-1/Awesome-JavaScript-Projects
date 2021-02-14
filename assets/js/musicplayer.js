window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors=[
        'rgb(119, 211, 26)',
        'rgb(101, 123, 172)',
        'rgb(190, 109, 32)',
        'rgb(139, 67, 211)',
        'rgb(167, 51, 147)',
        'rgb(255, 0, 47)'
    ];

    pads.forEach( (pad, index) =>{
        pad.addEventListener( 'click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    const createBubbles = (index) =>{
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation= 'jump 1.1s ease';
        bubble.addEventListener("animationend", function(){
                visual.removeChild(this);
        });
    };
 });