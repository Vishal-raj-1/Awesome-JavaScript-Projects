const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('.movie-searchable');
const movieContainer = document.querySelector('.movie-container');

/*
<div class="movie">
        <section class="section">
          <img src="" alt="" data-mov-id='557'>
          <img src="" alt="" data-mov-id='557'>
        </section>
        <div class="content">
          <p id="content-close">X</p>
        </div>
      </div>
*/

function movieSection(movies) {
  const section = document.createElement('section');
  section.classList = 'section';
  movies.map((movie) => {
    if (movie.poster_path) {
      const img = document.createElement('img');
      img.src = IMG_URL + movie.poster_path;
      img.setAttribute('data-movie-id', movie.id);
      section.appendChild(img);
    }
  });
  return section;
}

function createMovieContainer(movies, title = 'Search Results') {
  const movieElement = document.createElement('div');
  movieElement.setAttribute('class', 'movie');
  const header = document.createElement('h2');
  header.innerHTML = title;
  const content = document.createElement('div');
  content.classList = 'content';
  const contentClose = `<p id="content-close"><i class="fas fa-times-circle"></i></p>`;
  content.innerHTML = contentClose;

  const section = movieSection(movies);

  movieElement.appendChild(header);
  movieElement.appendChild(section);
  movieElement.appendChild(content);
  return movieElement;
}

function createErrorContainer() {
  const errorCont = document.createElement('div');
  errorCont.setAttribute('class', 'err-search');
  const errorTemplate = `
  <h2>Sorryyy No movie found 😢</h2>
  `;
  errorCont.innerHTML = errorTemplate;
  return errorCont;
}

// async function fetchMovieJSON() {
//   try {
//     const res = await fetch(url);
//     const mov = await res.json();
//   } catch (err) {
//     console.log('Error:', err);
//   }
// }

function createIframe(video) {
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube.com/embed/${video.key}`;
  iframe.width = 360;
  iframe.height = 315;
  iframe.allowFullscreen = true;

  return iframe;
}

function renderSearchData(data) {
  movieSearchable.innerHTML = '';
  const movieblock = createMovieContainer(data.results);
  movieSearchable.appendChild(movieblock);
  console.log('Data:', data);
}

function renderMovies(data) {
  const movieblock = createMovieContainer(data.results, this.title);
  movieContainer.appendChild(movieblock);
  console.log('Data:', data);
}

function handleError(error) {
  movieSearchable.innerHTML = '';
  const er = createErrorContainer();
  movieSearchable.appendChild(er);
}

buttonElement.addEventListener('click', (e) => {
  e.preventDefault();
  const value = inputElement.value;
  searchMovie(value);
  inputElement.value = '';
});

function createVideoTemplate(data, content) {
  content.innerHTML =
    '<p id="content-close"><i class="fas fa-times-circle"></i></p>';
  const videos = data.results;
  if (videos.length > 0) {
    console.log('Videos:', videos);
    const length = videos.length > 4 ? 4 : videos.length;
    const iframeContainer = document.createElement('div');
    for (let i = 0; i < length; i++) {
      const video = videos[i];
      const iframe = createIframe(video);
      iframeContainer.appendChild(iframe);
      content.appendChild(iframeContainer);
    }
  } else {
    console.log('No trailer');
    const noTrailer = document.createElement('h2');
    noTrailer.setAttribute('class', 'notrail');
    noTrailer.innerText = 'Sorry trailer not available 😢';
    content.appendChild(noTrailer);
  }
}

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    console.log('Hellooo im an image');
    window.scrollBy(0, 500);
    const section = e.target.parentElement;
    const content = section.nextElementSibling;
    content.classList.add('content-toggle');
    const movId = e.target.dataset.movieId;
    const path = `/movie/${movId}/videos`;
    const newUrl = generateUrl(path);
    fetch(newUrl)
      .then((res) => res.json())
      .then((data) => {
        createVideoTemplate(data, content);
      })
      .catch((err) => {
        console.log('error:', err);
      });
    // videoUrl = generateUrl(movId);
    // console.log(videoUrl);
  }
  if (e.target.parentElement.id === 'content-close') {
    const content = e.target.parentElement.parentElement;
    console.log(content);
    content.classList.remove('content-toggle');
  }
});
getUpcomingMovies();
getPopularMovies();
getTopRatedMovies();
