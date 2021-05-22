function fun() {
	var val = document.getElementById("fld").value;
	if (val == "") {
		document.getElementById("result").innerHTML = "Type something !";
		return false;
	} else {
		val=val.toLowerCase();
		val = val.split("");
		for (var i = 0; i < val.length; i++) {
			if (val[i] == " ") {
				val.splice(i, 1);
			}
		}
		val = val.join("");
		console.log(val);
		var temp = val.split("").reverse();
		for (var i = 0; i < temp.length; i++) {
			if (temp[i] == " ") {
				temp.splice(i, 1);
			}
		}
		temp = temp.join("");
		console.log(temp);
		if (val == temp) {
			document.getElementById("result").innerHTML = "Yup,It's a Palindrome !";
			return false;
		} else {
			document.getElementById("result").innerHTML = "Oh,no it's not a Palindrome!";
			return false;
		}
	}
}

function myFunction() {
	document.getElementById("form").reset();
	document.getElementById("result").innerHTML = "";
 }
