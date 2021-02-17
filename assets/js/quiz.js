
//quetions for quiz
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

// options array
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
var CurrentQuestion = 0;
var userAnswers = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
//onload Style 
quizBox.style.visibility = "hidden";
checkBtn.style.visibility = "hidden";
finishBox.style.visibility = "hidden";



function startTest() { 
    inputBox.style.display = 'none';
    showQuestion(CurrentQuestion);
    quizBox.style.visibility = "visible";

}

function nextQuestion() {
    if (CurrentQuestion < 10) {
        CurrentQuestion++;
        showQuestion(CurrentQuestion);
    }
}

function PreviousQuestion() {
    if (CurrentQuestion >= 0) {
        CurrentQuestion--;
        showQuestion(CurrentQuestion);
    }
}

var bgColor = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];


function changeBackgroundColor(i, j) {
    for (var k = 0; k < 4; k++) {
        var marked = document.getElementById(`${i}option${k}`);
        if (k == j && correctAnswerArray[i] == userAnswers[i]) {
            marked.className += " marked";
        } else if (k == j && correctAnswerArray[i] != userAnswers[i]) {
            marked.className += "unmarked";
        } else {
            marked.className += ("options");


        }



    }
}


function checkAnswer(i, j) {
    if (bgColor[i] == -1) {
        userAnswers[CurrentQuestion] = (j);
        if (correctAnswerArray[i] == j) {
            bgColor[i] = [j];
        } else {
            bgColor[i] = 10 + j;
        }
        changeBackgroundColor(i, j);


    }



}

function finishQuiz() {
    var score = 0;
    for (var i = 0; i < 10; i++) {
        if (correctAnswerArray[i] == userAnswers[i]) {
            score += 4;
        } else if (userAnswers[i] != -1) {
            score--;
        }
    }
    var showName = document.getElementById("showName");
    showName.innerHTML = name;
    var showScore = document.getElementById("showScore");
    showScore.innerHTML = score;
    quizBox.style.display = "none";
    finishBox.style.visibility = "visible";
}


function showQuestion(i) {
    var question = document.getElementById("question");

    question.innerHTML = `<p>${i+1}. ${QuestionsArray[i]} </p>`;
    var option = " ";
    for (var j = 0; j < 4; j++) {
        if (bgColor[i] != -1 && bgColor[i] == j) {
            option += `<div onclick="checkAnswer(${i},${j})"  class="options marked" id="${i}option${j}">${OptionsArray[i][j]} </div>`;
        } else if (bgColor[i] != -1 && bgColor[i] == 10 + j) {
            console.log("object");
            option += `<div onclick="checkAnswer(${i},${j})"  class="options unmarked" id="${i}option${j}">${OptionsArray[i][j]} </div>`;
        } else {
            option += `<div onclick="checkAnswer(${i},${j})"  class="options " id="${i}option${j}">${OptionsArray[i][j]} </div>`;
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