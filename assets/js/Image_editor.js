function fun() {
	let url = document.getElementById('url');
	let timg = url.value;
	if (timg.length != 0)
		targetimg.setAttribute('src', timg);
	timg = "";
}
let inputrange = document.querySelectorAll(".slider");
console.log(inputrange);
for (let i = 0; i < inputrange.length - 1; i++) {
	inputrange[i].addEventListener('input', edit)
}

function edit() {
	let blur = document.getElementById("blur").value;
	let gs = document.getElementById("gs").value;
	let sepiaval = document.getElementById("sepia").value;
	let hr = document.getElementById("hr").value;
	let op = document.getElementById("op").value;

	targetimg.style.filter = 'grayscale(' + gs + '%) blur(' + blur + 'px) sepia(' + sepiaval + '%) hue-rotate(' + hr + 'deg) opacity(' + op + '%)';
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

