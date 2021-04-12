const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("quoteDisplay")
const quoteAuthorElement = document.getElementById("quoteAuthor")
const quoteInputElement = document.getElementById("quoteInput")
const timerElement = document.getElementById("timer")
const btnNextElement = document.getElementById("btnNext")
const btnExitElement = document.getElementById("btnexit")
let myTime
let totalKeysPress = 0
let correctKeysPress
let incorrectKeysPress

let correct = true;
document.getElementById("quoteInput").onkeydown = function(e){    
    
    if( !(e.key === "Shift" || e.key === "Backspace"))
    totalKeysPress ++;
}

quoteInputElement.addEventListener('input', () => {
    correctKeysPress = 0
    incorrectKeysPress = 0
    const arrayQuote = quoteDisplayElement.querySelectorAll('span')
    const arrayValue = quoteInputElement.value.split('')
    arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false;
        }else if (character === characterSpan.innerText) {
            correctKeysPress ++
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
            correct = true;
        } else {
            incorrectKeysPress ++
            characterSpan.classList.remove('correct')
            characterSpan.classList.add('incorrect')
            correct = false;
        }

    })

    if(correct) {
        showTime();
        setTimeout(renderNewQuote,5000);
    }
})

function showTime(){
    
    quoteDisplayElement.innerText = "Your time: " + myTime + "s.\n" +
    "Total keys press = " + totalKeysPress + "\n" +
    "Correct keys press = " + correctKeysPress + "\n" +
    "Incorrect keys press = " + (totalKeysPress - correctKeysPress) + "\n" +
    "success % = " + ((correctKeysPress * 100 ) / totalKeysPress).toFixed(2) + " %" 
    quoteAuthorElement.innerText = ""
    quoteInputElement.style.display = "none"
    timerElement.style.visibility = "hidden"
    totalKeysPress = 0
    correctKeysPress = 0
    incorrectKeysPress = 0
}

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data);
}

async function renderNewQuote() {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerText = '' ;
    quoteAuthorElement.innerText = quote.author;
    quote.content.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        quoteDisplayElement.appendChild(characterSpan)
    })
    quoteInputElement.value = null;
    quoteInputElement.style.display = "block"
    timerElement.style.visibility = "visible"
    startTimer()
}
let startTime 
function startTimer(){
    timerElement.innerText = 0
    startTime = new Date()
    setInterval(() => {
        timerElement.innerText = getTimerTime()
        myTime = getTimerTime()
    }, 1000);
}

function getTimerTime(){
    return Math.floor((new Date() - startTime) / 1000)
}

function nextQuote(){
    renderNewQuote();
}
renderNewQuote()