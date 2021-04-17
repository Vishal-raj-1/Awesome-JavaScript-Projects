function fun() {
	let url = document.getElementById('url');
	let timg = url.value;
	if (timg.length != 0)
		targetimg.setAttribute('src', timg);
	timg = "";
}
let inputrange = document.querySelectorAll(".slider");
console.log(inputrange);
for (let i = 0; i < inputrange.length; i++) {
	inputrange[i].addEventListener('input', edit)
}

function edit() {
	let blur = document.getElementById("blur").value;
	let gs = document.getElementById("gs").value;
	let sepiaval = document.getElementById("sepia").value;
	let hue = document.getElementById("hue-rotate").value;
	let op = document.getElementById("op").value;
	let br = document.getElementById("brightness").value;
	let con = document.getElementById("contrast").value;
	let inv = document.getElementById("invert").value;
	let sat = document.getElementById("saturate").value;
	
	targetimg.style.filter = 'saturate(' + sat/10 + ') invert(' + inv + '%) contrast(' + con + '%) brightness(' + br + '%) grayscale(' + gs + '%) blur(' + blur + 'px) sepia(' + sepiaval + '%) hue-rotate(' + hue + 'deg) opacity(' + op + '%)';
}

let filterform = document.getElementById('filter');
filterform.addEventListener('reset', function () {
	filterform.reset();
	setTimeout(function () {
		edit();
	})
})

function down() {
	let href = targetimg.getAttribute('src');
	let imagepath = href;
	let filename = getFileName(imagepath);
	saveAs(imagepath, filename);
}

function getFileName(str) {
	return str.substring(str.lastIndexOf('/') + 1);
}

