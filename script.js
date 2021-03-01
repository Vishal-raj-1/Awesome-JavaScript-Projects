let projectData = [
  {
    projectName: "Note App",
    projectImage: "assets/Images/noteApp.png",
    projectUrl: "public/note-app.html",
  },
  {
    projectName: "Calculator",
    projectImage: "assets/Images/Calculator.PNG",
    projectUrl: "public/calculator.html",
  },
  {
    projectName: "Color Flipper",
    projectImage: "assets/Images/colorFlipper.png",
    projectUrl: "public/color-flipper.html",
  },
  {
    projectName: "Dynamic Quote Generator",
    projectImage: "assets/Images/quoteGenerator.png",
    projectUrl: "public/Dynamic-quotegenerator.html",
  },
  {
    projectName: "Counter",
    projectImage: "assets/Images/Counter.PNG",
    projectUrl: "public/counter.html",
  },
  {
    projectName: "Local Storgae",
    projectImage: "assets/Images/localstorage.jpeg",
    projectUrl: "public/localstorage.html",
  },
  {
    projectName: "Image Slide",
    projectImage: "assets/Images/ImageSlider.jpeg",
    projectUrl: "public/ImageSlide.html",
  },
  {
    projectName: "Sidenav",
    projectImage: "assets/Images/Sidenav.jpg",
    projectUrl: "public/Sidenav.html",
  },
  {
    projectName: "Mole Game",
    projectImage: "assets/Images/molegame.jpeg",
    projectUrl: "public/molegame.html",
  },
  {
    projectName: "Click and Drag",
    projectImage: "assets/Images/clickanddrag.jpeg",
    projectUrl: "public/clickanddrag.html",
  },
  {
    projectName: "Bouncing Balls",
    projectImage: "assets/Images/BouncingBalls.PNG",
    projectUrl: "public/BouncingBalls.html",
  },
  {
    projectName: "Reviews",
    projectImage: "assets/Images/Reviews.PNG",
    projectUrl: "public/reviews.html",
  },
  {
    projectName: "Stop Watch",
    projectImage: "assets/Images/StopWatch.png",
    projectUrl: "public/StopWatch.html",
  },
  {
    projectName: "Animated Counter",
    projectImage: "assets/GIFs/counter.gif",
    projectUrl: "public/animatedCounter.html",
  },
  {
    projectName: "Music Player",
    projectImage: "assets/Images/game2.png",
    projectUrl: "public/music_player.html",
  },
  {
    projectName: "Maze Game",
    projectImage: "assets/Images/maze.png",
    projectUrl: "public/maze.html",
  },
  {
    projectName: "Drizzle of Hearts",
    projectImage: "assets/GIFs/heart.gif",
    projectUrl: "public/hearts.html",
  },
  {
    projectName: "Drum Kit",
    projectImage: "assets/GIFs/drum-kit.gif",
    projectUrl: "public/drumKit.html",
  },
  {
    projectName: "Netflix Clone",
    projectImage: "assets/GIFs/netflix.gif",
    projectUrl: "public/netflix.html",
  },
  {
    projectName: "Analog Clock",
    projectImage: "assets/Images/AnalogClock.png",
    projectUrl: "public/Analogclock.html",
  },
  {
    projectName: "Digital Clock",
    projectImage: "assets/GIFs/digitalClock.gif",
    projectUrl: "public/digitalClock.html",
  },
  {
    projectName: "Text Generator",
    projectImage: "assets/GIFs/textGenerator.gif",
    projectUrl: "public/textGenerator.html",
  },
  {
    projectName: "New Year Count Down",
    projectImage: "assets/Images/NewYearCountDown.png",
    projectUrl: "public/newyearcountdown.html",
  },
  {
    projectName: "Password Generator",
    projectImage: "assets/Images/passwordGenerator.png",
    projectUrl: "public/passwordGenerator.html",
  },
  {
    projectName: "URL Shortner",
    projectImage: "assets/Images/url.png",
    projectUrl: "public/url-shortner.html",
  },
  {
    projectName: "Mario Game",
    projectImage: "assets/Images/mario.PNG",
    projectUrl: "public/mario.html",
  },
  {
    projectName: "Drawing App",
    projectImage: "assets/GIFs/draw.gif",
    projectUrl: "public/draw.html",
  },
  {
    projectName: "QR Code Generator",
    projectImage: "assets/Images/QRCode.png",
    projectUrl: "public/QRCode.html",
  },
  {
    projectName: "Word Counter",
    projectImage: "assets/Images/word-counter-short.png",
    projectUrl: "public/wordCounter.html",
  },
  {
    projectName: "Tic Tac Toe Game",
    projectImage: "assets/Images/Tic_Tac_Toe.png",
    projectUrl: "public/Tic_Tac_Toe.html",
  },
  {
    projectName: "Memory Game",
    projectImage: "assets/Images/memory-game.png",
    projectUrl: "public/Memory-Game/index.html",
  }
];

let projectContainer = document.getElementById("js-projects");
console.log(projectContainer);

window.addEventListener("load", getProjects());

function getProjects() {
  let output = "";
  projectData.forEach(
    (data, item) =>
      (output += `
          <div class="card my-3 mx-auto col cardStyle">
            <a href=${data.projectUrl} class="text-decoration-none">
              <img
                class="card-img-top"
                src=${data.projectImage}
                style="height: 207.12px"
                alt="Card image cap"
              />
              <div class="card-body text-center">
                <h5 class="card-title">${data.projectName}</h5>
                     <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the
                            card's content.</p> --> 
              </div>
            </a>
          </div>
      `)
  );

  projectContainer.innerHTML = output;
  console.log("projectContainer", projectContainer.innerHTML);
}
