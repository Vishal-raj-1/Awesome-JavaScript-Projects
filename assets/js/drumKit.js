window.addEventListener("keydown", playAudio);

function playAudio(e) {
  // To instantiate audio
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.play();
  audio.currentTime = 0;

  // To animate key clicked
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  key.classList.add("key-playing");
}

// To remove animation on key clicked
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("key-playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
