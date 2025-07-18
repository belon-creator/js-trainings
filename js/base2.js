// const fruits = ['яблуко', 'банан', 'апельсин'];

// function task1() {
//   console.log(fruits[1]);
// }
// task1(); // Розкоментуйте, щоб перевірити

// function task2() {
//   const fruits = ['яблуко', 'банан', 'апельсин'];
//   fruits.push('вишня');
//   fruits.shift();

//   console.log(fruits); // Для перевірки
// }
// task2(); // Розкоментуйте, щоб перевірити

// function task3() {
//   console.log(fruits.length);
// }
// task3(); // Розкоментуйте, щоб перевірити

// function task4() {
//   const numbers = [10, 20, 30, 40, 50];
//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);
//   }
// }
// task4(); // Розкоментуйте, щоб перевірити

// function task5() {
//   const numbers = [1, 2, 3, 4, 5];
//   numbers.forEach(number => console.log(number));
// }
// task5(); // Розкоментуйте, щоб перевірити

// function task6() {
//   const colors = ['червоний', 'зелений', 'синій', 'жовтий'];

//   const elementToFind = 'синій';

//   colors.includes(elementToFind) ? console.log('yes') : console.log('no');
// }
// task6(); // Розкоментуйте, щоб перевірити

// function task7() {
//   const ages = [12, 23, 17, 34, 16, 20];

//   const filteredAges = ages.filter(age => age >= 18);
//   console.log(filteredAges); // Для перевірки
// }
// task7(); // Розкоментуйте, щоб перевірити

// function task8() {
//   const prices = [100, 50, 200, 75];

//   const newPrices = prices.map(price => price * 1.1);
//   console.log(newPrices); // Для перевірки
// }
// task8(); // Розкоментуйте, щоб перевірити

// function task9() {
//   const arr1 = [1, 2, 3];
//   const arr2 = [4, 5, 6];

//   const combinedArr = [...arr1, ...arr2];
//   // Об'єднайте їх в один новий масив combinedArr.
//   console.log(combinedArr); // Для перевірки
// }
// task9(); // Розкоментуйте, щоб перевірити

// function task10() {
//   const unsortedNumbers = [5, 2, 8, 1, 9, 3];

//   const sortedNumbers = [...unsortedNumbers];
//   sortedNumbers.sort((a, b) => a - b);
//   // Відсортуйте цей масив у порядку зростання.
//   console.log(sortedNumbers); // Для перевірки
// }
// task10(); // Розкоментуйте, щоб перевірити

// function task1() {
//   const person = {
//     name: 'Vasya',
//     age: 20,
//     city: 'Kyiv',
//   };
//   console.log(person.name);
// }
// task1();

// function task2() {
//   const car = {
//     make: 'Toyota',
//     model: 'Camry',
//   };

//   car.year = 2025;
//   car.model = 'Corolla';
//   // Додайте нову властивість year (число) до об'єкта car.
//   // Змініть значення властивості model на "Corolla".
//   console.log(car); // Для перевірки
// }
// task2();

// function task3() {
//   const book = {
//     title: 'The Hobbit',
//     author: 'J.R.R. Tolkien',
//     year: 1937,
//   };

//   delete book.year;
//   // Видаліть властивість year з об'єкта book.
//   console.log(book); // Для перевірки
// }
// task3();

// function task4() {
//   const student = {
//     name: 'Alice',
//     age: 20,
//     major: 'Computer Science',
//   };

//   for (const key in student) {
//     console.log(key);
//   }
//   // Використовуючи цикл for...in, виведіть у консоль кожну властивість (ключ) об'єкта student.
// }
// task4();

// function task5() {
//   const product = {
//     id: 101,
//     name: 'Laptop',
//     price: 1200,
//   };
//   console.log(Object.keys(product));

//   // Використовуючи Object.keys(), отримайте масив всіх ключів об'єкта product і виведіть його в консоль.
// }
// task5();

// function task6() {
//   const settings = {
//     theme: 'dark',
//     fontSize: 16,
//     notifications: true,
//   };

//   console.log(Object.values(settings));
// }
// task6();

// function task7() {
//   const user = {
//     username: 'john_doe',
//     email: 'john@example.com',
//   };

//   'email' in user ? console.log('email - true') : console.log('email - false');
//   'password' in user
//     ? console.log('password - true')
//     : console.log('password - false');
// }
// task7();

// function task8() {
//   const address = {
//     street: 'Main St',
//     number: 123,
//   };
//   const contact = {
//     phone: '123-456-7890',
//     email: 'info@example.com',
//   };
//   const fullInfo = { ...address, ...contact };
//   console.log(fullInfo); // Для перевірки
// }
// task8();

// function task9() {
//   const company = {
//     name: 'Tech Solutions',
//     location: {
//       country: 'USA',
//       city: 'New York',
//     },
//     employees: 50,
//   };
//   console.log(company.location.city);
// }
// task9();

// function printUserDetails(user) {
//     console.log(`Ім'я: ${user.name}, Вік: ${user.age}`);
//     // Прийміть об'єкт user як параметр.
//     // Виведіть у консоль рядок у форматі: "Ім'я: [name], Вік: [age]".
//     // Приклад: "Ім'я: Max, Вік: 30"
// }

