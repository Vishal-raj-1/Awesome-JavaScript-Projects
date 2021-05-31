// Random Number-1 from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Random Images Sourece-1
var randomImageSource1 = "../assets/Images/dice" + randomNumber1 + ".png";

// Set Attribute for Random Image Source-1
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1)



// Random Number -2 from 1 to 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Random Images Sourece-2
var randomImageSource2 = "../assets/Images/dice" + randomNumber2 + ".png";

// Set Attribute for Random Image Source-2
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Changing the Inner-HTML Test 

// If Player-1 Wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins! !";
}

// If Player-2 Wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}

// If Match is draw
else {
    document.querySelector("h1").innerHTML = " 🥳Draw🥳";
}