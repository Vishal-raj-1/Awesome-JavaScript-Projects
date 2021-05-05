const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question :"What software do you need to view webpages that you create?",
        a : "Linux",
        b : "Command prompt",
        c : "A compiler",
        d : "A web browser",
        correct : "d",
    },
    {
        question:  "Chose correct CSS syntax? ",
        a :" {body;color:black;}",
        b : "{body:color=black;}",
        c : "body{color=black;}",
        d : "body {color: black;}",
        correct : "d", 
    
    },
    {
        question:  "What is the purpose of the <head> tag?",
        a : "No such tag in HTML",
        b : "Signifies the head section of an HTML document",
        c : "Sets the title of a webpage",
        d :" Signifies the body section of an HTML document",
        correct : "b",
    },
    {
        question:  "How can you make a numbered list?",
        a : "<ol>",
        b : "<ul>",
        c : "<dl>",
        d : "<nl>",
        correct : "a",
    },
   
   {
        question:  "Which HTML tag is used to define an internal style sheet?",
        a : "<script>",
        b : "<style>",
        c : "<code>",
        d : "<css>",
        correct  : "b",
   },    
    {
        question:  "Where is the correct place to insert a JavaScript?",
        a : "The <body> section",
        b : "The <head> section",
        c : "Both the <head> section and the <body> section are correct",
        d : "The <footer> section",
        correct : "c",
    },
    
    {
        question: "What is the correct HTML element for inserting a line break?",
        a: "<break>",
        b: "<br>",
        c: "<lb>",
        d: "<brk>",
        correct: "b",
    },
    {
        question: "Choose the correct HTML element to define important text",
        a: "<i>",
        b: "<b>",
        c: "<strong>",
        d: "<important>",
        correct: "c",
    },
    {
        question: "Which character is used to indicate an end tag?",
        a: "*",
        b: "<",
        c: "^",
        d: "/",
        correct: "d",
    },
    {
        question: "What is the correct HTML for making a checkbox?",
        a: `<input type="checkbox">`,
        b: "<check>",
        c: "<checkbox>",
        d: `<input type="check">`,
        correct: "a",
    },
    {
        question: "What is the correct HTML for making a drop-down list?",
        a: "<list>",
        b: "<select>",
        c: `<input type="dropdown">`,
        d: `<input type="list">`,
        correct: "b",
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        a: "src",
        b: "alt",
        c: "title",
        d: "longdesc",
        correct: "b",
    },
    {
        question: "In HTML, which attribute is used to specify that an input field must be filled out?",
        a: "formvalidate",
        b: "validate",
        c: "required",
        d: "placeholder",
        correct: "c",
    },
    {
        question: "Which CSS property controls the text size?",
        a: "font-size",
        b: "text-size",
        c: "font-style",
        d: "text-style",
        correct: "a",
    },
    {
        question: "How do you display hyperlinks without an underline?",
        a: "a{text-decoration:no-underline;}",
        b: "a{underline:none;}",
        c: "a{text-decoration:none;}",
        d: "a{decoration:no-underline;}",
        correct: "c",
    },
    {
        question: "Which property is used to change the left margin of an element?",
        a: "indent",
        b: "padding-left",
        c: "left",
        d: "margin-left",
        correct: "d",
    },
    {
        question: "How do you select an element with id 'demo'?",
        a: ".demo",
        b: "demo",
        c: "*demo",
        d: "#demo",
        correct: "d",
    },
    {
        question: "How do you select elements with class name 'test'?",
        a: ".test",
        b: "test",
        c: "*test",
        d: "#test",
        correct: "a",
    },
    {
        question: "What is the default value of the position property?",
        a: "fixed",
        b: "static",
        c: "relative",
        d: "absolute",
        correct: "b",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "<scripting>",
        b: "<script>",
        c: "<javascript>",
        d: "<js>",
        correct: "b",
    },
    {
        question: `What is the correct syntax for referring to an external script called "xxx.js"?`,
        a: `<script href="xxx.js">`,
        b: `<script src="xxx.js">`,
        c: `<script url="xxx.js">`,
        d: `<script name="xxx.js">`,
        correct: "b",
    },
    {
        question: `How do you write "Hello World" in an alert box?`,
        a: `alertbox("Hello World")`,
        b: `msgbox("Hello World")`,
        c: `alert("Hello World")`,
        d: `msg("Hello World")`,
        correct: "c",
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function myFunction()",
        b: "function = myFunction()",
        c: "function : myFunction()",
        d: "function => myFunction()",
        correct: "a",
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        a: "onchange",
        b: "onmouseclick",
        c: "onclick",
        d: "onmousehover",
        correct: "c",
    },
    {
        question: "How do you declare a JavaScript variable?",
        a: "var carName",
        b: "v carName",
        c: "variable carName",
        d: "string carName",
        correct: "a",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        a: "<head>",
        b: "<heading>",
        c: "<h1>",
        d: "<h6>",
        correct: "c",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const progressBarWidth = document.querySelector('div.meter > span')

let currentQuiz = 0
let score = 0
let maximumQuestions = 5
let questionCounter = 1

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    currentQuiz = Math.floor(Math.random() * quizData.length);
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    let percent
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        percent = (questionCounter / maximumQuestions) * 100
        progressBarWidth.style.display = 'block'
        progressBarWidth.style.width = percent + '%'

        quizData.splice(currentQuiz, 1);

        if (questionCounter <maximumQuestions) {
            questionCounter++;
            loadQuiz()

        } else {
            setTimeout(function () {
                quiz.innerHTML = `
                <h2>You answered ${score}/${maximumQuestions} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>`
            }, 550)

        }
    } 
})

