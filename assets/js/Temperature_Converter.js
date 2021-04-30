var f;
var c;
var k;

function fahrenheit () {
    f = prompt ("Temperature in Fahrenheit");

    c = ( f - 32 ) / 1.8;
    c =parseFloat(c.toFixed(2));

    k = c + 273.15;
    k = parseFloat(k.toFixed(2));

    display();
}

function celsius () {
    c = prompt ("Temperature in Celsius");

    k = parseFloat(c) + 273.15; 
    // since there is var it is not specified that c is string or no. so due to plus sign 
    //it will be treated as string in other symbols it is treated as no. 
    //so we have to use parseInt() for conversion
    k = parseFloat(k.toFixed(2));

    f = ( c * 1.8 ) + 32;
    f = parseFloat(f.toFixed(2));

    display();
}

function kelvin () {
    k = prompt ("Temperature in Kelvin");

    c = k - 273.15;
    c =parseFloat(c.toFixed(2));

    f = (c * 1.8 ) + 32;
    f = parseFloat(f.toFixed(2));

    display();
}

function display () {
    document.getElementById("fah").innerHTML = f + " °F";
    document.getElementById("cel").innerHTML = c + " °C";
    document.getElementById("kel").innerHTML = k + " K";
}