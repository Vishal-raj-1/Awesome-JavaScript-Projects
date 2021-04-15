function validateForm() {
	var flag = 0;
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms["myForm"]["lname"].value;
    var dob = document.forms["myForm"]["dob"].value;
    var econ = document.forms["myForm"]["econ"].value;
    var add = document.forms["myForm"]["add"].value;
    var pno = document.forms["myForm"]["pno"].value;
    if (fname == "") {
    	document.getElementById("msg1").innerHTML = " *Fill in your first name";
        flag = 1;  
    }
    if (lname == "") {
    	document.getElementById("msg2").innerHTML = " *Fill in your last name";
        flag = 1;
    }
    if (dob == "") {
    	document.getElementById("msg3").innerHTML = " *Fill in your date of birth";
        flag = 1;
    }
    if (pno == "") {
    	document.getElementById("msg4").innerHTML = " *Fill in your phone number";
        flag = 1;
    }
    if (add == "") {
    	document.getElementById("msg5").innerHTML = " *Fill in your address";
        flag = 1;
    }
    if (econ == "") {
    	document.getElementById("msg6").innerHTML = " *Fill in your emergency contact";
        flag = 1;
    }
    if (flag == 1)
    return false;

}