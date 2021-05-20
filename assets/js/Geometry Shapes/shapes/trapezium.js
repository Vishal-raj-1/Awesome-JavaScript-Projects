class Trapezium extends Shape {
	getName() {
		return 'Trapezium';
	}

	getIcon() {
		return generateIcon('trapezium');
	}

	generateInput() {
		var elements = [
			document.createElement('p'),
			document.createElement('input'),
			document.createElement('p'),
			document.createElement('input'),
			document.createElement('p'),
			document.createElement('input'),
		];

		elements[0].innerHTML = 'Adjacent 1: ';
		elements[2].innerHTML = 'Adjacent 2: ';
		elements[4].innerHTML = 'Height: ';

		elements[1].type = elements[3].type = elements[5].type = 'number';
		elements[1].step = elements[3].step = elements[5].step = 0.01;
		elements[1].id = 'a_input';
		elements[3].id = 'b_input';
		elements[5].id = 'height_input';

		return super.generateInput(this.getName(), elements, 3);
	}

	getInputs() {
		return {
			a: Number.parseFloat(document.getElementById('a_input').value),
			b: Number.parseFloat(document.getElementById('b_input').value),
			height: Number.parseFloat(document.getElementById('height_input').value),
		};
	}

	getArea(input) {
		return ((input.a + input.b) / 2) * input.height;
	}

	generateOutputBox(inputs) {
		var outputElements = [document.createElement('span')],
			fractionSpan = [document.createElement('span'), document.createElement('p')],
			fractionSpanElement = [document.createElement('p'), document.createElement('span'), document.createElement('p')];

		fractionSpanElement[0].innerHTML = `${inputs.a} + ${inputs.b}`;
		fractionSpanElement[2].innerHTML = '2';

		fractionSpan[0].classList.add('fraction');
		fractionSpan[1].style.marginTop = fractionSpan[1].style.marginBottom = 'auto';
		fractionSpan[1].innerHTML = ` &times; ${inputs.height}`;
		for (var i = 0; i < fractionSpanElement.length; i++) fractionSpan[0].appendChild(fractionSpanElement[i]);

		outputElements[0].style.display = 'grid';
		outputElements[0].style.gridTemplateColumns = 'repeat(2, max-content)';
		outputElements[0].style.gap = '0.25rem';
		for (var i = 0; i < fractionSpan.length; i++) outputElements[0].appendChild(fractionSpan[i]);

		return super.generateOutputBox(this.getIcon(), this.getName(), outputElements, this.getArea(inputs));
	}

	clearInputs() {
		document.getElementById('a_input').value = null;
		document.getElementById('b_input').value = null;
		document.getElementById('height_input').value = null;
	}
}
