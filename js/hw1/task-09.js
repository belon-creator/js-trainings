const widget = document.querySelector('.widget');
const colorValue = document.querySelector('.widget span');
const chngBtn = document.querySelector('.widget button');
const bodyEl = document.querySelector('body');

chngBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
  colorValue.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = colorValue.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// =============================
// 1

const couterBtn = document.querySelector('#click-button');
const couterValue = document.querySelector('#click-count');

couterBtn.addEventListener('click', onCounterBtnClick);

function onCounterBtnClick() {
  couterValue.textContent = Number(couterValue.textContent) + 1;
}

// 2

const textInput = document.querySelector('#text-input');
const outputTxt = document.querySelector('#output-text');

textInput.addEventListener('input', onInputChng);

function onInputChng(e) {
  outputTxt.textContent = e.currentTarget.value;
}

// 4

const filterInput = document.querySelector('#filter-input');
const itemList = document.querySelectorAll('#item-list li');

filterInput.addEventListener('input', onUserInput);

function onUserInput() {
  const lowerCaseTxt = filterInput.value.toLowerCase();

  itemList.forEach(item => {
    const txt = item.textContent.toLowerCase();

    if (txt.includes(lowerCaseTxt)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// 9

const inputOfUser = document.querySelector('#task-input');
const addTaskBtn = document.querySelector('#add-task');
const taskList = document.querySelector('#task-list');

addTaskBtn.addEventListener('click', onTaskBtnClick);

function onTaskBtnClick(evt) {
  const task = document.createElement('li');

  task.textContent = inputOfUser.value;
  taskList.append(task)

  inputOfUser.value = '';

 
}

