//questions and answers array
var QuestionsArray = [
    "Which of the following statement is/are correct about Favipiravir?",
    "How many countries, areas or territories are suffering from novel coronavirus outbreak in the World?",
    "Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?",
    "In a study, which cells are found in COVID-19 patients 'bode well' for long term immunity?",
    " Name the vaccine that is jointly developed by the German company BioNTech and US pharma giant Pfizer for COVID-19?",
    "Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition?",
    "How does Coronavirus transmit?",
    "What happens to a person suffering from COVID-19?",
    "In which age group the COVID-19 spreads?",
    "What is Coronavirus?",
];
var OptionsArray = [
    ["A. Favipiravir is an antiviral COVID-19 drug.",
        "B. Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir.",
        "C. It is India's first COVID-19 drug launched, priced at Rs 103 per tablet.",
        "D. All the above are correct"
    ],
    [
        "A. More than 50",
        "B. More than 100",
        "C. More than 150",
        "D. More than 200"
    ],
    [
        "A. Monkeys",
        "B. Lizards",
        "C. Hens",
        "D. Kites"
    ],
    [
        "A. P-cell",
        "B. D-Cell",
        "C. T-Cell",
        "D. Endothelial Cells"
    ],
    [
        "A. BNT162",
        "B. PICOVACC",
        "C. Both A and B",
        "D. Neither A nor B"
    ],
    [
        "A. Plasma Therapy",
        "B. Solidarity",
        "C. Remdesivir",
        "D. Hydroxychloroquine"
    ],
    [
        "A. When a person sneezes or cough, droplets spread in the air or fall on the ground and nearby surfaces.",
        "B. If another person is nearby and inhales the droplets or touches these surfaces and further touches his face, eyes or mouth, he or she can get an infection.",
        "C. If the distance is less than 1 meter from the infected person.",
        "D. All the above are correct."
    ],
    [
        "A. Around 80% of the people will require no treatment as such and will recover on their own.",
        "B. Around <20% or a small proportion may need hospitalisation.",
        "C. A very small proportion basically suffering from chronic illness may need admission in an Intensive Care Unit (ICU).",
        "D. All the above are correct"
    ],
    [
        "A. COVID-19 occur in all age groups.",
        "B. Coronavirus infection is mild in children",
        "C. Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.",
        "D. All the above are correct",
    ],
    [
        "A. It is a large family of viruses.",
        "B. It belongs to the family of Nidovirus",
        "C. Both A and B are correct",
        "D. Only A is correct."
    ]


];
var correctAnswerArray = [3, 3, 0, 2, 0, 0, 3, 3, 3, 2];
var randomNumbers = [
    [4, 1, 9, 3, 2, 0, 6, 7, 8, 5],
    [9, 1, 8, 7, 4, 6, 3, 5, 2, 0],
    [4, 9, 1, 3, 6, 5, 7, 0, 2, 8],
    [9, 7, 8, 5, 6, 3, 0, 1, 2, 4],
    [6, 1, 7, 4, 2, 3, 9, 0, 5, 8],
    [4, 7, 5, 0, 3, 8, 1, 9, 6, 2],
    [7, 2, 4, 6, 3, 8, 9, 0, 1, 5],
    [3, 6, 8, 5, 7, 0, 2, 4, 9, 1],
    [6, 8, 4, 3, 7, 2, 9, 1, 5, 0]
];
var name = "Hey, ";
var inputBox = document.getElementById("inputBox");
var form = document.getElementById("inputBox");
var time = document.getElementById("showTime");
var nextBtn = document.getElementById("nextBtn");
var previousBtn = document.getElementById("previousBtn");
var checkBtn = document.getElementById("checkBtn");
var quizBox = document.getElementById("quizBox");
var finishBox = document.getElementById("finishBox");
var checkNext = 0;
var t = 180;
var index = Math.floor(Math.random() * randomNumbers.length);
var array = randomNumbers[index];
var CurrentQuestion = 0;
var showTimer = document.getElementById('showTimer');
var stopWatch;
var userAnswers = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
//default style on load
quizBox.style.visibility = "hidden";
checkBtn.style.visibility = "hidden";
finishBox.style.visibility = "hidden";
//form on submit
form.addEventListener("submit", (startTest));

function startTest(event) { //handle user name input
    event.preventDefault();
    var input = document.getElementById("name");
    name = input.value;
    input.value = "";
    inputBox.style.display = 'none';
    showQuestion(CurrentQuestion);
    quizBox.style.visibility = "visible";
    stopWatch = setInterval(timer, 1000);
}

function timer() {
    t = parseInt(showTimer.innerHTML);
    t--;
    if (t == 0) {
        finishQuiz();
    }
    showTimer.innerHTML = t;
}

