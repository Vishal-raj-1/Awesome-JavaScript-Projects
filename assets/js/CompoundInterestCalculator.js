function calculate(){
    var p=Number(document.getElementById("p").value);
    var r=Number(document.getElementById("r").value);
    var t=Number(document.getElementById("t").value);
    var tp=document.getElementById("tp").value;
    var mt=0;
    var n=0;
    if(tp=="Yearly"){
        mt=t*1;
        n=1;
    }
    else if(tp=="Half Yearly")
    {
        mt=t*2;
        n=2;
    }
    else if(tp=="Quarterly")
    {
        mt=t*4;
        n=4;
    }
    else if(tp=="Monthly")
    {
        mt=t*12;
        n=12;
    }
    var total=(p*Math.pow(1+(r/(n*100)),mt));
    var ci=total-p;
    document.getElementById("ta").value = total.toFixed(2);
    document.getElementById("ci").value = ci.toFixed(2);
}