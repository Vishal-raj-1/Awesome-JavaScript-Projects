let elem = document.querySelector("#myText");
let div = document.querySelector(".creation");
let result = document.querySelector(".resultant");

elem.addEventListener("input", (event) => {
  div.innerHTML = "";
  result.innerHTML = "";
  let values = event.target.value.split(",");

  values.forEach((el) => {
    let para = document.createElement("p");
    let node = document.createTextNode(el);

    para.append(node);

    div.append(para);
  });

  for (let node of div.childNodes) {
    paste = node.cloneNode(true);
    result.appendChild(paste);
  }
});

let decrement = document.querySelector(".pops");
let increment = document.querySelector(".pushs");
let shifts = document.querySelector(".shifts");
let unshifts = document.querySelector(".unshifts");

decrement.addEventListener("click", () => {
  result.lastChild.remove();
});

increment.addEventListener("click", () => {
  let key = prompt("Element");

  if (key !== "" && key !== null) {
    let para = document.createElement("p");
    let node = document.createTextNode(key);

    para.append(node);
    result.append(para);
  }
});

unshifts.addEventListener("click", () => {
  let key = prompt("Element");

  if (key !== "" && key !== null) {
    let para = document.createElement("p");
    let node = document.createTextNode(key);

    para.append(node);
    result.prepend(para);
  }
});

shifts.addEventListener("click", () => {
  result.firstChild.remove();
});
