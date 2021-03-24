
// make those pads pop //
function playSound(e) {
  let code;
  if (e.keyCode) {
    // it was a keypress, get the keycode as usual
    code = e.keyCode;
  } else {
    // it was a click,read the keycode from the div that was clicked
    code = this.dataset.key;
  }
// To instantiate audio
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  if(!audio) return;
  audio.play();
  audio.currentTime = 0;
// To animate key clicked/pressed
  const key = document.querySelector(`.key[data-key="${code}"]`);
  key.classList.add('key-playing');
}
 // To remove animation on key clicked/pressed
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("key-playing");
}
const keys = document.querySelectorAll('.key')
for (let i=0, key; key = keys[i]; i++) {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', playSound);
  window.addEventListener("keydown", playSound);
}
