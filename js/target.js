// Завдання 1: Визначення натиснутої кнопки
// Створи три кнопки всередині <div> і додай обробник подій,
// який виводитиме в консоль текст натиснутої кнопки.

// 📌 Підказка: Використовуй event.target.textContent.

const buttonsContainer = document.querySelector('#buttons-container');
console.log(buttonsContainer);

buttonsContainer.addEventListener('click', onBtnsContainerClick);

function onBtnsContainerClick(e) {
  if (e.target.tagName !== 'BUTTON') {
    console.log(`not btn click`);
    return;
  }
  e.target.style.backgroundColor = 'yellow';
  console.log(e.target.textContent);
}

// Завдання 2: Відстеження кліків по списку
// Є список <ul> з кількома <li>. При натисканні на будь-який елемент списку,
//  у консоль повинно виводитися його текстове значення.
// 📌 Підказка: Використовуй event.target для отримання натиснутого <li>.

const someList = document.querySelector('.some-list');

someList.addEventListener('click', onSomeListItemClick);

function onSomeListItemClick(e) {
  if (!e.target.classList.contains('some-list-item')) {
    console.log('not li click');
    return;
  }

  console.log(`Text in li is ${e.target.textContent}`);
}

// Завдання 3: Зміна кольору при кліку
// Створи <div> із кількома <button> всередині.
//  При натисканні на кнопку її фон змінюється на жовтий.

// 📌 Підказка: event.target.style.backgroundColor = 'yellow';

// Завдання 4: Перевірка кліку по конкретному елементу
// Є <div>, що містить кнопки та звичайний текст.
// Якщо натиснута кнопка — виведи "Кнопка натиснута", якщо клік по тексту — "Клік по тексту".

// 📌 Підказка: Перевіряй event.target.tagName === 'BUTTON'.

const clickArea = document.querySelector('#click-area');

clickArea.addEventListener('click', onClickAreaEvt);

function onClickAreaEvt(e) {
  if (e.target.tagName !== 'P' && e.target.tagName !== 'BUTTON') {
    return;
  }

  if (e.target.tagName === 'P') {
    console.log('Клік по тексту');
  }

  if (e.target.tagName === 'BUTTON') {
    console.log('Кнопка натиснута');
  }
}

// Завдання 5: Делегування подій у таблиці
// Є таблиця <table>. Додай обробник на <table>,
// який визначатиме, в яку комірку <td> натиснули.

// 📌 Підказка: Використовуй event.target.closest('td').

const dataTable = document.querySelector('#data-table');

dataTable.addEventListener('click', onDataTableClick);

function onDataTableClick(e) {
  const cell = e.target.closest('td');
  if (!cell) {
    return;
  }
  console.log(`Click on ${cell.textContent}`);
}
// Завдання 6: Видалення елементів списку
// Є список <ul>, де кожен <li> має кнопку "❌". При натисканні на "❌" відповідний <li> повинен видалятися.

// 📌 Підказка: Використовуй event.target.closest('li').remove().

const taskList = document.getElementById('task-list');

taskList.addEventListener('click', onRemoveBtnClick);

function onRemoveBtnClick(e) {
  const removeBtn = e.target.classList .contains('delete-btn');

  if (!removeBtn) {
    return;
  }

  e.target.closest('li').remove();
}
// Завдання 7: Форма з делегуванням подій
// Є форма з полями input та select. Додай обробник на <form>,
//  який виводитиме в консоль назву та значення будь-якого зміненого поля.

// 📌 Підказка: event.target.name, event.target.value.

const userForm = document.getElementById('user-form')

userForm.addEventListener('focusout', onFormChange)

function onFormChange(e) {
    e.preventDefault()
    const changedInput = e.target;

    if (!changedInput.name) {
        return
    }

    console.log(`${changedInput.name} ${changedInput.value}`);
}

// Завдання 8: Визначення області кліку
// Є сторінка з header, main, footer. При кліку на будь-яку область виводь в консоль,
// в якому саме <section> відбувся клік.

// 📌 Підказка: Використовуй event.target.closest('section').

// Завдання 9: Галерея з делегуванням
// Є список <ul> з картинками <img>. При натисканні на будь-яку картинку
//  вона повинна збільшуватися в розмірі.

// 📌 Підказка: event.target.style.transform = 'scale(1.2)'.

// Завдання 10: Перевірка, чи клік всередині блоку
// Є <div> з класом .box. Якщо клік відбувся всередині .box, виведи "Клік у блоці",
//  якщо зовні — "Клік поза блоком".

// 📌 Підказка: Використовуй event.target.closest('.box') === null.
