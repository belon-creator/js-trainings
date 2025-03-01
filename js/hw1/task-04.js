const refs = {
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  decremantBtn: document.querySelector('button[data-action="decrement"]'),
  conterValue: document.querySelector('#value'),
};

let counter = 0;

refs.incrementBtn.addEventListener('click', onIcrementBtnClick);
refs.decremantBtn.addEventListener('click', onDecrementBtnClick);

function onIcrementBtnClick() {
  counter += 1;
  refs.conterValue.textContent = counter;
}

function onDecrementBtnClick() {
  counter -= 1;
  refs.conterValue.textContent = counter;
}
