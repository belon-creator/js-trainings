const container = document.querySelector('.js-content');
const resetBtn = document.querySelector('.js-new-game');
const oWinsEl = document.querySelector('.o-wins');
const xWinsEl = document.querySelector('.x-wins');
let player = 'X';

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let historyX = [];
let historyO = [];
let xWins = 0;
let oWins = 0;

container.addEventListener('click', onFieldClick);
resetBtn.addEventListener('click', resetGame);

function createMarkup() {
  let markup = '';

  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item js-item" data-id="${i}"></div>`;
  }
  container.innerHTML = markup;
}

createMarkup();

function onFieldClick(e) {
  const targetCell = e.target.classList.contains('js-item');
  const winner = player;
  let result = false;

  if (!targetCell || e.target.textContent) {
    return;
  }

  const id = Number(e.target.dataset.id);

  if (player === 'X') {
    historyX.push(id);
    result = isWinner(historyX);
  } else {
    historyO.push(id);
    result = isWinner(historyO);
  }

  e.target.textContent = player;

  if (result) {
    if (winner === 'X') {
      xWinsEl.textContent = xWins += 1;
      console.log('xWins', xWins);
    }

    if (winner === 'O') {
      oWinsEl.textContent = oWins += 1;
      console.log('oWins', oWins);
    }

    if (
      Number(oWinsEl.textContent) === 10 ||
      Number(xWinsEl.textContent) === 10
    ) {
      oWinsEl.textContent = 0;
      xWinsEl.textContent = 0;
    }

    const resultText = document.createElement('p');
    resultText.textContent = `Winner ${player} 😎`;
    container.prepend(resultText);
    console.log(`winner ${player}`);
    setTimeout(resetGame, 3000);

    return;
  }
  player = player === 'X' ? 'O' : 'X';
  console.log(isWinner(historyX));
}

function isWinner(arr) {
  return wins.some(item => item.every(id => arr.includes(id)));
}

function resetGame() {
  createMarkup();
  historyO = [];
  historyX = [];
}
