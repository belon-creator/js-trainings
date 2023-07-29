const textEls = document.querySelectorAll('.js-text');
const textContainerEl = document.querySelector('.js-container');
const maxLength = 20;
const totalLength = maxLength + 3;

textContainerEl.addEventListener('click', onTextClick);

function onTextClick(e) {
  if (!e.target.classList.contains('js-text')) {
    console.log(e.target);
    return;
  }

  const title = e.target;

  if (!title.dataset['originalText']) {
    title.dataset['originalText'] = title.textContent;
  }

  const string = title.dataset['originalText'].slice(0, maxLength);

  if (title.textContent.length > totalLength) {
    const remainder = title.dataset['originalText'].slice(maxLength);
    title.setAttribute('data-title', remainder);
    title.textContent = string + '...';
  } else {
    const remainder = title.dataset['title'];
    if (remainder) {
      title.textContent = string + remainder;
      title.removeAttribute('data-title');
    }
  }
}
