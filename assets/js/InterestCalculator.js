function calculate(){
  p=document.getElementById("p").value;
  r=document.getElementById("r").value;
  t=document.getElementById("t").value;
 simpleInterest=document.getElementById("simpleInterest");
 let si = (p*r*t)/100;
 si=si.toFixed(2);
 const amt = parseFloat(p) + parseFloat(si);
 simpleInterest.innerHTML=`Simple Interest : <b>&dollar; ${si}</b>
 <br>
 Amount : <b>&dollar; ${amt}</b>`;
}

function reset(){
document.getElementById('p').value="";
document.getElementById('r').value="";
document.getElementById('t').value="";
}