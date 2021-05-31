var screen = document.getElementById("screen");
var mainvoice = document.getElementById("assistantvoice");
var loadvoice = document.getElementById("assistant");
var glens = document.getElementById("glens");
var keyboard = document.getElementById("keyboard");
var bar = document.getElementById("voicebar");
var voicebtn = document.getElementById("voicebtn");
var main = document.getElementById("main");

window.onload = function() {
  setTimeout("screen.style.opacity = '0';", 4500);
  setTimeout("screen.style.display = 'none';", 4800);
  setTimeout("mainvoice.play();", 5000);
};
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

var grammer = "#JSGF V1.0;";
var recognition = new SpeechRecognition();
var speechRecognitionGrammerList = new SpeechGrammarList();
speechRecognitionGrammerList.addFromString(grammer, 1);

var google;

recognition.grammers = speechRecognitionGrammerList;
recognition.lang = "en-US";
//recognition.continuous = true;
recognition.interimResults = false;
recognition.onresult = function(event) {
  var last = event.results.length - 1;
  var command = event.results[last][0].transcript;
  var message = command;
  appendMessage(message);
  if (command.toLowerCase() === "hello") {
    loadvoice.src = "";
    var output = "Hey, what's up?";
    arrivingMessage(output);
    var uri = "hey, what's up";
    var res = encodeURIComponent(uri);
    //console.log(res);
    var url =
      "http://translate.google.com/translate_tts?ie=UTF-8&q=" +
      res +
      "&tl=en&client=tw-ob";
    loadvoice.src = url;
    loadvoice.load();
    loadvoice.play();
  } else if (command.toLowerCase() === "did you farted") {
    loadvoice.src = "";
    var output = "No, don't ask this question anymore!";
    arrivingMessage(output);
    var uri = "no, don't ask this question anymore";
    var res = encodeURIComponent(uri);
    //console.log(res);
    var url =
      "http://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=" +
      res +
      "&tl=en&client=tw-ob";
    loadvoice.src = url;
    loadvoice.load();
    loadvoice.play();
  } else if (command.toLowerCase() === "open google") {
    loadvoice.src = "";
    var output = "Redirecting you to google.com";
    arrivingMessage(output);
    var uri = "redirecting you to google dot com";
    var res = encodeURIComponent(uri);
    //console.log(res);
    var url =
      "http://translate.google.com/translate_tts?ie=UTF-8&q=" +
      res +
      "&tl=en&client=tw-ob";
    loadvoice.src = url;
    loadvoice.load();
    loadvoice.play();
    google = window.open("https://www.google.com");
  }
};
voicebtn.addEventListener("click", function() {
  if (glens.className === "glens hidden") {
    recognition.stop();
    voicebtn.classList.remove("hidden");
    glens.classList.remove("hidden");
    keyboard.classList.remove("hidden");
    bar.classList.add("hidden");
  } else {
    recognition.start();
    glens.classList.add("hidden");
    keyboard.classList.add("hidden");
    voicebtn.classList.add("hidden");
    bar.classList.remove("hidden");
  }
});
recognition.onspeechend = function() {
  recognition.stop();
  voicebtn.classList.remove("hidden");
  glens.classList.remove("hidden");
  keyboard.classList.remove("hidden");
  bar.classList.add("hidden");
  //console.log("Speech recognition has stopped.");
};
function appendMessage(message) {
  const messageElement = document.createElement("div");
  const messageElementxt = document.createElement("span");
  messageElement.classList.add("gassist");
  messageElement.classList.add("output");
  window.scrollTo(0, document.body.scrollHeight);
  messageElementxt.innerText = message;
  main.append(messageElement);
  messageElement.append(messageElementxt);
}
function arrivingMessage(output) {
  const messageElement = document.createElement("div");
  const messageElementxt = document.createElement("span");
  const messageElementimg = document.createElement("img");
  messageElement.classList.add("gassist");
  window.scrollTo(0, document.body.scrollHeight);
  messageElementimg.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/50px-Google_Assistant_logo.svg.png";
  messageElementxt.innerText = output;
  messageElement.append(messageElementimg);
  main.append(messageElement);
  messageElement.append(messageElementxt);
}
