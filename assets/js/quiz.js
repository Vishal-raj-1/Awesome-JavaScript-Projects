const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const stop=document.getElementById('stop');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const quiz=document.getElementById('quiz')
const img=document.getElementById('photo')
const solution=document.getElementById('sol')
let score=0;
let shuffledQuestions, currentQuestionIndex

solution.classList.add('hide')
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  
  setNextQuestion()
})

stop.addEventListener('click',stopServer)

function stopServer(){
startButton.classList.remove('hide')
solution.classList.add('hide')
  currentQuestionIndex = 0
  questionContainerElement.classList.add('hide')
  nextButton.classList.add('hide')
}

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  solution.classList.add('hide')
  setNextQuestion();
}

function setNextQuestion() {
  solution.classList.add('hide')
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question['question']
  img.src=question['picture']
  solution.innerText=question['solution']
  solution.classList.add('hide')
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    solution.classList.add('hide')
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
    solution.classList.remove('hide')
    
  } else {
   
    startButton.innerText = 'Restart';
    nextButton.classList.add('hide')
    
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
    'question': 'Find the relationship between the numbers in the top row and the numbers in the bottom row, and then determine the missing number.',
    'picture': '../assets/Images/quiz/series.jpg',
    'solution':'When you look at the relationship of each set of top and bottom numbers, you will see that \n12 is 2 x 6,\n24 is 3 x 8,\n36 is 4 x 9,\n45 is 5 x 9,\n60 is 6 x 10, and\n84 is 7 x 12',
    answers: [
      { text: '24', correct: false },
      { text: '12', correct: true },
      { text: '64', correct: false },
      { text: '36', correct: false }
    ]
  },
  {
    'question': 'The three numbers in each box have a relationship that is the same in all six boxes.',
    'picture': '../assets/Images/quiz/series2.jpg',
    'solution':'The missing number is 4. The sum of three numbers in each box is 12.',
    answers: [
      { text: '45', correct: false },
      { text: '9', correct: false },
      { text: '12', correct: true },
      { text: '24', correct: false }
    ]
  },
  {
    'question': 'Work from square to adjacent square horizontally or vertically (but not diagonally) to spell out a 12 letter word. You must find the starting point, and provide the missing letters.',
    'picture': '../assets/Images/quiz/pro.jpg',
    'solution':'PROFESSIONAL',
    answers: [
      { text: 'PROSPERITY', correct: false },
      { text: 'PROGRAMING', correct: false },
      { text: 'PRIORITY', correct: false },
      { text: 'PROFESSIONAL', correct: true }
    ]
  },
  {
    'question': 'Which set of letters is the odd one out?',
    'picture': '../assets/Images/quiz/resoneing.jpg',
    'solution':'Top left is a third of bottom right, bottom right is three less than top right and top right is half of bottom left.',
    answers: [
      { text: '11, 24, 34', correct: false },
      { text: '30, 45, 34', correct: false },
      { text: '12, 40, 24', correct: false },
      { text: '18, 36, 15', correct: true }
    ]
  },
  {
    'question': 'Which number would be next?',
    'picture': '../assets/Images/quiz/numbers1.jpg',
    'solution':'Each number in the segment at the bottom is the sum of the four numbers in the sections either side. Thus: 8+3+4+3 = 18.',
    answers: [
      { text: '12', correct: false },
      { text: '8', correct: true },
      { text: '20', correct: false },
      { text: '6', correct: false }
    ]
  },
  {
    'question': 'Insert missing character...',
    'picture': '../assets/Images/quiz/char.jpg',
    'solution':'The letters in the second and third rows are five steps ahead of those in the first and second rows respectively. So, the missing letter will be five steps ahead of F, which is K.',
    answers: [
      { text: 'P', correct: false },
      { text: 'K', correct: true },
      { text: 'Q', correct: false },
      { text: 'U', correct: false }
    ]
  }
]