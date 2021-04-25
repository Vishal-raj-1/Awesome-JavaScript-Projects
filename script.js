let projectData = [
  {
    projectName: "Lorem Ipsum Generator",
    projectImage: "assets/Images/lorem.png",
    projectUrl: "public/lorem.html",
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
    <div class="projectCard">
    <a href=${data.projectUrl} class="hoverEffect" target="_blank">
      <img
        class="projectCardImg"
        src=${data.projectImage}
        alt="Card image cap"
      />
        <h5 class="projectCardTitle">${data.projectName}</h5>
        <span class="computerLegs"></span>
        <span class="computerBase"></span>
    </a>
  </div>
  `)
  );

  projectContainer.innerHTML = output;
  console.log("projectContainer", projectContainer.innerHTML);
}

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("Navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
