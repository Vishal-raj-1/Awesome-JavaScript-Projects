
var lsgwoerter = [
    {
    'word': ["S","O","N","G"],
    'hint': 'It has lot many varities you can switch according to your mood ;)'
    },
    {
      'word':["D", "Y", "N", "A", "M","I","T","E"],
      'hint': "I'm diamond you know i glow up!"
    },
    {
     'word': ["P","E","R","F","E","C","T"],
     'hint' : "We are still kids, but we're so in love fighting against of all..."
    },
    {
     'word': ["S","E","N","O","R","I","T","A"],
     'hint': "... i wish i could pretend i didn't need yah ..."
    },
    {
     'word': ["T","H","U","N","D","E","R"],
     'hint':"Not a yes sir, not a follower \n Fit the box, fit the mold ...... \n I was lighting before the thunder..."
    },
    {
     'word': ["S","U","C","K","E","R"],
     'hint': "....You are medicine in the pain, the tattoo inside my brain..."
    },
    {
     'word': ["S","P","E","E","C","H","L","E","S","S"],
     'hint':"I won't be silenced, you can't keep me quite won't sremble...."
    },
    {
      'word': ["S","O","R","R","Y"],
      'hint':"Cause I'm, missing more than just your body, ohhh....."
     },
     {
      'word': ["W","O","L","V","E","S"],
      'hint':"In your eyes there is heavy blue one to love, and one to lose..."
     },
     {
      'word': ["H","E","L","L","O"],
      'hint':"They say that time's suppose to heal you but I ain't done much healing....."
     },
     
     
    ]

  var random = Math.floor((Math.random()*(lsgwoerter.length-1))); 
  const suggestion=document.getElementsByName("guess");
  var lsgwort = lsgwoerter[random]['word'];
  var hint=lsgwoerter[random]['hint'];
  
  var ratewort = new Array(lsgwort.length);
  var fehler = 0;

  for (var i = 0; i < ratewort.length; i++){
    ratewort[i] = "_ ";
  }
  
  // prints the guessfield
  function printRatewort(){
    for (var i = 0; i < ratewort.length; i++){
    var ratefeld = document.getElementById("ratefeld");
    var buchstabe = document.createTextNode(ratewort[i]);
    ratefeld.appendChild(buchstabe);
    }
    
  }
  
  function show_hint(){
    window.alert(hint)
  }
  
  //checks if the the letter provided by the user matches one or more of the letters in the word
  var pruefeZeichen = function(){
    var f = document.rateformular; 
    var b = f.elements["ratezeichen"]; 
    var zeichen = b.value; // the letter provided by the user
    zeichen = zeichen.toUpperCase();
    for (var i = 0; i < lsgwort.length; i++){
      if(lsgwort[i] === zeichen){
        ratewort[i] = zeichen + " ";
        var treffer = true;
      }
    b.value = "";
    }

  
    
    //deletes the guessfield and replaces it with the new one
    var ratefeld = document.getElementById("ratefeld");
    ratefeld.innerHTML=""; 
    printRatewort();
   // suggestion.classList.remove('hide');
    // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
    if(!treffer){
      var gerateneBuchstaben = document.getElementById("gerateneBuchstaben");
      var buchstabe = document.createTextNode(" " + zeichen);
      gerateneBuchstaben.appendChild(buchstabe); 
      fehler++;
      
    }
    
    //checks if all letters have been found
    var fertig = true;
    for (var i = 0; i < ratewort.length; i++){
      if(ratewort[i] === "_ "){
        fertig = false;
      }
    }
    if(fertig){
      window.alert("Congratulations!! You guessed it correct.");
    }
    
    //once you got six wrong letters, you lose
    if(fehler === 6){
      window.alert("Oops, try again!");
    }
  }
  
  function init(){
    printRatewort();
  }
  
  window.onload = init;