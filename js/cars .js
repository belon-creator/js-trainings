import { cars } from '../db/cars.js';
console.dir(cars);

const containerEl = document.querySelector('.js-container');
console.dir(containerEl);

const markup = cars
  .map(
    ({
      id = 'none',
      model,
      type,
      price,
      img,
    }) => `<li class="gallery__item" data-id="${id}">
<img class="gallery__image" src="${img}" alt="${model}" width="300px">
<h2>${model}</h2>
  <h3>Model - ${type}</h3>
    <p>Price - ${price} $</p>
</li> `,
  )
  .join('');

containerEl.insertAdjacentHTML('beforeend', markup);
