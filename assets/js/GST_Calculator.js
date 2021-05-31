// Grab the user input
const calculate = document.querySelector('#calculate');

// Event Listener
calculate.addEventListener('click', (e)=> {
	// Prevent the default action of submit button
	e.preventDefault();

	// User values
	const initialAmount = parseInt(document.querySelector('#initial-amount').value);
	const GSTRate = parseInt(document.querySelector('#gst-rate').value);

	// Net Amount
	const netAmount = document.querySelector('#net-amount').value = initialAmount;

	// GST AMount
	const gstAmount = document.querySelector('#gst-amount').value = (initialAmount / 100 * GSTRate).toFixed(2);

	// Total Amount
	document.querySelector('#total-amount').value = parseInt(netAmount) + parseInt(gstAmount);
});

// Clear the inputs
const clear = document.querySelector('#clear');

// Event Listener
clear.addEventListener('click', (e)=> {
	document.querySelector('#initial-amount').value = '';
	document.querySelector('#gst-rate').value = '';
	document.querySelector('#net-amount').value = '';
	document.querySelector('#gst-amount').value = '';
	document.querySelector('#total-amount').value = '';
});
