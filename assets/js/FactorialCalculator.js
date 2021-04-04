function factorial () {

    var x = document.getElementById("number").value;

    var fact = 1;
    for (var i=1; i<=x; i++) {
        fact = fact * i;
    }

    document.getElementById("answer").innerHTML = x + "! = " + fact;
}