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
