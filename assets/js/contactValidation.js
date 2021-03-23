const contactForm = document.getElementById('contactForm');

function formValidate(e) {
    // if empty
    // make the contact form look better, add some official language details

    e.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;

    if(fname === '' || lname === '' || subject === '') {
        showAlert('Please fill in all fields', 'alert-danger');
    } else {
        showAlert('Form successfully submitted', 'alert-success');
        clearFields();
    }

}

function showAlert(message, className) {
    const divMessage = document.createElement('div');
    divMessage.className = `alert ${className}`;
    divMessage.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    container.insertBefore(divMessage, contactForm);
    setTimeout(() => {
        document.querySelector('.alert').remove()
    }, 3000);
}

function clearFields() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
}
contactForm.addEventListener('submit', formValidate);

