let projectData = [
  {    
    projectName: "Timeline",
    projectImage: "assets/GIFs/timeline.gif",
    projectUrl: "public/timeline.html",
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
            <a href=${data.projectUrl} class="text-decoration-none" target="_blank">
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

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("Navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
