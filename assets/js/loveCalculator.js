let firstPartner = document.querySelector(".name-input1");
let secondPartner = document.querySelector(".name-input2");
let containerEl = document.querySelector(".container");
let loaderEl = document.querySelector("#loader");
let resultsDiv = document.querySelector(".results");
let loveDescription = document.querySelector(".aboutlove");
let audioEl = document.querySelector("audio");
let headingEl = document.querySelector(".heading");
console.log(headingEl);
let btnEl = document.querySelector("#btn");
var percentage = 0;
var score = 0;

// preloader function
window.onload = function (e) {
	setTimeout(function () {
		containerEl.style.display = "flex";
		loaderEl.style.display = "none";
	}, 6000);
};
// on calculate button click
btnEl.addEventListener("click", function () {
	let name1 = document.getElementById("name1");
	let name2 = document.getElementById("name2");
	let error = document.getElementById("error");
	if (name1.value && name2.value) {
		error.classList.add('hidden');
		audioEl.play();
		var userValueOne = toString(firstPartner.value);
		var userValueTwo = toString(secondPartner.value);
		let max = 10;
		let min = 1;
		var randomInt = Math.floor(Math.random() * (max - min));

		if (userValueOne.length === userValueTwo.length) {
			score += 5;
		}

		calculation = randomInt * score;
		if (calculation > 100 || calculation < 20) {
			calculation = 100;
		}
		console.log(randomInt, calculation);
		resultsDiv.innerHTML = "Yours Love is  " + calculation + "%";
		resultsDiv.classList.add("results-js");
		aboutLove();
		clearResults();
	} else {
		error.classList.remove('hidden');
	}
});
// description on percentage
function aboutLove() {
	if (calculation >= 90) {
		loveDescription.innerHTML = `${firstPartner.value}  and  ${secondPartner.value} You Are in extreme love with each other.`;
	} else if (calculation >= 80) {
		loveDescription.innerHTML = `${firstPartner.value}  and  ${secondPartner.value}  Your Love is growing day by day.`;
	} else if (calculation >= 50) {
		loveDescription.innerHTML = `${firstPartner.value}  and  ${secondPartner.value} Your Friendship is growing towards love.`;
	} else if (calculation > 20) {
		loveDescription.innerHTML = `${firstPartner.value}  and  ${secondPartner.value} You may need to spend some time with each other.`;
	} else {
		loveDescription.innerHTML = `${firstPartner.value}  and  ${secondPartner.value} Yours Friendship is more better than love.`;
	}
}
// clear all the results
function clearResults() {
	firstPartner.value = "";
	secondPartner.value = "";
	calculation = 0;
	let newBtn = document.createElement("button"); // for try Again
	headingEl.appendChild(newBtn);
	newBtn.classList.add("tryAgainbtn"); //adding styles to button
	newBtn.innerHTML = "Try Again !";
	newBtn.addEventListener("click", function () {
		// <== After clicking on try Again button
		resultsDiv.innerHTML = "";
		resultsDiv.classList.remove("results-js");
		loveDescription.innerHTML = "";
		headingEl.removeChild(newBtn);
		audioEl.pause();

		calculation = 0;
		let name1 = document.getElementById("name1");
		let name2 = document.getElementById("name2");
		name1.classList.remove('hidden');
		name2.classList.remove('hidden');
		btnEl.classList.remove('hidden');
	});
	let name1 = document.getElementById("name1");
	let name2 = document.getElementById("name2");
	name1.classList.add('hidden');
	name2.classList.add('hidden');
	btnEl.classList.add('hidden');

}

