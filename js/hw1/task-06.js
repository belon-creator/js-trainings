const userInput = document.querySelector('#validation-input');
const inputLength = Number(userInput.dataset.length);

console.log(inputLength);

userInput.addEventListener('change', onInputChange);

function onInputChange() {
  if (userInput.value.length === inputLength) {
    userInput.classList.remove('invalid');
    userInput.classList.add('valid');
  }

  if (userInput.value.length !== inputLength) {
    userInput.classList.remove('valid')
    userInput.classList.add('invalid');
  }
}
