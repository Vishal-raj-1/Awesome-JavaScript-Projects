//Get the date
const date = new Date();
//Get hours from date
const hour = date.getHours();
//select the button from the DOM
const button = document.querySelector('button');
//select the message area from the DOM
const messageArea = document.querySelector('#message');

//add a click event to the button
button.addEventListener('click', function(){
//check for morning, noon, or evening
if (hour > 17){
    messageArea.innerHTML = `<h1>Good evening!</h1>`;
} else if (hour > 12){
    messageArea.innerHTML = `<h1>Good afternoon!</h1>`;
} else {
    messageArea.innerHTML = `<h1>Good morning!</h1>`;
}
})
