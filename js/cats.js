import { cats } from '../db/cats.js';
console.log(cats);

const catList = document.querySelector('.js-list');

const createMarckup = cats
  .map(
    cat => `
  <li class="gallery__item">
  <img src="${cat}" alt="cat" width="300px" loading="lazy"/>
  <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas,
  optio porro dolore accusantium rerum iusto, consectetur, quo voluptatem
  esse consequatur ad totam ea et veritatis blanditiis dicta omnis unde.
</p>
</li>`,
  )
  .join('');

catList.insertAdjacentHTML('beforeend', createMarckup);

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

function onImageLoaded(evt) {
  console.log('image loaded');
  evt.target.classList.add('appear');
}

lazyImages.forEach(image => {
  image.addEventListener('load', onImageLoaded, { once: true });
});
