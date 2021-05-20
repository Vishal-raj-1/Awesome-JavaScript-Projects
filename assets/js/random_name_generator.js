function generateNames(){
    console.log("hi");
   var firstNames = ["Cathy", "Jeremy", "Tim", "Alex", "Skeletor", "Marcie", "Theresa", "Blair", "Megan", "Andrew", "Scott", "Dominic", "Daniel", "Paul"];
   var lastNames= ["Jones", "Brown", "Johnson", "Williams", "Jackson", "Redman", "Greene", "Smith", "Miller", "Taylor", "Wilson", "Hall", "Kennedy", "Richman"];

  var val = document.querySelector("#userInput").value;
  if(document.querySelector("#showNames")){
      document.querySelector("#showNames").innerHTML="";
  }
  // var res;
  document.querySelector("#showNames").style.color = "green";
 
  if(val>10 || val<0){
    document.querySelector("#showNames").innerHTML="INVALID INPUT! Enter a number between 0-10";
    document.querySelector("#showNames").style.color="red";
  }
  else{
  var i;
   document.querySelector("#showNames").style.letterSpacing = "0px";
  for (i = 0; i < val; i++) {
      console.log("inside loop");
    var randomFirstIdx = Math.floor(Math.random() * firstNames.length);
    var randomLastIdx = Math.floor(Math.random() * lastNames.length);
    var name = firstNames[randomFirstIdx] + " " + lastNames[randomLastIdx];
    console.log(name);
    document.querySelector("#showNames").innerHTML += name + " <br>";
  }
  }
   
}






