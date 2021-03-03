const api_url =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6035714427d8af477272a1cfd680cfd6';

const image_path = 'https://image.tmdb.org/t/p/w1280';
const form = document.getElementById('form');
const search = document.querySelector('.search');
const main = document.getElementById('main');

const search_url =
  'https://api.themoviedb.org/3/search/movie?api_key=6035714427d8af477272a1cfd680cfd6&query="';

getMovies(api_url);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
  console.log(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
    <img
      src="${image_path + poster_path}"
      alt="${title}"
    />
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByrate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>${overview}</h3>

    </div>
    `;

    main.appendChild(movieEl);
  });
}

function getClassByrate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm && searchTerm != '') {
    getMovies(search_url + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});
