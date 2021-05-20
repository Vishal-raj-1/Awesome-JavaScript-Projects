
var plscore = 0;
var coscore = 0;
var visited = 0;

// ---------------------------------Batting Area -----------------------------------------------------

//Number fetching
function goBat0(){
    window.a = document.getElementById("pnumbt0").value;
    goBat();
}

function goBat1(){
    window.a = document.getElementById("pnumbt1").value;
    goBat();
}

function goBat2(){
    window.a = document.getElementById("pnumbt2").value;
    goBat();
}

function goBat3(){
    window.a = document.getElementById("pnumbt3").value;
    goBat();
}

function goBat4(){
    window.a = document.getElementById("pnumbt4").value;
    goBat();
}

function goBat5(){
    window.a = document.getElementById("pnumbt5").value;
    goBat();
}

function goBat6(){
    window.a = document.getElementById("pnumbt6").value;
    goBat();
}



//Batting function
function goBat(){

        //Checking the valid number
    if(a > 6){
        alert("Enter The Valid Number!");
    }

    else{
        //Generating random number
        var compbt = Math.floor(Math.random() * 7);
        document.getElementById("cnumbt").innerHTML= compbt;

        //Checking for same number throw
        if(a == compbt){
            alert("Computer Took Your Wicket");
            //console.log(plscore);

            //Displaying score on navbar
            document.getElementById("navpscore").innerHTML="Player Score = " + plscore;
            
            //Removing batting column
            document.getElementById("batting").remove();

            // Final winning function
            finalWin();

             // Adding count in order to check player is played
            visited = 1;
        }

        //If both dont have same throw
        else{

            //For compensate zero
            if(parseInt(a)===0){
                a = compbt;
            }

            // Adding the score
            plscore = plscore + parseInt(a);

            //Displaying score on navbar
            document.getElementById("navpscore").innerHTML="Player Score = " + plscore;

            //Checking if player have crossed the already computer played one
            if(visited !== 0){
                if(plscore > coscore){
                    document.getElementById("Modalp").click();
                }
            }
        }
        
    }
}


// ------------------------------------------- Bowling Area -----------------------------------------------------

//Number fetching
function goBowl0(){
    window.b = document.getElementById("pnumbt0").value;
    goBowl();
}

function goBowl1(){
    window.b = document.getElementById("pnumbl1").value;
    goBowl();
}

function goBowl2(){
    window.b = document.getElementById("pnumbl2").value;
    goBowl();
}

function goBowl3(){
    window.b = document.getElementById("pnumbl3").value;
    goBowl();
}

function goBowl4(){
    window.b = document.getElementById("pnumbl4").value;
    goBowl();
}

function goBowl5(){
    window.b = document.getElementById("pnumbl5").value;
    goBowl();
}

function goBowl6(){
    window.b = document.getElementById("pnumbl6").value;
    goBowl();
}


//Bowling section
function goBowl(){
    
   
    //Checking for valid number
    if(b > 6){
        alert("Enter The Valid Number");
    }


    else{
        //Generating random number
        var compbl = Math.floor(Math.random() * 7);
        document.getElementById("cnumbl").innerHTML= compbl;

        //Checking for same number throw
        if(b == compbl){
            alert("You Took Computer Wicket");
            //console.log(coscore);

            //Displaying score on navbar
            document.getElementById("navcscore").innerHTML="Computer Score = " + coscore;

             //Removing bowling column
            document.getElementById("bowling").remove();

            // Final winning function
            finalWin();

             // Adding count in order to check player is played
            visited = 1;
        }

         //If both dont have same throw
        else{

            //For compensate zero
            if(compbl===0){
                compbl = parseInt(b);
            }


             // Adding the score
            coscore = coscore + compbl;

            //Displaying score on navbar
            document.getElementById("navcscore").innerHTML="Computer Score = " + coscore;

            //Checking if computer have crossed the already player's played one
            if(visited !== 0){
                if(coscore > plscore){
                    document.getElementById("Modalc").click();
                }
            }

        }
        
    }
}


// Final winning function
function finalWin(){
    
    // Checking if both the player have visited
    if(visited !== 0){
        //Checking player is greater or not
        if(plscore > coscore){

            document.getElementById("Modalp").click();
        }
        
        else{
            
            // Checking computer is greater or not
            if(coscore > plscore){
               
                document.getElementById("Modalc").click();
            }
            
            // Checking for tie
            else{
                alert("Match Tie!");

                //Refreshing the page again
                location.replace('../public/handcricket.html');
            }
        }
    }

    

    
}

// Clearing toss section
function goClear(){
    document.getElementById("toss").remove();
}

