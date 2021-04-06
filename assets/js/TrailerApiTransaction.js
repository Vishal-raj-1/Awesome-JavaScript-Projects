// API Key

const API_KEY = '9167033267ed8ab17c97e8b1ac18898c';

const url =
  'https://api.themoviedb.org/3/search/movie?api_key=9167033267ed8ab17c97e8b1ac18898c';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function generateUrl(movId) {
  const url = `https://api.themoviedb.org/3${movId}?api_key=9167033267ed8ab17c97e8b1ac18898c`;
  return url;
}

function requestMovie(url, onComplete, onError) {
  fetch(url)
    .then((res) => res.json())
    .then(onComplete)
    .catch(onError);
}

function searchMovie(value) {
  const path = '/search/movie';
  const url = generateUrl(path) + '&query=' + value;
  requestMovie(url, renderSearchData, handleError);
}

function getUpcomingMovies() {
  const path = '/movie/upcoming';
  const url = generateUrl(path);
  const render = renderMovies.bind({ title: 'Upcoming Movies' });
  requestMovie(url, render, handleError);
}

function getPopularMovies() {
  const path = '/movie/popular';
  const url = generateUrl(path);
  const render = renderMovies.bind({ title: 'Popular Movies' });
  requestMovie(url, render, handleError);
}

function getTopRatedMovies() {
  const path = '/movie/top_rated';
  const url = generateUrl(path);
  const render = renderMovies.bind({ title: 'Top Rated Movies' });
  requestMovie(url, render, handleError);
}
