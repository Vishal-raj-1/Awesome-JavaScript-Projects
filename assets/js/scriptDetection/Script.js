var SCRIPTS;

async function loadData() {
  SCRIPTS = window.ScriptsData;
  text = "निबंधाची यादी Say!";

  let inputText = document.querySelector("input");
  let check = document.querySelector("button");

  check.addEventListener("click", (content) => {
    let language = inputText.value;

    if (language == "") {
      alert("Please Enter Something");
    } else {
      var para = document.createElement("p");
      var output = textScript(language);
      var node = document.createTextNode(output);
      para.appendChild(node);
      var element = document.querySelector(".element");
      element.appendChild(para);
    }
  });
}

loadData();

function textScript(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(",");
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name === name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}
