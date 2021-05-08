var key_num = document.querySelectorAll('.note').length

for (var i = 0; i < key_num; i++) {
  document.querySelectorAll('.note')[i].addEventListener('click', function () {
    var buttonInnerHTML = this.innerHTML

    playSoundsForKey(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
  })
}

function playSoundsForKey(key) {
  switch (key) {
    case '1':
      var note1 = new Audio('../assets/sounds/note1.wav')
      note1.play()
      break
    case '2':
      var note2 = new Audio('../assets/sounds/note2.wav')
      note2.play()
      break
    case '3':
      var note3 = new Audio('../assets/sounds/note3.wav')
      note3.play()
      break
    case '4':
      var note4 = new Audio('../assets/sounds/note4.wav')
      note4.play()
      break
    case '5':
      var note5 = new Audio('../assets/sounds/note5.wav')
      note5.play()
      break
    case '6':
      var note6 = new Audio('../assets/sounds/note6.wav')
      note6.play()
      break
    case '7':
      var note7 = new Audio('../assets/sounds/note7.wav')
      note7.play()
      break
    default:
      console.log(key)
  }
}

function buttonAnimation(key) {
  var activeButton = document.getElementById(key)

  activeButton.classList.add('pressed')

  setTimeout(function () {
    activeButton.classList.remove('pressed')
  }, 600)
}
