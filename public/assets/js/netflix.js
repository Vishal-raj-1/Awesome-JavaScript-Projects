const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const IMGURL = "https://image.tmdb.org/t/p/w1280";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const main = document.getElementById("main");
const form = document.getElementById("form");
const select = document.getElementById("select");


getmovies(APIURL);

async function getmovies(url) {
   const response = await fetch(url);
   const data = await response.json();

   console.log(data);

   showMovies(data.results);
}


function showMovies(movies) {
   main.innerHTML = ' ';

   movies.forEach((movie) => {
      const { poster_path, title, vote_average, overview } = movie;
      const movieEle = document.createElement("div");
      movieEle.classList.add("movie");

      movieEle.innerHTML =
         ` <img src="${IMGURL + poster_path}" 
           alt ="${title}"/>

            <div class="movie-info">
               <h4>${title}</h4>
               <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
            <h3><b>Overview:</b></h3>
            ${overview}
        </div>
      `;

      main.appendChild(movieEle);
   });


}

function getClassByRate(vote) {
   if (vote >= 8) {
      return 'green'
   } else if (vote > -5) {
      return 'orange'
   } else {
      return 'red'
   }
}


form.addEventListener('submit', (e) => {
   e.preventDefault();

   const searchTerm = search.value;

   if (searchTerm) {

      getmovies(SEARCHAPI + searchTerm);

      search.value = " ";
   }
});