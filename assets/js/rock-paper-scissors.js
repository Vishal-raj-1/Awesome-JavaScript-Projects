let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user_score');
const computerScore_span = document.getElementById('comp_score');
const score_board_div = document.querySelector(".score_board");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const btn = document.getElementById('reset_button');
const user_img = document.querySelector('.card>h2');
const comp_img = document.querySelector('.card_right>h2');

function reset(){
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "Let's Test Your Luck";
    user_img.innerHTML = "";
    comp_img.innerHTML = "";
}

function win(user_turn , computer_turn){
    userScore+=1;
    computerScore+=0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //console.log("Wins");
    // console.log(userScore + " "+ computerScore);
    result_div.innerHTML="Congratulations! You have won.";
}

function lose(user_turn , computer_turn){
    computerScore+=1;
    userScore+=0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //console.log("Lose");
    // console.log(userScore + " "+ computerScore);
    result_div.innerHTML="Sssshh! , You have lost.";
}

function draw(user_turn , computer_turn){
    userScore+=0;
    computerScore+=0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //console.log("Draw");
    // console.log(userScore + " "+ computerScore);
    result_div.innerHTML="Ohhh , It's a draw.";
}


function game(user_turn){
    const list = ['r' , 'p' , 's'];
    const computer_turn = list[Math.floor(Math.random()*3)];
    if(computer_turn=='r'){
        comp_img.innerHTML = 'Rock';
    }
    else if(computer_turn=='p'){
        comp_img.innerHTML = 'Paper';
    }else{
        comp_img.innerHTML = 'Scissors';
    }
     
    // console.log("computer pressed - "+list[computer_turn]);
    // console.log("user pressed - " + user_turn);
    switch(user_turn + computer_turn){
        case "rs":
        case "sp":
        case "pr":
            win(user_turn , computer_turn);    
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(user_turn , computer_turn);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(user_turn , computer_turn);
            break;
    }
}

btn.addEventListener('click' , function(){
    // console.log('clicked on reset');
    reset();
});

function main(){
rock_div.addEventListener('click',function(){
    game('r');
    // console.log('clicked on rock');
    user_img.innerHTML = 'Rock';
});
paper_div.addEventListener('click',function(){
    game('p');
    // console.log('clicked on paper');
    user_img.innerHTML = 'Paper';    
});
scissors_div.addEventListener('click',function(){
    game('s');
    // console.log('clicked on scissors');
    user_img.innerHTML = 'Scissors';
});
}

main();

