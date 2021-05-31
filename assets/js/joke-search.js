document.getElementById("any").addEventListener("click", function () {
    getjoke("Any");
  });
  
  document.getElementById("programming").addEventListener("click", function () {
    getjoke("Programming");
  });
  
  document.getElementById("misc").addEventListener("click", function () {
    getjoke("Miscellaneous");
  });
  
  document.getElementById("dark").addEventListener("click", function () {
    getjoke("Dark");
  });
  
  document.getElementById("christmas").addEventListener("click", function () {
    getjoke2("Christmas");
  });
  
  document.getElementById("spooky").addEventListener("click", function () {
    getjoke2("Spooky");
  });
  
  document.getElementById("pun").addEventListener("click", function () {
    getjoke2("Pun");
  });
  
  const getjoke = async (item) => {
    const url = `https://v2.jokeapi.dev/joke/${item}?type=single`;
    const res = await fetch(url);
    const data = await res.json();
    const box = document.getElementById("box");
  
    box.innerHTML = `<h3>${data.joke}</h3>`;
  };
  const getjoke2 = async (item) => {
    const url = `https://v2.jokeapi.dev/joke/${item}`;
    const res = await fetch(url);
    const data = await res.json();
    const box = document.getElementById("box");
  
    box.innerHTML = `<h3>${data.setup}</h3><h3>${data.delivery}</h3>`;
    console.log(data.setup);
  };
  