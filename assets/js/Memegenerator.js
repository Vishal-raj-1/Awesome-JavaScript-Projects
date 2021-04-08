function hidehtml() {
    var x = document.getElementById("maindiv");
    var y = document.getElementById("memecreate");
   var element = document.getElementById("content");
   element.classList.add("setsize");
    x.style.display = "none";
    y.style.display = "block"
  }
  function explorememes() {
    var x = document.getElementById("maindiv");
    var y = document.getElementById("memeexplore");
    var element = document.getElementById("content");
    element.classList.add("setsize");

    x.style.display = "none";
    y.style.display = "block";
}


function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgagediv = document.getElementById("imagediv");
  expandImg.src = imgs.src;
  imgagediv.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

function changetext() {
  var upperText = document.getElementById("topText");
  var bottomText = document.getElementById("bottomText");
  var textValue = document.getElementById("uppertext").value;
  var textValue2 = document.getElementById("bottomtext2").value;
  
  upperText.innerText = textValue;
  bottomText.innerText = textValue2;
}
function changefont() {
  var upperText = document.getElementById("topText");
  var fontSizeInput = document.getElementById("font_Size").value;
  
  upperText.style.fontSize = fontSizeInput + "px";
}
function changefontbottom() {
  var bottomText = document.getElementById("bottomText");
  var fontSizeInput = document.getElementById("font_Sizebottom").value;
  
  bottomText.style.fontSize = fontSizeInput + "px";
  
}
function randommeme() {
  image_url = "https://meme-api.herokuapp.com/gimme";

 fetch(image_url)
   .then(function (response) {
     return response.json();
   })
   .then(function (data) {
     display_image(data.url);
   })
   .catch(function (err) {
     console.warn("Something went wrong.", err);
   });
}

function display_image(image_url) {
  document.getElementById("image").src = image_url;
}

