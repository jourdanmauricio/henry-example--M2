const recommendedContainer = document.getElementById('recommended-container');
recommendedContainer.innerHTML = '';

const getMovies = () => {
  $.get('https://students-api.2.us-1.fl0.io/movies', (data, status) => {
    if (status === 'success') {
      renderRecommended(data);
    } else {
      recommendedContainer.innerHTML =
        '<h3>Error obteniendo las películas</h3>';
    }
  }).fail(function () {
    recommendedContainer.innerHTML = '<h3>Error obteniendo las películas</h3>';
  });
};

const renderRecommended = (movies) => {
  const htmlRecommended = movies
    .map(
      (movie) =>
        `<article class="recommended__card">
        <img
          src="${movie.poster}"
          alt="${movie.title}">
        <a href="#">
          <h3 class="recommended__title">${movie.title} - ${movie.year}</h3>
        </a>
        <div class="recommended__info">
          <div>
            <img src="/assets/icons/director-chair.svg" alt="">
            <span>${movie.director}</span>
          </div>
          <div>
            <img src="/assets/icons/genre.svg" alt="">
            <span>${movie.genre.join(', ')}</span>
          </div>
          <div>
            <img src="/assets/icons/duration.svg" alt="">
            <span>${movie.duration}</span>
          </div>
          <div>
            <img src="/assets/icons/rate.svg" alt="">
            <span>${movie.rate}</span>
          </div>
        </article>`
    )
    .join('');

  recommendedContainer.innerHTML = htmlRecommended;
};

getMovies();
