function runSpeechRecognition() {
    // get output div reference
    var output = document.getElementById("output");
    // get action element reference
    var action = document.getElementById("action");
    // new speech recognition object
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    
    recognition.onstart = function () {
        action.innerHTML = "<small>listening, please speak...</small>";
    };

    recognition.onspeechend = function () {
        action.innerHTML = "<small>stopped listening, hope you are done...</small>";
        recognition.stop();
    }

    
    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        output.innerHTML = "<b>Text:</b> " + transcript;

    };

    // start recognition
    recognition.start();
}