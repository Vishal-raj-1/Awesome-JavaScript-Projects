//grab selection of head or tail
const buttons = document.querySelectorAll('button');
//set values for heads and tails
let heads = 1;
let tails = 0;
let userScore = 0;
let computerScore = 0;


function displaySelections(user, computer){
    const playerSelection = document.querySelector('#player-selection');
    const computerSelection = document.querySelector('#computer-selection');
    if (user === 'heads'){
        playerSelection.style.color = '#74AC27';
    }
    if (user === 'tails'){
        playerSelection.style.color = '#FF8E1A';
    }
    if (computer === 'heads'){
        computerSelection.style.color = '#74AC27';
    }
    if (computer === 'tails'){
        computerSelection.style.color = '#FF8E1A';
    }
    playerSelection.innerHTML = `${user}`;
    computerSelection.innerHTML = `${computer}`
}

function displayRandom(random){
    const displayResult = document.querySelector('#image');
    console.log(random);
    
        if (random === 1){
            displayResult.style.backgroundImage =  "url('../assets/Images/heads.png')";
            
        } else {
            displayResult.style.backgroundImage =  "url('../assets/Images/tails.png')";
        }    
}

function tallyScore(random, userPick, computerPick){
    //select scoreboard from DOM
    const playerDisplay = document.querySelector('#player-score');
    const computerDisplay = document.querySelector('#computer-score');
    const winner = document.querySelector('#winner');

    if (userPick === random){
        userScore++;
    }
    if (computerPick === random){
        computerScore++;
    }
    playerDisplay.textContent = `${userScore}`;
    computerDisplay.textContent = `${computerScore}`;
    
    if (userScore === 5 && computerScore === 5){
        window.alert("It's a Tie");
        location.reload();

    } else if (userScore === 5){
        window.alert("You Win!!!");
        location.reload();
        
    } else if (computerScore === 5){
        window.alert("Computer Wins!!!");
        location.reload();
       
    }
}

//add an event listener to the buttons
buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        //Computer randomly select heads or tails
        const random = Math.round(Math.random());
        //Computer selects a random 'heads' or 'tails
        const computerPick = Math.round(Math.random());
        //Record computers selection
        let computerSelection;
        if (computerPick === 1){
            computerSelection = 'heads';
        } else {
            computerSelection = 'tails';
        }
        
        //spin the coin
        const spin = document.querySelector('#image');
        spin.classList.add('animate');

        //Record users selection
        const userSelection = e.target.id;
        let userPick;

        if (userSelection === 'heads'){
            userPick = 1;
        } else if (userSelection === 'tails'){
            userPick = 0;
        }

        //displays the player and computer's selection 
        //in the Selected portion of DOM
        displaySelections(userSelection, computerSelection);
        displayRandom(random);

       
        
        //Adds the score of the player and computer
        setTimeout(function(){
            tallyScore(random, userPick, computerPick);
            //resets animations
            document.querySelector('#image').classList.remove('animate');
        }, 2000);

    })
})

