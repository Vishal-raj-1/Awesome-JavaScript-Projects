// Shape array
var shapeArray = [new Circle(), new Triangle(), new Rectangle(), new Trapezium()];

// Shape index - stores the current selected shape
var shapeIndex = 0;

// Function to load the shape buttons array on the "menu" section
function loadShapeButtons() {
	var shapeButtonArray = document.getElementById('shape_buttons_box');

	shapeArray.map((value, index) => {
		var shapeButton = document.createElement('button'),
			shapeButtonText = document.createElement('p');

		shapeButtonText.innerHTML = value.getName();

		shapeButton.addEventListener('click', () => {
			loadInput(index);
		});
		shapeButton.innerHTML += value.getIcon();
		shapeButton.appendChild(shapeButtonText);

		shapeButtonArray.appendChild(shapeButton);
	});
}

// Function to load input when a shape is selected
function loadInput(index) {
	var shapeButtonArray = document.getElementById('shape_buttons_box').getElementsByTagName('button');
	var inputSection = document.getElementById('input_section');
	shapeIndex = index;

	inputSection.innerHTML = null;

	for (var i = 0; i < shapeButtonArray.length; i++) {
		if (i === index) shapeButtonArray[i].classList.add('active');
		else shapeButtonArray[i].classList.remove('active');
	}

	var elements = shapeArray[shapeIndex].generateInput();
	for (var i = 0; i < elements.length; i++) inputSection.appendChild(elements[i]);
}

// Function to calculate the area of a shape and then create an output box
function calculateArea() {
	var outputBox = document.getElementById('output_box');
	var input = shapeArray[shapeIndex].getInputs();
	outputBox.appendChild(shapeArray[shapeIndex].generateOutputBox(input));

	shapeArray[shapeIndex].clearInputs();
}

// Function to clear the output array
function clearOutput() {
	var outputBox = document.getElementById('output_box');
	outputBox.innerHTML = null;
}

// Function to go to the project repository at Github
function viewRepo() {
	window.location = 'https://github.com/hildergill/area-calculator';
}

// Function to go to the "licenses.html" page
function viewLicense() {
	window.location = './licenses.html';
}

// Function to clear all inputs
function clearInputs() {
	shapeArray[shapeIndex].clearInputs();
}

function generateMenuTitleBox() {
	var menuSectionElement = document.getElementById('menu_section'),
		authorTitleLink = document.createElement('a'),
		titleBoxElements = [document.createElement('p'), document.createElement('p')];

	authorTitleLink.href = 'https://github.com/hildergill';
	authorTitleLink.innerHTML = 'hildergill';

	titleBoxElements[0].innerHTML = 'Area Calculator';
	titleBoxElements[1].innerHTML = 'By ';
	titleBoxElements[1].appendChild(authorTitleLink);

	menuSectionElement.appendChild(generateCommonBox(titleBoxElements, 'title_box'));
}

function generateShapeButtonBox() {
	var menuSectionElement = document.getElementById('menu_section');
	menuSectionElement.appendChild(generateCommonBox([document.createComment('LEAVE THIS SECTION EMPTY')], 'shape_buttons_box'));
}

function generateSettingsBox() {
	var menuSectionElement = document.getElementById('menu_section'),
		settingsBoxElements = [
			generateIconButton(generateIcon('github'), 'View repo on Github', 'view_repo_button'),
			generateIconButton(generateIcon('open-source-licenses'), 'Open source licenses', 'licenses_button'),
			document.createElement('p'),
		];

	settingsBoxElements[0].addEventListener('click', viewRepo);
	settingsBoxElements[1].addEventListener('click', viewLicense);

	menuSectionElement.appendChild(generateCommonBox(settingsBoxElements, 'settings_box'));
}

function generateClearOutputBox() {
	var clearOutputButtonBox = document.getElementById('clear_output_button_box'),
		clearOutputButton = generateIconButton(generateIcon('delete'), 'Clear output', 'clear_output_button');

	clearOutputButton.addEventListener('click', () => {
		clearOutput();
	});

	clearOutputButtonBox.appendChild(clearOutputButton);
}

// TODO Add documentations later
