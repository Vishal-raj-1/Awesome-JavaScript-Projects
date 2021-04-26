
// variables
const apiKey = '95a69bf0';
const searchBtn = document.getElementById('search-btn');
const movieList = document.getElementById('movie');
const movieDetailsContent = document.querySelector('.movie-details-content');
const closeBtn = document.getElementById('movie-close-btn');

//event listeners
searchBtn.addEventListener('click',getMoviesList);
movieList.addEventListener('click',getMovieDetails);
closeBtn.addEventListener('click',()=>{
    movieDetailsContent.parentElement.classList.remove('showMovies')
})

//functions


// get the list of movies
function getMoviesList(){
    let SearchInput = document.getElementById('movie-search').value;
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${SearchInput}`)
    .then((Response)=> Response.json())
    .then((data)=>{
        console.log(data.Search);
        let html = '';
        let movies = data.Search;
        if(movies){
            movies.forEach((movies)=>{
            html += `
            <div class="movie-item" data-id = "${movies.imdbID}">
                <div class="movie-img">
                    <img src="${movies.Poster}" alt="food">
                </div>
                <div class="movie-name">
                    <h3>${movies.Title}</h3>
                    <a class="info-btn" href="#">Get Info</a>
                </div>
            </div>
            
            `;
        });
        movieList.classList.remove('not-found');

        }else{
            html= 'Unable to find the movie';
            movieList.classList.add('not-found');
        }      
        movieList.innerHTML =html; 
    });
}
 
//get the details of the movie
function getMovieDetails(e){
    e.preventDefault();
    if(e.target.classList.contains('info-btn')){
        let movieItem = e.target.parentElement.parentElement;
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movieItem.dataset.id}`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            let output = `
                    <div class="logo-img">
                        <img src="${data.Poster}" alt="">
                    </div>

                    <div class="Titles">
                        <h1 class="movie-title">${data.Title}</h1>
                        <h3 class="movie-category"><strong>CATEGORY -</strong>  ${data.Type}</h3>
                    </div>

                    <div class="details">
                        <h2>Details:</h2>
                        <ul>
                            <li><strong>Genre -</strong> ${data.Genre}</li>
                            <li><strong>Released -</strong> ${data.Released}</li>
                            <li><strong>Actors -</strong> ${data.Actors}</li>
                            <li><strong>Director</strong> ${data.Director}</li>
                            <li><strong>Language</strong> ${data.Language}</li>
                            <li><strong>Ratings</strong> ${data.imdbRating}</li>
                            <li><strong>Language</strong> ${data.Language}</li>                       
                            <li><strong>Box Office</strong> ${data.BoxOffice}</li>                       
                        </ul>
                    </div> 
                    <div class="link"> 
                    <a href="https://imdb.com/title/${data.imdbID}" target="_blank">get imdb</a>
                    </div>
            `;
            movieDetailsContent.innerHTML = output;
            movieDetailsContent.parentElement.classList.add('showMovies')

        })
    }
    
}
