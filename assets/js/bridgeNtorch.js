/*
Solution's explanation :

           Understand the question from the post link given in the comment or in HTML tab.

assume 6 people : 1 2 3 4 5 6

step 1 : send the pair with smallest time and then bring the person with smallest time
    i.e P1-P2(crosses) & P1(returns)
    time = 3sec;
    
step 2 : send the pair that takes most of the time and bring the person with smallest time
    i.e P6-P5(crosses) & P2(returns)
    time = 11sec;
    
then repeat step 1 and 2 until all are on the other side thus

     i.e P1-P2(crosses) & P1(returns)
     time = 14sec;
     
     i.e P4-P3(crosses) & P2(returns)
     time = 20sec;
     
     i.e P1-P2(crosses)
     time = 22sec;
          
and so all are able to cross and time is 22sec
        
problem solved !👍  
        
*/

"use strict"
window.onload = function () {
    document.getElementById("entry").style.width = "86vw";
    document.getElementById("input").style.opacity = "1";

}

//sorting order
const asc = (a, b) => { return a - b; };
var output, num, showOutput, err;
var sideL, sideR;

function cross() {

    num = document.getElementById("input").value;
    output = "";
    showOutput = document.getElementById("output");
    err = document.getElementById("errorMsg");

    err.innerText = "";
    if (num.length == 0 || num.match(/[^0-9]/i)) {
        err.innerText = "Enter a number !"
        showOutput.innerHTML = `<p><br><b>PROBLEM : <br> Crossing the bridge</b><br><br>
Write a program to print the minimum time taken to get N people from one side of a bridge to the other if 
<br><br>
<b>a)</b><i>The bridge can only hold two people at a time.</i><br><br>
<b>b)</b><i>It's dark and the only flashlight must be carried while crossing.</i><br><br>
<b>c)</b><i>People are numbered from 1 to N. The k-th person takes k seconds to cross the bridge.</i><br><br>
<b>d)</b><i> A pair crosses at the speed of the slowest member.</i><br><br>
<b>For example:</b><br>
Input: 4 <br>
Output: 11<br><br>i.e<br>
<i>1-3 cross(3), 1 returns(1)<i/><br>
<i>1-4 cross(4), 1 returns(1)</i><br>
<i>1-2 cross(2)</i><br>
<i>SUM : 3 + 1 + 4 + 1 + 2 = 11</i><br></p>`;
    } else {
        //initializing both side array
        sideL = []; sideR = [];

        //filling left side of river array with people
        for (let i = 0; i < num; i++) {
            sideL[i] = i + 1;
        }
        output = "<br><b>Solution :</b> <br><div id = 'sec'>";

        //executing alogrithm
        make_pair(sideL, sideR);

        showOutput.innerHTML = output;
    }

}

//function to make pairs
const make_pair = (l, r) => {

    //initial sum 
    let sum = 0;
    let text = "";

    while (l.length != 0) {

        //sending the smallest 
        l.sort(asc);
        r.push(l[0]);
        r.push(l[1]);
        text += "P" + l[0] + "-P" + l[1] + "<small>(crosses)</small>";
        //adding in sum
        sum += l[1];
        l.shift();
        l.shift();

        //bringing the smallest back  
        if (l.length != 0) {
            r.sort(asc);
            l.push(r[0]);
            text += " & P" + r[0] + "<small>(returns)</small><br><br>";
            sum += r[0];
            r.shift();
        }

        //sending the largest pair
        if (l.length != 0) {
            l.sort(asc);
            r.push(l[l.length - 1]);
            r.push(l[l.length - 2]);
            text += "P" + l[l.length - 1] + "-P" + l[l.length - 2] + "<small>(crosses)</small>";
            sum += l[l.length - 1];
            l.pop();
            l.pop();

        }

        //bringing the smallest back
        if (l.length != 0) {
            r.sort(asc);
            l.push(r[0]);
            text += " & P" + r[0] + "<small>(returns)</small><br><br>";
            sum += r[0];
            r.shift();
        }
    }
    // console.log(sum);
    output += "Total time : " + sum + "<small> sec</small><br><br>" + text + "</div>";
}


//on hitting enter
addEventListener("keydown", function (event) {

    if (event.keyCode === 13) {
        cross();
        event.preventDefault();
        window.location.href = "#nothing";
    } return null;
}
);