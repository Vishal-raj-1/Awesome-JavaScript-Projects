
document.getElementById('button').onclick = function() {
 
 
    var randomnumber1=Math.floor((Math.random() * 6)+ 1 );
    
    var randomimage1="../assets/Images/dice/dice" +randomnumber1 +".png"
    
    var image1=document.querySelectorAll("img")[0];
    
    image1.setAttribute("src",randomimage1)
    
    
    var randomnumber2=Math.floor((Math.random() * 6)+ 1 );
    var randomimage2="../assets/Images/dice/dice" +randomnumber2 +".png"
    
    
    var image2=document.querySelectorAll("img")[1];
    
    image2.setAttribute("src",randomimage2)
    
    
    
    if(randomnumber1>randomnumber2){
        document.querySelector("h1").innerHTML="Player 1 wins"
    
    }else if(randomnumber1<randomnumber2){
        document.querySelector("h1").innerText="Player 2 wins"
    }
    
    else{
        document.querySelector("h1").innerHTML="Draw"
    }
    };