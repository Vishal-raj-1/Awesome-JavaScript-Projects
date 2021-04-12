const calc = () => {
    let maths = document.getElementById("maths").value;
    let physics = document.getElementById("physics").value;
    let chemistry = document.getElementById("chemistry").value;
    let biology = document.getElementById("biology").value;
    if(maths>100 || physics>100 || chemistry>100 || biology>100){
        document.getElementById("result").innerHTML = "Enter valid numbers"
    }
   else{
    let grade = "";
    let total = parseFloat(maths) + parseFloat(physics) + parseFloat(chemistry) + parseFloat(biology);
    let precentage = (total / 400) * 100;
  
    if (precentage >= 80) {
        garde = "GRADE A";
    }
    else if (precentage >= 60) {
        grade = "GRADE B";
    }
    else if (precentage >= 40) {
        grade = "GRADE C";
    }
    else {
        grade = "NOT FOUND";
    }

    document.getElementById("result").innerHTML = "Out of 400 your total is " + total + " and percentage is " + precentage + " Your grade is " + grade;



   }



}
