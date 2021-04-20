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

