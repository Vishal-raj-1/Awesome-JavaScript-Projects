const fileSelector = document.getElementById("fileSelector");
const result = document.querySelector(".text");
const loader = document.querySelector(".spinner");
const img = document.getElementById("image");

fileSelector.addEventListener("change", (event) => {
  result.style.display = "none";
  const file = event.target.files[0];
  if (file) {
    loader.style.display = "inline-block";
    readImage(file);
    recognize(file);
  }
});

async function recognize(file) {
  const {
    data: { text },
  } = await Tesseract.recognize(file, "eng");

  loader.style.display = "none";
  result.style.display = "flex";
  result.innerHTML = text;
}

function readImage(file) {
  const reader = new FileReader();
  reader.addEventListener("load", (event) => {
    img.src = event.target.result;
    console.log(img);
  });

  reader.readAsDataURL(file);
}
