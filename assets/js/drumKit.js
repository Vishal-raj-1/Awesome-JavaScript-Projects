window.addEventListener("keydown", playAudio);

 const handleDrumClick = (event)=> {
  var innerHTML = event.target.innerHTML;
  console.log(event);
  animate(innerHTML)
  makeSound(innerHTML)
}

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



//theme 1
const theme_1__background = "#cc0066";
  const theme_1__text = "#ffcce6";
 //theme 2
  const theme_2__background = "#000066";
  const theme_2__text = "#e6e6ff";

  const change_theme = (theme) => {
    let root = document.documentElement
    if(theme === "theme_1"){
    root.style.setProperty('--background',theme_1__background)
    root.style.setProperty('--text',theme_1__text)
  }
  else{
    root.style.setProperty('--background',theme_2__background)
    root.style.setProperty('--text',theme_2__text)
  }
  }

 var current_theme = "theme_1"

 const theme_changer = document.getElementById("util__button-theme")
 theme_changer.addEventListener("click",(e) => {
  theme_changer.classList.add("change_theme__pressed")
  setTimeout(()=> {
    theme_changer.classList.remove("change_theme__pressed")
  },200)

  if(current_theme == "theme_1"){
    change_theme("theme_2")
    current_theme = "theme_2"
  } else{
    change_theme("theme_1")
    current_theme = "theme_1"
  }

 })

