console.log(tempData);

const renderReleases = () => {
  const releasesContainer = document.getElementById('releases-container');
  releasesContainer.innerHTML = '';

  const htmlReleases = tempData.map((release) => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.alt = release.title;
    img.src = release.poster;
    img.classList.add('releases__image');
    const figCation = document.createElement('figCation');
    figCation.classList.add('releases__figcaption');
    const divInfo = document.createElement('div');
    divInfo.classList.add('releases__info');

    const title = document.createElement('h3');
    title.textContent = `${release.title} - ${release.year}`;
    divInfo.appendChild(title);

    const director = document.createElement('p');
    const imgDirector = document.createElement('img');
    imgDirector.src = './../assets/director-chair.svg';
    director.textContent = release.director;
    const divDirector = document.createElement('div');
    divDirector.classList.add('card__icon');
    divDirector.appendChild(imgDirector);
    divDirector.appendChild(director);
    divInfo.appendChild(divDirector);

    const genre = document.createElement('p');
    const imgGenre = document.createElement('img');
    imgGenre.src = './../assets/genre.svg';
    genre.textContent = release.genre;
    const divGenre = document.createElement('div');
    divGenre.classList.add('card__icon');
    divGenre.appendChild(imgGenre);
    divGenre.appendChild(genre);
    divInfo.appendChild(divGenre);

    const duration = document.createElement('p');
    const imgDuration = document.createElement('img');
    imgDuration.src = './../assets/duration.svg';
    duration.textContent = release.duration;
    const divDuration = document.createElement('div');
    divDuration.classList.add('card__icon');
    divDuration.appendChild(imgDuration);
    divDuration.appendChild(duration);
    divInfo.appendChild(divDuration);

    const rate = document.createElement('p');
    const imgRate = document.createElement('img');
    imgRate.src = './../assets/rate.svg';
    rate.textContent = release.rate;
    const divRate = document.createElement('div');
    divRate.classList.add('card__icon');
    divRate.appendChild(imgRate);
    divRate.appendChild(rate);
    divInfo.appendChild(divRate);

    figCation.appendChild(divInfo);
    figure.appendChild(img);
    figure.appendChild(figCation);

    const card = document.createElement('article');
    card.classList.add('releases__card');
    card.appendChild(figure);

    return card;
  });
  htmlReleases.forEach((card) => releasesContainer.appendChild(card));
};

renderReleases();
