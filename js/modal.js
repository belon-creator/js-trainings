const modalRefs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

modalRefs.openModalBtn.addEventListener('click', onModalOpen);
modalRefs.closeModalBtn.addEventListener('click', onCloseModal);
modalRefs.backdrop.addEventListener('click', onBackdropClick);

function onModalOpen() {
  window.addEventListener('keydown', onEscPress);
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscPress);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onEscPress(e) {
  const ESC_KEY = 'Escape';
  const isEscKey = e.code === ESC_KEY;

  if (isEscKey) {
    onCloseModal();
  }
}
