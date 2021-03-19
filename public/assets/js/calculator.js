let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screen.value += buttonText;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screen.value);
        }
        else {
            if (screenValue.length==0) {
                screenValue += buttonText;
                screen.value = screenValue;
            }
            else {
                screen.value += buttonText;
            }
        }
    })
}