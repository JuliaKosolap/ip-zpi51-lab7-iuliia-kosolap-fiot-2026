import './style.css';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

document.querySelector('#app').innerHTML = `
<div class="page">

  <a href="/" class="back-btn">
    ← На головну
  </a>

  <h1>Галерея зображень</h1>

  <ul class="gallery">

    <li>
      <a href="https://picsum.photos/id/1015/1200/800">
        <img
          class="gallery-image"
          src="https://picsum.photos/id/1015/400/300"
          alt="Nature"
        />
      </a>
    </li>

    <li>
      <a href="https://picsum.photos/id/1016/1200/800">
        <img
          class="gallery-image"
          src="https://picsum.photos/id/1016/400/300"
          alt="Road"
        />
      </a>
    </li>

    <li>
      <a href="https://picsum.photos/id/1018/1200/800">
        <img
          class="gallery-image"
          src="https://picsum.photos/id/1018/400/300"
          alt="Sea"
        />
      </a>
    </li>

  </ul>

</div>
`;

const images =
  document.querySelectorAll('.gallery-image');

images.forEach(image => {
  image.addEventListener('click', event => {
    event.preventDefault();

    const instance =
      basicLightbox.create(`
        <img
          src="${image.parentElement.href}"
          style="
            max-width: 90vw;
            max-height: 90vh;
            border-radius: 12px;
          "
        />
      `);

    instance.show();
  });
});