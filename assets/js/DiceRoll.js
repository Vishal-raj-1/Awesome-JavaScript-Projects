var player1=prompt("Enter player1 Name :");
var player2=prompt("Enter player2 Name :");

document.querySelectorAll("p")[0].textContent=player1;
document.querySelectorAll("p")[1].textContent=player2;

document.querySelector("button").addEventListener("click",playGame);


  function playGame() {

    // Dice 1
    var randomNumber1=Math.random();
    randomNumber1=Math.floor(randomNumber1*6)+1;                 //1-6

    var randomDiceImage="dice" + randomNumber1 + ".png";         //dice1.png
    var  imagesource1= "images/" + randomDiceImage;                //images/dice1.png

    document.querySelector(".img1").setAttribute("src",imagesource1);
    document.querySelector(".img1").classList.add(".rotate");

    // Dice 2

    var randomNumber2=Math.random();
    randomNumber2=Math.floor(randomNumber2*6)+1;

    var imagesource2 ="images/dice" + randomNumber2 + ".png";     //images/dice1.png

    document.querySelector(".img2").setAttribute("src",imagesource2);
    document.querySelector(".img2").classList.add(".rotate");


  var winner;
    if(randomNumber1 > randomNumber2)
      winner=player1 + " Wins";
    else if(randomNumber2 > randomNumber1)
      winner=player2 + " Wins";
    else 
      winner="Draw";


    document.querySelector("h1").textContent=winner;;
   


  }


 