let projectData = [
  {
    projectName: "Note App",
    projectImage: "assets/GIFs/noteApp.gif",
    projectUrl: "public/note-app.html",
  },
  {
    projectName: "Calculator",
    projectImage: "assets/GIFs/calculator.gif",
    projectUrl: "public/calculator.html",
  },
  {
    projectName: "Color Flipper",
    projectImage: "assets/GIFs/colorFlipper.gif",
    projectUrl: "public/color-flipper.html",
  },
  {
    projectName: "Dynamic Quote Generator",
    projectImage: "assets/Images/quoteGenerator.png",
    projectUrl: "public/Dynamic-quotegenerator.html",
  },
  {
    projectName: "Counter",
    projectImage: "assets/GIFs/counter.gif",
    projectUrl: "public/counter.html",
  },
  {
    projectName: "Local Storgae",
    projectImage: "assets/Images/localstorage.jpeg",
    projectUrl: "public/localstorage.html",
  },
  {
    projectName: "Image Slide",
    projectImage: "assets/GIFs/imageSlide.gif",
    projectUrl: "public/ImageSlide.html",
  },
  {
    projectName: "Sidenav",
    projectImage: "assets/GIFs/sidenav.gif",
    projectUrl: "public/Sidenav.html",
  },
  {
    projectName: "Mole Game",
    projectImage: "assets/GIFs/whackMole.gif",
    projectUrl: "public/molegame.html",
  },
  {
    projectName: "Click and Drag",
    projectImage: "assets/GIFs/clickandDrag.gif",
    projectUrl: "public/clickanddrag.html",
  },
  {
    projectName: "Bouncing Balls",
    projectImage: "assets/GIFs/bouncingBalls.gif",
    projectUrl: "public/BouncingBalls.html",
  },
  {
    projectName: "Reviews",
    projectImage: "assets/GIFs/reviews.gif",
    projectUrl: "public/reviews.html",
  },
  {
    projectName: "Stop Watch",
    projectImage: "assets/GIFs/stopWatch.gif",
    projectUrl: "public/StopWatch.html",
  },
  {
    projectName: "Animated Counter",
    projectImage: "assets/GIFs/animatedCounter.gif",
    projectUrl: "public/animatedCounter.html",
  },
  {
    projectName: "Music Player",
    projectImage: "assets/GIFs/musicPlayer.gif",
    projectUrl: "public/music_player.html",
  },
  {
    projectName: "Maze Game",
    projectImage: "assets/GIFs/maze.gif",
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
    projectImage: "assets/GIFs/analogClock.gif",
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
    projectImage: "assets/GIFs/newYearCountdown.gif",
    projectUrl: "public/newyearcountdown.html",
  },
  {
    projectName: "Password Generator",
    projectImage: "assets/GIFs/passwordGenerator.gif",
    projectUrl: "public/passwordGenerator.html",
  },
  {
    projectName: "URL Shortner",
    projectImage: "assets/GIFs/urlShortner.gif",
    projectUrl: "public/url-shortner.html",
  },
  {
    projectName: "Mario Game",
    projectImage: "assets/GIFs/mario.gif",
    projectUrl: "public/mario.html",
  },
  {
    projectName: "Drawing App",
    projectImage: "assets/GIFs/draw.gif",
    projectUrl: "public/draw.html",
  },
  {
    projectName: "QR Code Generator",
    projectImage: "assets/GIFs/qrCode.gif",
    projectUrl: "public/QRCode.html",
  },
  {
    projectName: "Word Counter",
    projectImage: "assets/GIFs/wordCount.gif",
    projectUrl: "public/wordCounter.html",
  },
  {
    projectName: "Tic Tac Toe Game",
    projectImage: "assets/GIFs/ticTacToe.gif",
    projectUrl: "public/Tic_Tac_Toe.html",
  },
 {
        projectName: "DragNDrop",
        projectImage: "assets/GIFs/DragNDrop.gif",
        projectUrl: "public/DragNDrop.html",
    },
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
 
