'use strict';

const disaplayMessage = function(message){
    document.querySelector('.message').textContent = message;

}
let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    var guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
         disaplayMessage('⛔ No Number entered!');
    }
    
    else if(guess===secretNumber){
        // document.querySelector('.message').textContent = 'Correct Number!';
        disaplayMessage('Correct Number!');

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';

        if(score>highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    else if(guess!==secretNumber){
        if(score>1){
            disaplayMessage(guess>secretNumber ?'Too High!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message').textContent = 'You Lost!';
            document.querySelector('.score').textContent = 0;
        }
    
    
}
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    disaplayMessage('Start guessing');
    document.querySelector('.score').textContent = score;
    // document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';


})