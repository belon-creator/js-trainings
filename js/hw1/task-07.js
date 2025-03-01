const fontSizeControlElement = document.querySelector('#font-size-control');
const textElement = document.querySelector('#text');
const currentFontSise = document.querySelector('.value');

fontSizeControlElement.addEventListener('input', onRangeChange);

function onRangeChange(e) {
  currentFontSise.textContent = e.currentTarget.value;
 
  textElement.style.fontSize = `${e.currentTarget.value}px`;
}
