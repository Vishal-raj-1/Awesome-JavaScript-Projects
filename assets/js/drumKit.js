window.addEventListener('keydown', function (e) {
  console.log(e.key);
  var key=e.key;
  var k_key=key.toLocaleUpperCase();
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  buttonAnimation(k_key);

});


var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i <= numberOfButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
}

function makeSound(key) {
  switch (key) {
    case "A":
      var boom = new Audio("../assets/sounds/boom.wav");
      boom.play();
      break;

    case "S":
      var clap = new Audio("../assets/sounds/clap.wav");
      clap.play();
      break;

    case "D":
      var hihat = new Audio("../assets/sounds/hihat.wav");
      hihat.play();
      break;

    case "F":
      var boom = new Audio("../assets/sounds/boom.wav");
      boom.play();
      break;

    case "G":
      var openhat = new Audio("../assets/sounds/openhat.wav");
      openhat.play();
      break;

    case "H":
      var ride = new Audio("../assets/sounds/ride.wav");
      ride.play();
      break;

    case "J":
      var snare = new Audio("../assets/sounds/snare.wav");
      snare.play();
      break;

    case "K":
      var tink = new Audio("../assets/sounds/tink.wav");
      tink.play();
      break;

    case "L":
      var tom = new Audio("../assets/sounds/tom.wav");
      tom.play();
      break;

    default:
      console.log(key);
  }
}

// To remove animation on key clicked
function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// to change the theme 

document.getElementById('change-theme-btn')
.addEventListener('click', function () {
  let darkThemeEnabled = document.body.classList.toggle('dark-theme');
  localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
  
});

if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
  document.body.classList.add('dark-theme');
  
}

//To set overlay height


const resizer = () =>{
  var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  console.log(scrollHeight);
  document.body.style.setProperty("--imageoverlay", scrollHeight + "px");
}

resizer();


