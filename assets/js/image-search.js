// function to get the img 

function getimg() {
    const box = document.getElementById("box");
  
    const search = document.getElementById("search").value;
    
    const url = `https://source.unsplash.com/500x500/?${search}`;
  
    const t = document.createElement("img");
  
    const i = `
  <img src=${url} >
  `;
    box.innerHTML = i;
  }
  