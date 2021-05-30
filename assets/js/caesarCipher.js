function encrypt() {
    var input = document.getElementById("input").value;
    var key = parseInt(document.getElementById("key").value);
    if (key >= 999999999 || key <= -9999999999) {
        generateWarning("Enter Proper key");
    }

    if (input.length == 0) {
        generateWarning("Please enter a string ")
    }
    else {
        var n_string = " ";

        for (k = 0; k < input.length; k++) {

            var x = input.charCodeAt(k) + key;

            n_string += String.fromCharCode(x);

        }

        document.getElementById("output").innerHTML = "<center><b><u>After Encryption :</u></b></center><br>" + n_string;
    }
}

function decrypt() {
    var input = "";
    var input = document.getElementById("input").value;

    if (input.length == 0) {
        generateWarning("Please enter a string ");
    }
    else {
        var key = parseInt(document.getElementById("key").value);
        if (key >= 999999999 || key <= -9999999999) {
            generateWarning("Enter Proper key");
        }
        var n_string = " ";

        for (k = 0; k < input.length; k++) {

            var x = input.charCodeAt(k) - key;

            n_string += String.fromCharCode(x);

        }

        document.getElementById("output").innerHTML = "<center><b><u>After Decryption :</u></b></center><br>" + n_string;
    }

}
function generateWarning(warningMessage) {
    //To get the clicking sound
    document.getElementById("click").play();
    document.getElementById("warning").style.visibility = "visible";
    document.getElementById("txt").innerHTML = warningMessage;
    document.getElementById("warning").style.animation = "pop .27s ease";
}


function ok() {
    document.getElementById("warning").style.animation = ""; document.getElementById("warning").style.visibility = "hidden";
}