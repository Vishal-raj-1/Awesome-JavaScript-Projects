// Icons array
var icons = [
	// The "work in progress" icon
	{
		name: 'wip',
		icon: [
			'<svg width="24" height="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">',
			'<path d="m1.58 22.9c-.127-.0452-.289-.148-.359-.229-.156-.18-.257-.522-.213-.722.0178-.0815 2.34-4.76 5.16-10.4 3.44-6.89 5.17-10.3 5.27-10.4.328-.258.802-.259 1.13-.0011.094.0739 1.91 3.65 5.29 10.4 5.59 11.2 5.29 10.5 5.03 11-.0622.106-.203.246-.314.311-.2.117-.256.118-10.5.13-8.76.0104-10.3 5.8e-5-10.5-.07zm19-1.75c.04-.0647-8.55-17.2-8.62-17.2-.0732.000543-8.66 17.1-8.62 17.2.0384.0622 17.2.0634 17.2.0013zm-8.99-3.12c-.461-.254-.535-.841-.155-1.22.19-.19.24-.21.526-.21.286 0 .337.02.524.208.483.483.218 1.24-.459 1.31-.164.0168-.302-.01-.437-.0847zm.254-2.75c-.0485-.13-.664-5.91-.664-6.24-.000398-.595.376-1.02.857-.966.474.0519.706.413.706 1.1 0 .461-.604 6.02-.665 6.12-.0512.0828-.202.0746-.234-.0128z" stroke-width=".0579" />',
			'</svg>',
		],
	},

	// The "circle" icon
	{
		name: 'circle',
		icon: [
			'<svg width="24" height="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">',
			'<path d="m11 23c-2.13-.198-4.25-1.06-5.92-2.39-.429-.344-1.27-1.18-1.62-1.62-1.79-2.21-2.68-5.1-2.43-7.87.2-2.2 1.04-4.29 2.39-5.98.344-.429 1.18-1.27 1.62-1.62 2.21-1.79 5.1-2.68 7.87-2.43 2.2.2 4.29 1.04 5.98 2.39.429.344 1.27 1.18 1.62 1.62 1.39 1.71 2.23 3.81 2.43 6.03.251 2.76-.645 5.66-2.43 7.87-.352.435-1.19 1.27-1.62 1.62-2.21 1.77-5.11 2.65-7.89 2.39zm2.17-1.43c1.01-.12 2.04-.432 3.03-.915 1.07-.527 1.82-1.07 2.65-1.92 1.26-1.29 2.11-2.86 2.5-4.61.166-.748.223-1.27.223-2.08 0-1.54-.302-2.84-.978-4.21-.527-1.07-1.07-1.82-1.92-2.65-1.51-1.47-3.43-2.4-5.55-2.67-.547-.0693-1.74-.0693-2.29 0-2.82.357-5.28 1.88-6.87 4.26-.343.51-.882 1.61-1.08 2.2-.188.569-.366 1.35-.439 1.93-.0693.547-.0693 1.74 0 2.29.404 3.19 2.34 5.96 5.16 7.39 1.75.891 3.6 1.22 5.56.987z" stroke-width=".0448" />',
			'</svg>',
		],
	},

	// The "triangle" icon
	{
		name: 'triangle',
		icon: [
			'<svg width="24" height="24" version="1.1" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">',
			'<path d="m22.6 141c-.704-.25-1.6-.821-1.99-1.27-.861-.993-1.42-2.89-1.18-3.99.0984-.451 12.9-26.3 28.5-57.5 19-38.1 28.6-56.9 29.1-57.4 1.82-1.43 4.43-1.43 6.24-.0062.52.409 10.6 20.2 29.2 57.4 30.9 61.7 29.2 58.2 27.8 60.7-.344.588-1.12 1.36-1.73 1.72-1.1.648-1.42.652-57.9.719-48.4.0577-57 .00032-58.1-.387zm105-9.7c.221-.358-47.2-95.2-47.6-95.2-.405.0032-47.9 94.8-47.6 95.2.212.344 95.1.35 95.3.007z" stroke-width=".32" />',
			'</svg>',
		],
	},

	// The "rectangle" icon
	{
		name: 'rectangle',
		icon: [
			'<svg width="24" height="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">',
			'<path d="m1.61 22.9-.231-.0822-.256-.296-.121-.449.0302-20.5.235-.401.401-.235h20.7l.401.235.235.401v20.7l-.235.401-.401.235-20.5.0245zm19.6-10.9v-9.2h-18.4l-.0297 18.3.0276.0725.0276.0725 18.4-.0292z" stroke-width=".0578" />',
			'</svg>',
		],
	},

	// The "trapezium" icon
	{
		name: 'trapezium',
		icon: [
			'<svg width="24" height="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">',
			'<path d="m1.6 22.9-.231-.0822-.255-.294-.116-.42.175-.766.109-.347.648-2.37.213-.752.231-.81.652-2.37.161-.578.651-2.37.213-.752.231-.81.652-2.37.161-.578.651-2.37.213-.752.232-.81.414-1.5.257-.52.52-.289h15l.401.235.235.401v20.7l-.235.401-.401.235-20.5.0245zm19.6-10.9v-9.2l-13-.0294-.109.145-.134.463-.65 2.37-.213.752-.231.81-.652 2.37-.161.578-.651 2.37-.213.752-.231.81-.652 2.37-.161.578-.651 2.37-.213.752-.249.83.0768.124 18.1-.0292z" stroke-width=".0578" />',
			'</svg>',
		],
	},

	// The icon for the "open source licenses" button
	{
		name: 'open-source-licenses',
		icon: [
			'<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">',
			'<g>',
			'<rect fill="none" height="24" width="24" x="0" />',
			'</g>',
			'<g>',
			'<g>',
			'<rect height="20" transform="matrix(0.7075 -0.7067 0.7067 0.7075 -5.6854 13.7194)" width="4" x="11.73" y="3.73" />',
			'<rect height="8" transform="matrix(0.707 -0.7072 0.7072 0.707 0.3157 11.246)" width="4" x="11.73" y="1.24" />',
			'<rect height="8" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -8.1722 7.7256)" width="4" x="3.24" y="9.73" />',
			'<rect height="2" width="12" x="1" y="21" />',
			'</g>',
			'</g>',
			'</svg>',
		],
	},

	// The icon for the "view repo on github" button
	{
		name: 'github',
		icon: [
			'<svg width="24" height="24" version="1.1" viewBox="0 0 67.7 67.7" xmlns="http://www.w3.org/2000/svg">',
			'<g transform="translate(0 -229)">',
			'<g transform="matrix(.561 0 0 -.575 33.9 229)">',
			'<path d="m0 0c-33.3 0-60.4-27-60.4-60.4 0-26.7 17.3-49.3 41.3-57.3 3.02-.559 4.13 1.31 4.13 2.9 0 1.44-.056 6.2-.082 11.2-16.8-3.65-20.3 7.12-20.3 7.12-2.75 6.98-6.7 8.84-6.7 8.84-5.48 3.75.413 3.67.413 3.67 6.06-.426 9.26-6.22 9.26-6.22 5.39-9.23 14.1-6.56 17.6-5.02.543 3.9 2.11 6.57 3.83 8.08-13.4 1.53-27.5 6.7-27.5 29.8 0 6.59 2.36 12 6.22 16.2-.627 1.52-2.69 7.66.586 16 0 0 5.07 1.62 16.6-6.19 4.82 1.34 9.98 2.01 15.1 2.03 5.13-.024 10.3-.695 15.1-2.03 11.5 7.81 16.6 6.19 16.6 6.19 3.29-8.32 1.22-14.5.593-16 3.87-4.23 6.21-9.62 6.21-16.2 0-23.2-14.1-28.3-27.6-29.8 2.17-1.87 4.1-5.55 4.1-11.2 0-8.08-.069-14.6-.069-16.6 0-1.61 1.09-3.49 4.15-2.9 24 7.99 41.3 30.6 41.3 57.3 0 33.4-27 60.4-60.4 60.4" fill-rule="evenodd" />',
			'</g>',
			'</g>',
			'</svg>',
		],
	},

	// The "delete" icon
	{
		name: 'delete',
		icon: [
			'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">',
			'<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />',
			'<path d="M0 0h24v24H0z" fill="none" />',
			'</svg>',
		],
	},

	// The "back buttob" icon
	{
		name: 'back-button',
		icon: [
			'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">',
			'<path d="M0 0h24v24H0z" fill="none" />',
			'<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />',
			'</svg>',
		],
	},
];


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


