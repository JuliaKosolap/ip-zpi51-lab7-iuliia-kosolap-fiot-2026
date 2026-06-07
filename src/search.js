import './style.css';
import axios from 'axios';

const API_KEY = '56198567-34a6f240de5d9e5557be33d4c';

document.querySelector('#app').innerHTML = `
<div class="page">
<a
  href="/ip-zpi51-lab7-iuliia-kosolap-fiot-2026/"
  class="back-btn"
>
  ← На головну
</a>
<h1>Пошук зображень</h1>

<form class="search-form">
  <input
    type="text"
    name="search"
    placeholder="Search images..."
  />

  <button type="submit">
    Search
  </button>
</form>

<br>

<ul class="gallery"></ul>
</div>
`;

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const query = form.elements.search.value.trim();

  if (!query) {
    alert('Enter search text');
    return;
  }

  gallery.innerHTML = '';

  try {
    const response = await axios.get(
      'https://pixabay.com/api/',
      {
        params: {
          key: API_KEY,
          q: query,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
        },
      }
    );

    const images = response.data.hits;

    if (images.length === 0) {
      alert(
        'Sorry, there are no images matching your search query.'
      );
      return;
    }

    const markup = images
      .map(
        image => `
          <li>
            <img
              src="${image.webformatURL}"
              data-large="${image.largeImageURL}"
              alt="${image.tags}"
              width="250"
              style="cursor:pointer"
            />

            <p>
              ❤️ ${image.likes}
              👁️ ${image.views}
            </p>
          </li>
        `
      )
      .join('');

    gallery.innerHTML = markup;
  } catch (error) {
    console.error(error);
    alert('Error loading images');
  }
});

gallery.addEventListener('click', event => {
  if (event.target.tagName !== 'IMG') {
    return;
  }

  window.open(
    event.target.dataset.large,
    '_blank'
  );
});