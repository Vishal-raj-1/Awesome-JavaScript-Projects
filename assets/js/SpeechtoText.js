var speechRecognition = window.webkitSpeechRecognition
var recognition = new speechRecognition()
var textbox = $("#textbox")
var instructions = $("#instructions")
var content = ''
recognition.continuous = true

recognition.onstart = function () {
    instructions.text("Voice Recognition is On")
}

recognition.onspeechend = function () {
    instructions.text("No Activity")
    
}

recognition.onerror = function () {
    instructions.text("Try Again")
}

recognition.onresult = function () {
    var curr = event.resultIndex;
    var transcript = event.results[curr][0].transcript
    content += transcript
    textbox.val(content)
}

$("#start-btn").click(function (event){
    if(content.length){
        content += ''
    }

    recognition.start()
})

textbox.on('input', function () {
    content = $(this).val()
})
