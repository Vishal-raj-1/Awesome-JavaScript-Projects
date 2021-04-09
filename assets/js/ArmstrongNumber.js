function ArmstrongChecker() {
  value = document.getElementById("inp").value;

  var sum = 0;
  for (var i = 0; i < value.length; i++) {
    sum += Math.pow(parseInt(value[i]), 3);
  }

  if (sum == parseInt(value))
    document.getElementById("text").innerText = "It's an Armstrong Number";
  else
    document.getElementById("text").innerText = "It's not an Armstrong Number";
}
