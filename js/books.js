import { books } from '../db/books.js';
console.log(books);

const container = document.querySelector('.container');
const findByAuthorElement = document.querySelector('.find-by-author');
const findByGenreElement = document.querySelector('.find-by-genre');
const newestBtn = document.querySelector('.newest');
const booksCounter = document.querySelector('.books-counter');
const addBookForm = document.querySelector('.add-book-form');

findByAuthorElement.addEventListener('input', findBooksByAuthor);
findByGenreElement.addEventListener('input', filterBooksByGenre);
newestBtn.addEventListener('click', findNewestBook);
addBookForm.addEventListener('submit', addNewBook);

function createMarkup(arr) {
  return arr
    .map(
      ({ title, author, year, genre, available, image }) => `<div class="book">
      <img width=140px src="${image}" alt="${title}">
        <h2>${title}</h2>
        <h3>${author}</h3>
        <p>${year}</p>
        <p>${genre}</p>
        <span>${available ? 'Доступна' : 'Недоступна'}</span>
    </div>`,
    )
    .join('');
}

container.insertAdjacentHTML('beforeend', createMarkup(books));

function findBooksByAuthor(e) {
  const userInput = e.target.value.toLowerCase().trim();
  const filteredBooks = books.filter(book =>
    book.author.toLowerCase().includes(userInput),
  );

  container.innerHTML = createMarkup(filteredBooks);
  booksCounter.textContent = `${countAvailableBooks(filteredBooks)}`;
}

function filterBooksByGenre(e) {
  const userInput = e.target.value.toLowerCase().trim();
  const filteredBooks = books.filter(book =>
    book.genre.toLowerCase().includes(userInput),
  );

  container.innerHTML = createMarkup(filteredBooks);
  booksCounter.textContent = `${countAvailableBooks(filteredBooks)}`;
}

function findNewestBook() {
  const newestBook = books.reduce(
    (newest, book) => (book.year > newest.year ? book : newest),
    books[0],
  );

  container.innerHTML = createMarkup([newestBook]);
  booksCounter.textContent = `${countAvailableBooks(filteredBooks)}`;
}

function countAvailableBooks(arr) {
  const availableBooksCount = arr.filter(book => book.available).length;
  console.log(`Кількість доступних книг: ${availableBooksCount}`);
  return availableBooksCount;
}
booksCounter.textContent = `${countAvailableBooks(books)}`;

function addNewBook(e) {
  e.prevaentDefault();

  const title = e.target.title.value;
  const author = e.target.author.value;
  const year = Number(e.target.year.value);
  const genre = e.target.genre.value;
  const image = e.target.image.value;
  const available = e.target.available.value;

  const newBook = {
    title,
    author,
    year,
    genre,
    image,
    available
  }
  books.push(newBook)
  console.log(books);
}

// Вам нужно написать функции, выполняющие следующие операции с этим массивом:

// Поиск книг по автору: Функция должна принимать имя автора
//  в качестве аргумента и возвращать массив книг,
// написанных этим автором. 🚩

// Фильтрация книг по жанру: Функция должна принимать название жанра
//  в качестве аргумента и возвращать массив книг этого жанра. 🚩

// Поиск новейшей книги: Функция должна возвращать объект книги
//  с самым поздним годом издания. 🚩

// Подсчет доступных книг: Функция должна возвращать количество книг,
//  доступных для выдачи. 🚩

// Добавление новой книги: Функция должна принимать объект книги
//  в качестве аргумента и добавлять его в массив.

// Ваш код тут

// Приклади використання:
// console.log(findBooksByAuthor("Дж. Р. Р. Толкін"));
// console.log(filterBooksByGenre("Фентезі"));
// console.log(findNewestBook());
// console.log(countAvailableBooks());
// addNewBook({
//   title
//   author
//   year
//   genre
//   available
// });
// console.log(books);
