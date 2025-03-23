import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', onImgClick);

function creteMarkup(arr) {
  return arr
    .map(
      img => `
        <li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</li>`,
    )
    .join('');
}

gallery.insertAdjacentHTML('beforeend', creteMarkup(galleryItems));

function onImgClick(e) {
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  e.preventDefault();

  const LargeImg = e.target.dataset.source;
  const alt = e.target.alt;
  const instance = basicLightbox.create(`
            <img src="${LargeImg}" alt="${alt}">

    `);
  console.log(instance);
  instance.show();

  document.addEventListener('keydown', onEscClick);
  function onEscClick(e) {
    e.preventDefault();
    if (e.key === 'Escape') {
      instance.close();
    }
  }
}
