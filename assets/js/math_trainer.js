 var res = "question not found";
 
 function submitAnswer(){
  //  console.log(res);
   
   document.querySelector("#answerBox").innerHTML = "";

   var userInputVal = document.querySelector("#userInput");
   var warningMsg = document.querySelector("#warning");
   
  //  console.log(userInputVal.value);
   if (!userInputVal.value) {
     warningMsg.innerHTML = "PLEASE ENTER YOUR ANSWER OR GO TO NEXT QUESTION ";
   }
   else if (userInputVal.value == res) {
     warningMsg.innerHTML = "WELL DONE! GO TO NEXT QUESTION";
     document.getElementById("warning").style.color = "green";
    //  console.log("well done");
   } 
   else {
     warningMsg.innerHTML = "WRONG ANSWER TRY AGAIN";
     document.getElementById("warning").style.color = "red";
   }
 }
 
 function nextQues(){

    if(document.querySelector("#answerBox")){
      document.querySelector("#answerBox").innerHTML="";
    }
      if (document.querySelector("#questionBox")) {
        document.querySelector("#questionBox").innerHTML = "";
      }
      if (document.querySelector("#warning")) {
        document.querySelector("#warning").innerHTML = "";
      }

      document.querySelector("#userInput").value=null;
      
      
      var operators=["+","-","*","/"];

      var randomOperand1=Math.floor(Math.random()*100);
      var randomOperand2=Math.floor(Math.random()*100);
      var randomOperator= operators[Math.floor(Math.random()*operators.length)];

      switch (randomOperator) {
        case "+":
          res = randomOperand1 + randomOperand2;
          break;
        case "-":
          res = randomOperand1 - randomOperand2;
          break;
        case "*":
          res = randomOperand1 * randomOperand2;
          break;
        case "/":
          res = randomOperand1 / randomOperand2;
          break;
      }
      var isFloat = Number.isInteger(res) ? false : true ;
      if(isFloat){
        res=res.toFixed(2);
      }


      var quesBoxValue=document.querySelector("#questionBox");
     quesBoxValue.innerHTML="What is ".concat(randomOperand1  ,randomOperator ,randomOperand2 ,"?");
      quesBoxValue.style.color="blue";
  }

  function viewAnswer(){
    if (!document.querySelector("#userInput").value) {
       document.querySelector("#warning").innerHTML =
        "GUESS AN ANSWER"
     }
     else{
       document.querySelector("#warning").innerHTML ="";
      document.querySelector("#answerBox").innerHTML=("THE CORRECT ANSWER ").concat(res);
  }
}

nextQues();






















// var tempResult = 1.01;

// function doMath(a, b, c) {
//   switch (a) {
//     case "+":
//       return b + c;
//     case "-":
//       return b - c;
//     case "*":
//       return b * c;
//     case "/":
//       return b / c;
//   }
// }

// function submitAnswer(result) {
//   document.querySelector("#mathForm").addEventListener("submit", function(e) {
//     e.preventDefault();
//     var userAnswer = document.querySelector("#answerInput").value;
//     var bool = (result == userAnswer) ? true : false;

//     if (bool === true) {
//       document.body.style.backgroundColor = "#34a853";
//       setTimeout(function() {
//         document.body.style.backgroundColor = "#333";
//       }, 1000);
//       document.querySelector("#answerInput").value = "";
//       randomCreator();
//     } else {
//       document.body.style.backgroundColor = "#dc3545";
//       setTimeout(function() {
//         document.body.style.backgroundColor = "#333";
//       }, 1000);
//     }
//   });
// }

// function randomCreator() {
//   if (document.querySelector(".correctAnswer")) {
//     document.querySelector(".correctAnswer").remove();
//   }

//   var operators = ["+", "-", "*", "/"];
//   var randomIntOne = parseInt((Math.random() * 100), 10);
//   var randomIntTwo = parseInt((Math.random() * 100), 10);
//   var randomOperator = operators[Math.floor(Math.random() * operators.length)];

//   var el = document.querySelector(".questionText");
//   el.innerHTML = ("What is ").concat(randomIntOne, " ", randomOperator, " ", randomIntTwo, "?");

//   var preliminaryResult = doMath(randomOperator, randomIntOne, randomIntTwo);
//   var isFloat = (!Number.isInteger(preliminaryResult)) ? true : false;
//   var result = (isFloat === true) ? preliminaryResult.toFixed(2) : preliminaryResult;
//   tempResult = result;

//   var userAnswerInput = document.querySelector("#answerInput");
//   if (userAnswerInput.addEventListener) {
//     userAnswerInput.addEventListener("submit", submitAnswer(result), false);
//   } else if (userAnswerInput.attachEvent) {
//     userAnswerInput.attachEvent("onsubmit", submitAnswer(result));
//   }

//   return result;
// }

// function answerHelp() {
//   if (!document.querySelector(".correctAnswer")) {
//     document.querySelector(".mathQuestion").innerHTML += ("<p class='text-center correctAnswer m-0 mb-3'>The Answer is " + tempResult + "</p>");
//   }
// }
