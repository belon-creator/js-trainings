import { cars } from '../db/cars.js';

const containerEl = document.querySelector('.js-container');
const form = document.querySelector('.js-search-form');
const favoriteList = document.querySelector('.js-favorite-list');

form.addEventListener('submit', onSearh);
containerEl.addEventListener('click', onClick);

function createMarkup(arr) {
  return arr
    .map(
      ({
        id = 'none',
        model,
        type,
        price,
        img,
      }) => `<li class="gallery__item" data-id="${id}">
            <img class="gallery__image" src="${img}" alt="${model}" width="300px">
            <div class="js-favorite">★</div>
            <h2>${model}</h2>
            <h3>Model - ${type}</h3>
            <p>Price - ${price} $</p>
          </li> `,
    )
    .join('');
}

containerEl.insertAdjacentHTML('beforeend', createMarkup(cars));

function onSearh(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const { select, search } = form.elements;

  console.log('form', form);
  console.log('select', select.value);
  console.log('search', search.value);

  const filteredCars = cars.filter(
    item =>
      item[select.value].toLowerCase() === search.value.trim().toLowerCase(),
  );

  containerEl.innerHTML = createMarkup(filteredCars);
}

function onClick(e) {
  
  if (e.target.classList.contains('js-favorite')) {

    e.target.classList.add('js-favorite-active')
    const { id } = e.target.closest('li').dataset;    
    const {model, type} = cars.find(({id: carId}) => carId === Number(id))
    addFavorite(`${model} ${type}`)
  }

  
}

function addFavorite(currentCar) {
  favoriteList.insertAdjacentHTML('beforeend',`<li>${currentCar}</li>`)
}