const fileSelector = document.getElementById("fileSelector");
const result = document.getElementById("result"); // The result tag in the HTML
const probability = document.getElementById("probability"); // The probability tag in the HTML
const img = document.getElementById("image"); // The image we want to classify
const spinner = document.querySelector(".spinner");
const resultBox = document.querySelector(".resultbox");

fileSelector.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    spinner.style.display = "inline-block";
    resultBox.style.display = "none";
    readImage(file);
  }
});

function readImage(file) {
  const reader = new FileReader();
  reader.addEventListener("load", (event) => {
    img.src = event.target.result;
  });

  reader.readAsDataURL(file);
  detectImage(img);
}

// Initialize the Image Classifier method with MobileNet
function detectImage(image) {
  ml5
    .imageClassifier("MobileNet")
    .then((classifier) => classifier.classify(image))
    .then((results) => {
      spinner.style.display = "none";
      resultBox.style.display = "flex";
      result.innerText = results[0].label;
      probability.innerText = results[0].confidence.toFixed(4);
    });
}
