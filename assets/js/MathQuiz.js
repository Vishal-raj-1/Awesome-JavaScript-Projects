let n1 = Math.floor(Math.random()*100+1);
 let n2 = Math.floor(Math.random()*100+1);

document.getElementById('v1').value=n1;
document.getElementById('v2').value=n2;

let ans=n1+n2;
const jsGame = () =>{

    var usera =document.getElementById('answer').value;
    if(usera == ans){
        alert('Well Done ! Your Answer is Coreect, move to next');
    }
    else{
        alert("Correct answer is "+ ans+" .Try Again . ");
    }
    document.getElementById('answer').value=" ";
     n1 = Math.floor(Math.random()*100+1);
     n2 = Math.floor(Math.random()*100+1);

    document.getElementById('v1').value=n1;
    document.getElementById('v2').value=n2;

 ans=n1+n2;
}