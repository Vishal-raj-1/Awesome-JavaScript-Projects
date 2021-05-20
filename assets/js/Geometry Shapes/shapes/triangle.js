class Triangle extends Shape {
	getName() {
		return 'Triangle';
	}

	getIcon() {
		return generateIcon('triangle');
	}

	generateInput() {
		var elements = [document.createElement('p'), document.createElement('input'), document.createElement('p'), document.createElement('input')];

		elements[1].type = elements[3].type = 'number';
		elements[1].step = elements[3].step = 0.01;
		elements[1].id = 'width_input';
		elements[3].id = 'height_input';

		elements[0].innerHTML = 'Width: ';
		elements[2].innerHTML = 'Height: ';

		return super.generateInput(this.getName(), elements, 2);
	}

	getInputs() {
		return {
			width: Number.parseFloat(document.getElementById('width_input').value),
			height: Number.parseFloat(document.getElementById('height_input').value),
		};
	}

	getArea(input) {
		return (input.width * input.height) / 2;
	}

	generateOutputBox(inputs) {
		var outputElements = [document.createElement('span')],
			fractionElements = [document.createElement('p'), document.createElement('span'), document.createElement('p')];

		fractionElements[0].innerHTML = `${inputs.width} &times; ${inputs.height}`;
		fractionElements[2].innerHTML = '2';

		outputElements[0].classList.add('fraction');
		for (var i = 0; i < fractionElements.length; i++) outputElements[0].appendChild(fractionElements[i]);

		return super.generateOutputBox(this.getIcon(), this.getName(), outputElements, this.getArea(inputs));
	}

	clearInputs() {
		document.getElementById('width_input').value = null;
		document.getElementById('height_input').value = null;
	}
}