function colorChangeGrid(id) {
    var grid = document.getElementById("grid");
    grid.children[id].style.backgroundColor = "yellow";
    grid.children[id].style.color = "black";
}


function nextQuestion() {
    if (CurrentQuestion < 10) {
        colorChangeGrid(CurrentQuestion + 1);
        CurrentQuestion++;
        showQuestion(CurrentQuestion);
    }
}

function PreviousQuestion() {
    if (CurrentQuestion >= 0) {
        colorChangeGrid(CurrentQuestion - 1);
        CurrentQuestion--;
        showQuestion(CurrentQuestion);
    }
}

var bgColor = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function changeBackgroundColor(i, j) {
    for (var k = 0; k < 4; k++) {
        var marked = document.getElementById(`${i}option${k}`);
        if (k == j && correctAnswerArray[array[i]] == userAnswers[array[i]]) {
            marked.className += " marked";
        } else if (k == j && correctAnswerArray[array[i]] != userAnswers[i]) {
            marked.className += "unmarked";
        } else {
            marked.className += ("options");
        }
    }
}

function checkAnswer(i, j) {
    if (bgColor[i] == -1) {
        userAnswers[array[CurrentQuestion]] = (j);
        if (correctAnswerArray[array[i]] == j) {
            bgColor[i] = [j];

        } else {
            bgColor[i] = 10 + j;
        }
        changeBackgroundColor(i, j);
    }
}

function finishQuiz() {
    clearInterval(stopWatch);
    var score = 0;
    var correct = 0,
        wrong = 0;
    for (var i = 0; i < 10; i++) {
        if (correctAnswerArray[array[i]] == userAnswers[i]) {
            correct++;
        } else if (userAnswers[i] != -1) {
            wrong++;
        }
    }
    if (wrong == 0) {
        wrong = 1;
    }
    score = t * (correct / wrong);
    var showName = document.getElementById("showName");
    showName.innerHTML = name;
    var showScore = document.getElementById("showScore");
    showScore.innerHTML = score;
    quizBox.style.display = "none";
    finishBox.style.visibility = "visible";

    function handleLocalStorage() {
        var date = new Date();
        var h = date.getHours();
        var min = date.getMinutes();
        var d = date.getDate();
        var month = date.getMonth();
        var y = (date.getFullYear());
        var a = `${h}:${min} ${d}/${month}/${y}  `;
        if (!(localStorage.getItem("name"))) {
            console.log("undifec");
            localStorage.setItem("name", name);
            localStorage.setItem("date", a);
            localStorage.setItem("score", score);
            localStorage.setItem("time", t);
        } else {
            if (parseInt(localStorage.getItem("score")) < parseInt(score)) {
                console.log("hi");
                localStorage.setItem("name", name);
                localStorage.setItem("date", a);
                localStorage.setItem("score", score);
                localStorage.setItem("time", t);
            }
        }
        var highScore = document.getElementById("highScore");
        highScore.innerHTML = localStorage.getItem("score");
        var highName = document.getElementById("highName");
        highName.innerHTML = localStorage.getItem("name");
        var highTime = document.getElementById("highTime");
        highTime.innerHTML = localStorage.getItem("date");
        var highTimer = document.getElementById("highTimer");
        highTimer.innerHTML = localStorage.getItem("time");
    }
    handleLocalStorage();
}

function updateQuestion(x, id) {
    CurrentQuestion = id;
    showQuestion(CurrentQuestion);
    x.style.backgroundColor = "yellow";
}

function showQuestion(i) {
    var question = document.getElementById("question");
    question.innerHTML = `<p>${i+1}. ${QuestionsArray[array[i]]} </p>`;
    var option = " ";
    for (var j = 0; j < 4; j++) {
        if (bgColor[i] != -1 && bgColor[i] == j) {
            option += `<div onclick="checkAnswer(${i},${j})"   class="options marked" id="${i}option${j}">${OptionsArray[array[i]][j]} </div>`;
        } else if (bgColor[i] != -1 && bgColor[i] == 10 + j) {
            option += `<div onclick="checkAnswer(${i},${j})"  class="options unmarked" id="${i}option${j}">${OptionsArray[array[i]][j]} </div>`;
        } else {
            option += `<div onclick="checkAnswer(${i},${j})"  class="options " id="${i}option${j}">${OptionsArray[array[i]][j]} </div>`;
        }
    }
    var optionsBox = document.getElementById("optionsBox");
    optionsBox.innerHTML = option;
    if (i == 9) {
        nextBtn.style.visibility = "hidden";
        checkBtn.style.visibility = "visible";
    } else {
        nextBtn.style.visibility = "visible";
    }
    if (i == 0) {
        previousBtn.style.visibility = "hidden";
    } else {
        previousBtn.style.visibility = "visible";
    }
}