import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')
gallery.addEventListener('click', onGalleryItemClick)

function createMarkup(arr) {
    return arr.map(img => `
        <li class="gallery__item">
   <a class="gallery__link" href="${img.original}">
      <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
   </a>
</li>`).join('')
}

gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems))

function onGalleryItemClick(e) {
    e.preventDefault()
    if (!e.target.classList.contains('gallery__image')) {
        return
    }
}