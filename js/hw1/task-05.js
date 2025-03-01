const refs = {
  inputValue: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
};

refs.inputValue.addEventListener('input', onInputChange);

function onInputChange (evt) {
    refs.nameOutput.textContent = evt.currentTarget.value;

    if (refs.nameOutput.textContent === '') {
        refs.nameOutput.textContent = 'Anonymous'
    }
}