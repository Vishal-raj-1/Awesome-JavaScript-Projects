var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
 };
 function gene() {
    document.getElementById('Element').style.display = 'block';
    var name = document.getElementById("name").value;
    var email = document.getElementById("em").value;
    var phone = document.getElementById("tele").value;
    var dob = document.getElementById("date").value;
    var gen = document.getElementById("gen").value;
    var profe = document.getElementById("prof").value;
    var language = document.getElementById("lang").value;
    if (name == '' || email == '' || phone == '' || dob == '' || gen=='' || profe=='' || language=='') {
        alert("Please fill all details");
    }
    else {
        document.getElementById('Element').style.display = 'block';
        document.getElementById("n").innerHTML ="<strong>Name: </strong> "+name;
        document.getElementById("e").innerHTML = "<strong>Email: </strong> "+email;
        document.getElementById("p").innerHTML = "<strong>Phone: </strong> "+phone;
        document.getElementById("d").innerHTML = "<strong>Date of Birth: </strong> "+dob;
        document.getElementById("g").innerHTML = "<strong>Gender: </strong> "+gen;
        document.getElementById("pr").innerHTML = "<strong>Profession: </strong> "+profe;
        document.getElementById("l").innerHTML = "<strong>Language: </strong> "+language;
        
        
    }
 }
 function res() {
    document.getElementById('Element').style.display = 'none';
    document.getElementById("output").value = '';
    document.getElementById("name").value = '';
    document.getElementById("em").value = '';
    document.getElementById("tele").value = '';
    document.getElementById("date").value = '';
    document.getElementById("gen").value='';
    document.getElementById("prof").value='';
    document.getElementById("lang").value='';
 }
 