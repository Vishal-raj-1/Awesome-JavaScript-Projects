const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const height_field = document.getElementById("height");
  const width_field = document.getElementById("weight");
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector(".final");

  if(isNaN(height) && isNaN(weight)) {
    results.classList.remove("results");
    results.classList.add("error");
    results.innerText = "Please provide valid data!";
  }
  
  if (isNaN(height) || height < 0) {
    //NaN !== NaN
    document.querySelector(".final").classList.remove("results");
    document.querySelector(".final").classList.add("error");
    document.querySelector(".final").innerHTML = "Please provide a valid height!";
  }

  else if (isNaN(weight) || weight < 0) {
    document.querySelector(".final").classList.remove("results");
    document.querySelector(".final").classList.add("error");
    results.innerHTML = "Please provide a valid weight!";
  }
  
  else {
    //calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //display the results
    document.querySelector(".final").classList.remove("error");
    document.querySelector(".final").classList.add("results");
    results.innerHTML = `<span>${bmi}</span>`;
    height_field.value = "";
    width_field.value = "";
  }

});