// function task10() {
//     const person1 = { name: "Max", age: 30 };
//     const person2 = { name: "Anna", age: 25 };
//     printUserDetails(person1)
//     printUserDetails(person2)
// }
// task10();

// const users = [
//   { id: 1, name: 'Alice', age: 30, isActive: true },
//   { id: 2, name: 'Bob', age: 24, isActive: false },
//   { id: 3, name: 'Charlie', age: 35, isActive: true },
//   { id: 4, name: 'David', age: 29, isActive: true },
//   { id: 5, name: 'Eve', age: 22, isActive: false },
// ];

// function task1() {
//   const userIdForFind = 2;
//   for (const user of users) {
//     if (userIdForFind === user.id) {
//       console.log(user.name);
//     }
//   }
// }
// task1();

// function task2() {
//   users.push({ id: 6, name: 'Frank', age: 40, isActive: true });

//   console.log(users); // Для перевірки
// }
// task2();

// function task3() {
//   const activeUsers = users.filter(user => user.isActive);

//   console.log(activeUsers); // Для перевірки
// }
// task3();

// function task4() {
//   const userNameForFind = 'Charlie';
//   for (const user of users) {
//     if (userNameForFind === user.name) {
//       console.log(user);
//     } else {
//       console.log('Користувача не знайдено');
//     }
//   }
// }
// task4();

// function task5() {
//   const userNames = users.map(user => user.name);

//   console.log(userNames); // Для перевірки
// }
// task5();

// function task6() {
//   const userToChangeStatus = 4;

//   for (const user of users) {
//     if (userToChangeStatus === user.id) {
//       user.isActive = false;
//     }
//   }

//   console.log(users); // Для перевірки всього масиву
// }
// task6();

// function task7() {
//   const userIdToDelete = 1;

//   // for (let i = 0; i < users.length; i+=1) {
//   //     const userId = array[i];
//   //      if (userIdToDelete === user.id) {
//   //         users.splice()
//   //     }
//   // }

//   for (const user of users) {
//     if (userIdToDelete === user.id) {
//       users.splice(user, 1);
//     }
//   }
//   // Видаліть користувача з id 1 з масиву users.
//   console.log(users); // Для перевірки
// }
// task7();

// function task8() {
//   const sortedUsers = users.sort((a, b) => {
//     return a.age - b.age;
//   });
//   console.log(sortedUsers); // Для перевірки

//   // Відсортуйте масив users за віком (age) у порядку зростання.
// }
// task8();

// function task9() {
//   const totalAge = users.reduce((total, user) => {
//     return total + user.age;
//   }, 0);
//   const averageAge = totalAge / users.length;
//   // Використовуючи метод reduce, обчисліть середній вік всіх користувачів.
//   console.log(averageAge); // Для перевірки
// }
// task9();

// function task10() {
//   // Перевірте, чи всі користувачі старші за 18 років.
//   users.every(user => console.log(user.age >= 18));
//   // Перевірте, чи є хоча б один користувач, молодший за 25 років.
//   users.some(user => console.log(user.age < 25));
//   // Виведіть відповідні результати в консоль.
// }
// task10();

const userInputEl = document.querySelector('#task-filter');
const taskListEl = document.querySelector('#task-list');
const listItemEl = taskListEl.querySelectorAll('li');

console.log(taskListEl);
console.log(listItemEl);

userInputEl.addEventListener('input', onUserInputChange);

function onUserInputChange(e) {
  const userinput = e.currentTarget.value.toLowerCase().trim();
  console.log(userinput);

  listItemEl.forEach(item => {
    // console.log(item.textContent.toLowerCase());
    const taskTxt = item.textContent.toLowerCase();
    if (taskTxt.includes(userinput)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none'; // Приховуємо елемент
    }
  });
}

const linksData = [
  { text: 'Google', href: 'https://www.google.com' },
  { text: 'OpenAI', href: 'https://openai.com' },
  { text: 'GitHub', href: 'https://github.com' },
  { text: 'MDN Web Docs', href: 'https://developer.mozilla.org/uk/' },
];

const linkListEl = document.querySelector('#link-list');

const links = linksData.map(link => {
  const linkEl = document.createElement('li');
  const aEl = document.createElement('a');

  aEl.href = link.href;
  aEl.textContent = link.text;

  linkEl.append(aEl);

  return linkEl;
});

linkListEl.append(...links);

// ==========

const changeStatusBoxEl = document.querySelector('#status-box');

changeStatusBoxEl.addEventListener('click', onBoxClick);

function onBoxClick() {
  changeStatusBoxEl.classList.toggle('active');
}

/*
Напишіть скрипт, який обчислить загальну вартість усіх товарів у списку ul#order-items.
 Кожен елемент <li> має атрибут data-price, що містить вартість товару. 
 Виведіть обчислену суму в span#total-price.

Підказки:
Отримайте доступ до всіх елементів li у списку.
Використовуйте dataset.price для доступу до значення атрибута data-price.
Не забудьте перетворити значення ціни на число.
*/

const orderItemsEl = document.querySelector('#order-items');
const orderElements = orderItemsEl.querySelectorAll('li');
const prices = document.querySelectorAll('li[data-price]')

console.log(prices.dataset);
