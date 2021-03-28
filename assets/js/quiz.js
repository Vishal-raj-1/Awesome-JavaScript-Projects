const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const stop=document.getElementById('stop');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const quiz=document.getElementById('quiz')
let score=0;
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

stop.addEventListener('click',stopServer)

function stopServer(){
startButton.classList.remove('hide')
  currentQuestionIndex = 0
  questionContainerElement.classList.add('hide')
}

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
   
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    score++;
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which attribute specifies a unique alphanumeric identifier to be associated with an element?',
    answers: [
      { text: 'class', correct: false },
      { text: 'id', correct: true },
      { text: 'article', correct: false },
      { text: 'section', correct: false }
    ]
  },
  {
    question: 'The _____________ attribute specifies an inline style associated with an element, which determines the rendering of the affected element.',
    answers: [
      { text: 'dir', correct: false },
      { text: 'article', correct: false },
      { text: 'style', correct: true },
      { text: 'class', correct: false }
    ]
  },
  {
    question: 'Which attribute is used to provide an advisory text about an element or its contents?',
    answers: [
      { text: 'tooltip', correct: false },
      { text: 'dir', correct: false },
      { text: 'title', correct: true },
      { text: 'head', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  }
]