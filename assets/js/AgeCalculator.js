var e = new Date();
var o = e.toISOString();
var t = o.split("T")
document.getElementById('bd').value = t[0];

function cal() {
    if (dob.value == "") {
        alert("Please Input Date Of Birth");
    } else if (dob.value > bd.value) {
        alert("Please Enter a Valid Date");
    } else {
        document.getElementById('bottom').style.display = "block";
        var a = new Date(bd.value);
        var b = new Date(dob.value);
        var r = a.getTime() - b.getTime();
        var u = new Date(r);
        var v = new Date(0);
        var year = u.getFullYear() - v.getFullYear();
        var month = u.getMonth() - v.getMonth();
        var day = u.getDate() - v.getDate();
        document.getElementById('age').innerHTML = year + " Years ," + month + " Months ," + day + " Days .";
        var m = (year * 12) + month
        document.getElementById('months').innerHTML = m + " Months, " + day + " Days .";
        var w = (m * 4.345);
        w = Math.round(w);
        document.getElementById('weeks').innerHTML = w + " Weeks, " + day + " Days ."
        var d = (w * 7) + day;
        document.getElementById('days').innerHTML = d + " Days."
        var h = d * 24;
        document.getElementById('hours').innerHTML = h + " Hours."
        var mi = h * 60;
        document.getElementById('minutes').innerHTML = mi + " Minutes."
        var s = mi * 60;
        document.getElementById('seconds').innerHTML = s + " Seconds."
    }
}
