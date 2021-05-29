const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

const searchStates = async (searchtext) => {
  const res = await fetch("../assets/js/StateSearchData.json");
  const states = await res.json();

  console.log(states);
  let matches = states.filter((state) => {
    const regex = new RegExp(`^${searchtext}`, "gi");
    return (
      state.City.match(regex) ||
      state.State.match(regex) ||
      state.District.match(regex)
    );
  });

  if (searchtext.length === 0) {
    matches = [];
  }

  console.log(matches);
  outputHtml(matches);
};

const outputHtml = (matches) => {
  if (matches.length > 0) {
    const html = matches
      .map(
        (match) => `
        <div class="card card-body border-light mb-2">
           <h4>${match.City} (<span class="text-success">${match.District}</span>)</h4>
           <h5><span class="text-info">
           ${match.State}</span></h5>
        </div>
      `
      )
      .join("");

    matchList.innerHTML = html;
  }
};

search.addEventListener("input", () => searchStates(search.value));
