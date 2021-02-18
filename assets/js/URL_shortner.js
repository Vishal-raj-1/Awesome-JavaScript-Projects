const urlInput = document.querySelector(".urlInput");
const url = "https://shorts.glitch.me/new/";
const result = document.querySelector(".result");
const results = document.querySelector(".results");
const copy = document.querySelector(".copy");
const submit = document.querySelector(".submit");
const clear = document.querySelector(".clear");
const initial = "Paste your link here...";

function shorten() {
  if(!urlInput.value){
    urlInput.placeholder="You need to enter a link to shorten...";
  } else {
    urlInput.placeholder=initial;
    getURL();
  }
 }

function getURL(){
 const site = urlInput.value;
  const requestURL = `${url}${site}`;
  fetch(requestURL)
    .then((res) => {
    if (res.status !== 200) {
      console.log(`There was a problem. Code: ${res.status}`);
      return;
    }
    return res.json();
  })
    .then((data) => {
    if(data.error){ 
      urlInput.value="";
      urlInput.placeholder = data.error;
      setTimeout(()=>{
        urlInput.placeholder = initial;
      },4000)
      
    } else {
        urlInput.value = data.newUrl;
 
    results.classList.toggle("hidden");
    submit.classList.toggle("hidden");
    clear.classList.toggle("hidden");
  urlInput.select();
  }
  })
    .catch((err)=> console.log('Fetch Error', err));
}

function reset(){
  urlInput.value = "";
    results.classList.toggle("hidden");
    submit.classList.toggle("hidden");
    clear.classList.toggle("hidden");
}

submit.addEventListener("click", shorten);
copy.addEventListener("click", ()=>document.execCommand("Copy"));
clear.addEventListener("click", reset)