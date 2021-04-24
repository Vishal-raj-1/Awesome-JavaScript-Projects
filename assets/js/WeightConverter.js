const check = () => {
    let x;
    x= document.getElementById('input').value
    if(isNaN(x) || x<=0){
        window.alert("Enter number grater than zero")
    }
    else{
        var num;
        num = x * 1000;
        document.getElementById('gram').value = num + " g";
        num = x * 2.2046;
        document.getElementById('pound').value = num + " pounds";
        num = x * 1000000;
        document.getElementById('milligram').value = num + " ml";
    }
}
const fun=()=> {
    document.getElementById('gram').value = 0;
    document.getElementById('pound').value = 0;
    document.getElementById('milligram').value = 0;
    document.getElementById('input').value = NaN;
}