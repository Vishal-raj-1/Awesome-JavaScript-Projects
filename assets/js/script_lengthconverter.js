document.getElementById('inputCm').addEventListener('input', function(e){
	var cm = e.target.value;
	console.log(cm);
	document.getElementById('inputIn').value = (cm/2.54).toFixed(10);
	document.getElementById('inputM').value = (cm/100).toFixed(10);
    document.getElementById('inputKM').value = (cm/100000).toFixed(10);
    document.getElementById('inputmm').value = (cm*10).toFixed(10);
});

document.getElementById('inputIn').addEventListener('input', function(e){
	var inches = e.target.value;
	console.log(inches);
	document.getElementById('inputCm').value = (inches/0.3937008).toFixed(10);
	document.getElementById('inputM').value = (inches/39.37008).toFixed(10);
    document.getElementById('inputKM').value = (inches/39370).toFixed(10);
    document.getElementById('inputmm').value = (inches/0.03937008).toFixed(10);
});

document.getElementById('inputM').addEventListener('input', function(e){
	var meters = e.target.value;
	console.log(meters);
	document.getElementById('inputCm').value = (meters*100).toFixed(10);
	document.getElementById('inputIn').value = (meters*39.37008).toFixed(10);
    document.getElementById('inputKM').value = (meters/1000).toFixed(10);
    document.getElementById('inputmm').value = (meters*1000).toFixed(10);
});
document.getElementById('inputKM').addEventListener('input', function(e){
	var kilometers = e.target.value;
	console.log(kilometers);
	document.getElementById('inputCm').value = (kilometers*100000).toFixed(10);
	document.getElementById('inputIn').value = (kilometers*39370).toFixed(10);
    document.getElementById('inputM').value = (kilometers*1000).toFixed(10);
    document.getElementById('inputmm').value = (kilometers*1000000).toFixed(10);
});
document.getElementById('inputmm').addEventListener('input', function(e){
	var milimeters = e.target.value;
	console.log(milimeters);
	document.getElementById('inputCm').value = (milimeters/10).toFixed(10);
	document.getElementById('inputIn').value = (milimeters/25.4).toFixed(10);
    document.getElementById('inputM').value = (milimeters/1000).toFixed(10);
    document.getElementById('inputKM').value = (milimeters/1000000).toFixed(10);
});