// Function to clear all inputs
function clearInputs() {
	shapeArray[shapeIndex].clearInputs();
}

function generateMenuTitleBox() {
	var menuSectionElement = document.getElementById('menu_section'),
		authorTitleLink = document.createElement('a'),
		titleBoxElements = [document.createElement('p'), document.createElement('p')];


	titleBoxElements[0].innerHTML = 'Area Calculator';


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


// Function to generate a "CommonBox"
function generateCommonBox(elements, id = null) {
	var commonBox = document.createElement('div');
	commonBox.classList.add('common_box');
	commonBox.id = id;

	elements.map((value) => {
		commonBox.appendChild(value);
	});

	return commonBox;
}

// Function to generate an "IconButton"
function generateIconButton(icon, text, id = null) {
	var iconButton = document.createElement('button'),
		iconButtonText = document.createElement('p');
	
	iconButton.id = id;
	iconButton.innerHTML = icon;
	iconButton.classList.add('icon_button');

	iconButtonText.innerHTML = text;
	iconButton.appendChild(iconButtonText);
	
	return iconButton;
}

// Function to generate an icon from a given name based on icons.js
function generateIcon(name) {
	var returnValue = '';

	icons.map((value) => {
		if (name === value.name) {
			value.icon.map((element) => {
				returnValue += element;
			});
		}
	});

	return returnValue;
}


