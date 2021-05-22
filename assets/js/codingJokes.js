"use strict"

var ran = 0;

//for new joke
function next() {
    //To get the clicking sound
    var aud = document.getElementById("click");

    aud.volume = .56; aud.play();

    //to generate random number
    ran = Math.floor(Math.random() * jokes.length);

    //to put new jokes on screen
    document.getElementById("joke").innerText = jokes[ran];

}

//To share on whatsapp
function share() {
    window.location.href = "https://api.whatsapp.com/send?text=" + jokes[ran];
}

//jokes
var jokes =
    [
        'Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”',

        'Two bytes meet.  The first byte asks, “Are you ill?” The second byte replies, “No, just feeling a bit off.”',

        ' Q. How did the programmer die in the shower?                    A. He read the shampoo bottle instructions: Lather. Rinse. Repeat.',

        ' How many programmers does it take to change a light bulb?None – It’s a hardware problem',

        ' Why do programmers always mix up Halloween and Christmas?Because Oct 31 equals Dec 25.',

        '“Knock, knock.” “Who’s there?” very long pause…. “Java.” ',

        ' A programmer walks to the butcher shop and buys a kilo of meat.  An hour later he comes back upset that the butcher shortchanged him by 24 grams.'
        ,

        'There are only 10 kinds of people in this world: those who know binary and those who don’t. ',

        'All programmers are playwrights, and all computers are lousy actors.',

        'Debugging: Removing the needles from the haystack. ',

        ' The computer is mightier than the pen, the sword, and usually, the programmer.',

        '“I just saw my life flash before my eyes and all I could see was a close tag…”. ',

        ' The generation of random numbers is too important to be left to chance.',

        ' Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.',

        'Q: What is 0010101015 in binary?  Ans: A major glitch! ',

        "Unix is user friendly. It's just very particular about who its friends are."
    ]

