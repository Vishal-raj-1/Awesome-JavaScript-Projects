// random value generated 
var y = Math.floor(Math.random() * 10 + 1); 
      
// counting the number of guesses 
// made for correct Guess 
var guess = 1; 

document.getElementById("submitguess").onclick = function(){ 

    // number guessed by user      
    var x = document.getElementById("guessField").value; 

    if(x == y) 
    {   
        document.getElementById("resul").innerHTML ="CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "+ guess + " GUESS ";   
        document.getElementById("rel").innerHTML ="Please reload the page to start a new game. ";
    } 
    else if(x > y) /* if guessed number is greater 
                    than actual number*/ 
    {     
        guess++; 
        document.getElementById("resul").innerHTML ="OOPS SORRY!! TRY A SMALLER NUMBER"; 
    } 
    else
    { 
        guess++; 
        document.getElementById("resul").innerHTML ="OOPS SORRY!! TRY A GREATER NUMBER"; 
    } 
} 
