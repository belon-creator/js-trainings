const tagsContainer = document.querySelector('.js-tags');

tagsContainer.addEventListener('click', onTagsContainerClick);

/**
 * only one selected tag
 * @param {Event} e click event
 * @returns selected tag info
 */
// function onTagsContainerClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }

//   e.target.classList.add('tags__btn--active');

//   const selectedTag = e.target.dataset.value;
//   console.log(selectedTag);
// }

const selectedTags = new Set();

function onTagsContainerClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  //  selectedTags.add(e.target.dataset.value)

  if (e.target.classList.contains('tags__btn--active')) {
    selectedTags.delete(e.target.dataset.value);
  } else {
    selectedTags.add(e.target.dataset.value);
  }
  e.target.classList.toggle('tags__btn--active');

  console.log(selectedTags);
}

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
];

const colorCardsContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

colorCardsContainer.addEventListener('click', onContainerClick);

colorCardsContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
      <div class="color-card">
       <div><div><div> <div
       class="color-swatch"
       data-hex="${hex}"
       data-rgb="${rgb}"
       style="background-color: ${hex}"
     ></div></div></div></div>
        <div class="color-meta">
          <p>HEX: ${hex}</p>
          <p>RGB: ${rgb}</p>
        </div>
      </div>
      `;
    })
    .join('');
}

function onContainerClick(e) {
  if (!e.target.classList.contains('color-swatch')) {
    return;
  }

  const currentActiveCard = document.querySelector('.color-card.is-active');
  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }

  const swachEl = e.target;
  const parrentDiv = swachEl.closest('.color-card');
  parrentDiv.classList.add('is-active');

  document.body.style.backgroundColor = swachEl.dataset.hex
}
