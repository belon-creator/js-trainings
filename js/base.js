// module 1

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = grapes - apples;
// console.log(diff)

// let students = 100;
// students += 50;
// console.log(students);

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// const name = 'Генератор защитного поля';
// let price = 1000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);
// price = 2000;
// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// const total = 100;
// let ordered = prompt('enter value');
// ordered = Number(ordered)

// if (ordered > total) {
//     console.log('На складе недостаточно твоаров!');
// } else {
//     console.log('Заказ оформлен, с вами свяжется менеджер');
// }

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let msg;
// const userInput = prompt('enter value')

// if (!userInput) {
//     console.log('Отменено пользователем!');
// } else if (userInput === ADMIN_PASSWORD) {
//     console.log('Добро пожаловать!');
// } else {
//     console.log('Доступ запрещен, неверный пароль!');
// }

// const credits = 23580;
// const pricePerDroid = 3500;
// let totalPrice;
// let inputOfUser = prompt('количество дроидов которые пользователь хочет купить');
// inputOfUser = Number(inputOfUser);
// if (!inputOfUser) {
//     console.log('Отменено пользователем!');
// } else if (inputOfUser <= 0) {
//     console.log('Возврата нету');
// }

// else {
//     totalPrice = pricePerDroid * inputOfUser;
//     if (totalPrice > credits) {
//         console.log('На вашем счету недостаточно средств!');
//     } else {
//         console.log(`Вы купили ${inputOfUser} дроидов за ${totalPrice} кредитов. на счету осталось ${credits - totalPrice} кредитов`);
//     }

// }

// let userInput = prompt('enter your country');
// userInput = userInput.toLowerCase();
// let price = 0

// switch (userInput) {
//     case 'китай':
//         price = 100;
//         break;
//         case 'чили':
//             price = 1300;
//         break;
//         case 'австралия':
//             price = 150;
//         break;
//         case 'индия':
//             price = 200;
//         break;
//         case 'ямайка':
//             price = 300;
//         break;

//     default:
//         console.log('В вашей стране доставка не доступна');
//         break;
// }

// console.log(`'Доставка в ${userInput} будет стоить ${price} кредитов'`);

// module 2

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     let num = i + 1;
//     console.log(`${num} - ${array[i]}`);
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// const calculateEngravingPrice = function (message, pricePerWord) {
//   const splited = message.split(' ');
//   const totalPrice = splited.length * pricePerWord;
//   return `price for graving "${message}" is ${totalPrice}`;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// const findLongestWord = function (string) {
//   const arrWords = string.split(' ');
//   let longestWord = arrWords[0];

//   for (let i = 0; i < arrWords.length; i += 1) {
//     if (arrWords[i].length > longestWord.length) {
//       longestWord = arrWords[i];
//     }
//   }
//   return console.log('longestWord - ', longestWord);
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// const formatString = function (string) {
//   const arr = string.split('');

//   if (arr.length >= 40) {
//     arr.splice(40);
//   } else {
//     return string;
//   }

//   return arr.join('').concat('...');
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка

// const checkForSpam = function (message) {
//   const arr = message.toLowerCase();
//   return arr.includes('sale') || arr.includes('spam');
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// let input;
// const numbers = [];
// let total = 0;

// while (true) {
//   input = prompt("Введите число (или нажмите Cancel для выхода):");

//   if (!input) {
//     break;
//   }

//   const number = Number(input);

//   if (isNaN(number)) {
//     alert("Было введено не число, попробуйте еще раз");
//   } else {
//     numbers.push(number);
//   }
// }

// if (numbers.length > 0) {
//   for (const num of numbers) {
//     total += num;
//   }
//   console.log(`Общая сумма чисел равна ${total}`);
// } else {
//   console.log("Вы не ввели ни одного числа.");
// }

// const cart = [23, 5, 78, 81, 9, 7, 50, 777, 888, 555, 20];

// function addElements() {
//   let total = 0;

//   for (const element of cart) {
//     total += element;
//     console.log(element);
//   }
//   console.log(total);
// }

// // addElements(cart);
// addElements(cart);

// gpt tasks

//
// const car = {
//   brand: 'Toyota',
//   model: 'Corolla',
//   year: 2020,
//   color: 'red',
//   mileage: 50000,
//   owner: {
//     name: 'Alex',
//     age: 35,
//     city: 'Kyiv',
//   },
// };

// car.color = 'black';
// car.mileage += 10000;
// car.isInsured = true;
// car.owner.city = 'Lviv';

// console.log(car);

// // добавляет поле mood со значением 'happy'
// // заменяет значение hobby на 'skydiving'
// // заменяет значение premium на false
// // выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// for (const key of Object.keys(user)) {
//   console.log(`${key} : ${user[key]}`);
// }

// const countProps = function (obj) {
//   const countOfKeys = Object.keys(obj).length;
//   return countOfKeys;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// const findBestEmployee = function (employees) {
//   let bestEmployee = '';
//   let bestEmployeeScore = 0;

//   for (const employee in employees) {
//     if (employees[employee] > bestEmployeeScore) {
//       bestEmployeeScore = employees[employee];
//       bestEmployee = employee;
//     }
//   }
//   return bestEmployee;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// const countTotalSalary = function (employees) {
//   const salaries = Object.values(employees);
//   let totalSalary = 0;

//   for (const salary of salaries) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const values = [];

//   for (const element of arr) {
//     if (element[prop] !== undefined) {
//       values.push(element[prop]);
//     }
//   }
//   return values;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(`${key} - ${book[key]}`);
// }

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   // console.log(qwe);

//   for (const element of allProdcuts) {
//     if (element.name === productName) {
//       return `заказано ${productName}, количество ${element.quantity} по цене ${
//         element.price
//       }, общая стоимость ${element.price * element.quantity}`;
//     }
//   }
//   return `товара ${productName} нету`;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'аива'));
// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// 1

// const users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
//   { id: 3, name: 'Charlie', age: 28 },
// ];

// function findUserByName(users, userName) {
//   for (const user of users) {
//     if (userName === user.name) {
//       return user;
//     }
//   }
//   return 'user is not found';
// }

// console.log(findUserByName(users, 'Bob')); // { id: 2, name: 'Bob', age: 30 }
// console.log(findUserByName(users, 'David')); // null

// // 2

// const products1 = [
//   { name: 'Laptop', price: 1500, quantity: 2 },
//   { name: 'Phone', price: 800, quantity: 5 },
//   { name: 'Tablet', price: 1200, quantity: 3 },
// ];

// function calculateTotal(products) {
//   for (const product of products) {
//     return `total price is ${product.price * product.quantity}`;
//   }
// }

// console.log(calculateTotal(products1)); // ??? (порахуєш сам 😉)

// // 3

// const students = [
//   { name: 'Alice', score: 85 },
//   { name: 'Bob', score: 60 },
//   { name: 'Charlie', score: 78 },
//   { name: 'David', score: 50 },
// ];

// function getPassedStudents(students, minScore) {
//   const passedStudents = [];
//   for (const student of students) {
//     if (student.score > minScore) {
//       passedStudents.push(student.name);
//     }
//   }
//   return passedStudents;
// }

// console.log(getPassedStudents(students, 70)); // ['Alice', 'Charlie']

// // 4

// const products = [
//   { name: 'TV', price: 500 },
//   { name: 'Laptop', price: 1200 },
//   { name: 'Phone', price: 800 },
// ];

// function findMostExpensiveProduct(products) {
//   let mostExpensiveProduct = products[0];

//   for (const product of products) {
//     if (product.price > mostExpensiveProduct.price) {
//       mostExpensiveProduct = product;
//     }
//   }

//   return mostExpensiveProduct.name;
// }

// console.log(findMostExpensiveProduct(products)); // 'Laptop'

// const usersInCity = [
//   { name: 'Alice', city: 'Kyiv' },
//   { name: 'Bob', city: 'Lviv' },
//   { name: 'Charlie', city: 'Kyiv' },
//   { name: 'David', city: 'Odesa' },
//   { name: 'Eve', city: 'Lviv' },
// ];

// function countUsersByCity(users) {
//   const cityCounts = {};

//   for (const user of users) {
//     if (cityCounts[user.city]) {
//       cityCounts[user.city] += 1;
//     } else {
//       cityCounts[user.city] = 1;
//     }
//   }

//   return cityCounts;
// }

// console.log(countUsersByCity(usersInCity));
// { Kyiv: 2, Lviv: 2, Odesa: 1 }

// const numbers = [10, 25, 38, 41, 55, 62];

// function filterNumbers(arr, filterFunction) {
//   const filteredNumbers = [];

//   for (const num of arr) {
//     if (filterFunction(num)) {
//       filteredNumbers.push(num);
//     }
//   }
//   return filteredNumbers;
// }

// function isEven(num) {
//   return num % 2 === 0;
// }

// function isOdd(num) {
//   return num % 2 !== 0;
// }

// // Виклики:
// console.log(filterNumbers(numbers, isEven)); // [10, 38, 62]
// console.log(filterNumbers(numbers, isOdd)); // [25, 41, 55]

// // 2
// function operate(a, b, callback) {
//   return callback(a, b);
// }
// function add(x, y) {
//   return x + y;
// }
// function multiply(x, y) {
//   return x * y;
// }

// // Виклики:
// console.log(operate(5, 3, add)); // 8
// console.log(operate(5, 3, multiply)); // 15

// // 3

// function processString(str, callback) {
//   return callback(str);
// }

// function toUpperCase(str) {
//   return str.toUpperCase();
// }
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// // Виклики:
// console.log(processString('hello', toUpperCase)); // "HELLO"
// console.log(processString('hello', reverseString)); // "olleh"

// // 4

// const arr = [1, 2, 3, 4, 5];

// function forEachElement(arr, callback) {
//   for (let i = 0; i < arr.length; i += 1) {
//     callback(arr[i]);
//     console.log(arr[i]);
//   }
// }
// function logItem(item) {
//   return item;
// }

// // Виклик:
// forEachElement(arr, logItem);
// // 1
// // 2
// // 3
// // 4
// // 5

// // 5

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 20 },
// ];

// function sortBy(users, key, callback) {
//   const copyUsers = [...users];
//   return copyUsers.sort((a, b) => callback(a[key], b[key]));
// }

// const compareAscending = (a, b) => a - b;
// const compareDescending = (a, b) => b - a;

// // Виклики:
// console.log(sortBy(users, 'age', compareAscending));
// // [{ name: 'Charlie', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]

// console.log(sortBy(users, 'age', compareDescending));
// // [{ name: 'Bob', age: 30 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]

// 1

// const numbers = [10, 20, 30, 40, 50];
// numbers.forEach(number => console.log(number));

// // 2

// const numbs = [1, 2, 3, 4, 5];
// numbs.forEach(numb => console.log((numb *= 2)));

// // 3

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 20 },
// ];
// users.forEach(user => console.log(`${user.name}`));

// // 4

// const numbersToCalcTotal = [5, 10, 15, 20];
// let total = 0;
// numbersToCalcTotal.forEach(num => (total += num));
// console.log(total);

// // 5

// const usersToId = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];

// usersToId.forEach((user, idx) => {
//   user.id = idx + 1;
//   console.log(user);
// });

// // 6

// const words = ['hello', 'world', 'javascript'];

// words.forEach(word => console.log(word.toUpperCase()));

// // 7

// const wrds = ['apple', 'banana', 'cherry'];
// const wrdLength = [];
// wrds.forEach(word => wrdLength.push(word.length));
// console.log(wrdLength);

// // 8

// const products = [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Phone', price: 500 },
//   { name: 'Tablet', price: 700 },
// ];

// products.forEach(product =>
//   console.log(`${product.name}: ${product.price * 1.1}`),
// );

// // 9

// const nmbrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const even = [];
// const odd = [];

// nmbrs.forEach(numb => (numb % 2 === 0 ? even.push(numb) : odd.push(numb)));
// console.log(even);
// console.log(odd);

// // 10

// const usrs = [
//   { name: 'Alice', age: 17 },
//   { name: 'Bob', age: 21 },
//   { name: 'Charlie', age: 16 },
//   { name: 'David', age: 19 },
// ];
// usrs.forEach(user =>
//   user.age >= 18
//     ? console.log(`${user.name} повнолітній`)
//     : console.log(`${user.name} неповнолітній`),
// );

// 1
// const numbers = [1, 2, 3, 4, 5];
// // Очікуваний результат: [2, 4, 6, 8, 10]

// const doubledNumbers = numbers.map(number => number * 2);
// console.log(doubledNumbers);

// // 2

// const words = ['apple', 'banana', 'cherry'];
// // Очікуваний результат: [5, 6, 6]
// const wordsLengthArr = [];
// words.map(word => wordsLengthArr.push(word.length));
// console.log(wordsLengthArr);

// // 3

// const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
// // Очікуваний результат: ['Привіт, Alice!', 'Привіт, Bob!', 'Привіт, Charlie!']
// const greetMsg = users.map(user => `Привіт, ${user.name}!`);
// console.log(greetMsg);

// // 4

// const celsiusTemps = [0, 20, 30, 100];
// // Очікуваний результат: [32, 68, 86, 212]
// const farTemps = celsiusTemps.map(temp => (temp * 9) / 5 + 32);
// console.log(farTemps);

// // 5

// const usrs = [
//   { name: 'Alice', age: 17 },
//   { name: 'Bob', age: 21 },
//   { name: 'Charlie', age: 16 },
//   { name: 'David', age: 19 },
// ];
// // Очікуваний результат:
// // [{ name: 'Alice', age: 17, isAdult: false }, ..., { name: 'David', age: 19, isAdult: true }]
// const updatedUsers = usrs.map(user => {
//   if (user.age >= 18) {
//     return { ...user, isAdult: true };
//   }
//   return { ...user, isAdult: false };
// });
// console.log(updatedUsers);

// // 6

// const prices = [10, 20.5, 5.99, 100];
// // Очікуваний результат: ['$10.00', '$20.50', '$5.99', '$100.00']

// const formattedPrices = prices.map(price => `$${price.toFixed(2)}`);
// console.log(formattedPrices);

// // 7

// const products = [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Phone', price: 500 },
//   { name: 'Tablet', price: 700 },
// ];
// // Очікуваний результат: ['Laptop', 'Phone', 'Tablet']
// const productNames = products.map(product => product.name);
// console.log(productNames);

// // 8

// const items = [{ name: 'Item1' }, { name: 'Item2' }, { name: 'Item3' }];
// // Очікуваний результат:
// // [{ name: 'Item1', id: 1 }, { name: 'Item2', id: 2 }, { name: 'Item3', id: 3 }]
// const updatedItems = items.map((item, idx) => ({
//   ...item,
//   id: idx + 1,
// }));
// console.log(updatedItems);

// // 9

// const productNames1 = ['Big Laptop', 'Smart Phone', 'Wireless Mouse'];
// // Очікуваний результат: ['big-laptop', 'smart-phone', 'wireless-mouse']
// const urlCase = productNames1.map(product =>
//   product.split(' ').join('-').toLowerCase(),
// );
// console.log(urlCase);

// // 10

// const people = [
//   { firstName: 'Alice', lastName: 'Brown', age: 25 },
//   { firstName: 'Bob', lastName: 'Smith', age: 30 },
//   { firstName: 'Charlie', lastName: 'Adams', age: 20 },
// ];
// // Очікуваний результат:
// // [{ fullName: 'Alice Brown', age: 25 }, { fullName: 'Bob Smith', age: 30 }, { fullName: 'Charlie Adams', age: 20 }]

// const fullNames = people.map(person => {
//   return {
//     fullName: `${person.firstName} ${person.lastName}`,
//     age: person.age,
//   };
// });

// console.log(fullNames);

// 1

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Очікуваний результат: [2, 4, 6, 8, 10]

// const evenArr = numbers.filter(number => number % 2 === 0);
// console.log(evenArr);

// // 2

// const words = ['apple', 'banana', 'cherry', 'kiwi', 'watermelon'];
// // Очікуваний результат: ['banana', 'cherry', 'watermelon']
// const filteredWords = words.filter(word => word.length > 5);
// console.log(filteredWords);

// // 3

// const users = [
//   { name: 'Alice', age: 17 },
//   { name: 'Bob', age: 21 },
//   { name: 'Charlie', age: 16 },
//   { name: 'David', age: 19 },
// ];
// // Очікуваний результат: [{ name: 'Bob', age: 21 }, { name: 'David', age: 19 }]
// const filteredUsers = users.filter(user => user.age >= 18);
// console.log(filteredUsers);

// // 4

// const products = [
//   { name: 'Laptop', price: 1500 },
//   { name: 'Phone', price: 800 },
//   { name: 'Tablet', price: 700 },
// ];
// // Очікуваний результат: [{ name: 'Phone', price: 800 }, { name: 'Tablet', price: 700 }]
// const filteredProducts = products.filter(product => product.price < 1000);
// console.log(filteredProducts);

// // 5

// const nmbrs = [1, 2, 3, 2, 4, 5, 1, 6, 7, 8, 5, 9];
// // Очікуваний результат: [3, 4, 6, 7, 8, 9]
// const uniqueNumbs = nmbrs.filter((numbers, idx, arr) => arr.indexOf(numbers) === idx);
// console.log(uniqueNumbs);

// // 6
// const activeUsers = [
//   { name: 'Alice', isActive: true },
//   { name: 'Bob', isActive: false },
//   { name: 'Charlie', isActive: true },
//   { name: 'David', isActive: false },
// ];
// // Очікуваний результат: [{ name: 'Alice', isActive: true }, { name: 'Charlie', isActive: true }]
// const filteredUsrs = activeUsers.filter(user => user.isActive)
// console.log(filteredUsrs);

// // 7

// const strings = ['hello', '', 'world', ' ', 'JavaScript', ''];
// // Очікуваний результат: ['hello', 'world', 'JavaScript']
// const fixedArr = strings.filter(string => string !== '' && string !== ' ')
// console.log(fixedArr);

// // 8

// const usrs = [
//   { name: 'Alice', city: 'Kyiv' },
//   { name: 'Bob', city: 'Lviv' },
//   { name: 'Charlie', city: 'Kyiv' },
//   { name: 'David', city: 'Odesa' },
// ];
// // Очікуваний результат: [{ name: 'Alice', city: 'Kyiv' }, { name: 'Charlie', city: 'Kyiv' }]

// const cityOfUser = usrs.filter(user=> user.city === 'Kyiv')
// console.log(cityOfUser);

// // 9

// const wrds = ['apple', 'banana', 'cherry', 'kiwi', 'grape'];
// // Очікуваний результат: ['apple', 'banana', 'cherry', 'grape']
// const wordsWithA = wrds.filter(word => word.includes('a'))
// console.log(wordsWithA);

// // 10

// const values = [0, 1, false, 2, '', 3, null, 'hello', undefined, 'world'];
// // Очікуваний результат: [1, 2, 3, 'hello', 'world']
// const truthy = values.filter(value => value)
// console.log(truthy);

// 1

// const nums = [1, 2, 3, 4, 5];

// const nusSum = nums.reduce((acc, num) => acc + num, 0);

// console.log(nusSum);

// // 2

// const num = [2, 3, 4];

// const umltiolyNum = num.reduce((acc, number) => acc * number, 1);
// console.log(umltiolyNum);

// // 3

// const arr = ['Hello', 'world', 'this', 'is', 'JavaScript'];

// const string = arr.reduce((acc, word) => acc + ' ' + word, '');
// console.log(string);

// // 4

// const fruits = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];

// const obj = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(obj);

// // 6

// const products = [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Phone', price: 500 },
//   { name: 'Tablet', price: 700 },
// ];

// const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
// console.log(totalPrice);

// // 8

// const votes = ['yes', 'no', 'yes', 'yes', 'no', 'yes', 'no'];

// const totalVotes = votes.reduce((acc, vote) => {
//   acc[vote] = (acc[vote] || 0) + 1;
//   return acc;
// }, {});
// console.log(totalVotes);

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// // =================

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// =====

// const user = {
//   name: 'John Doe',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'New York',
//     state: 'NY',
//     zip: '10001',
//   },
//   hobbies: ['reading', 'painting', 'coding'],
//   greet() {
//     console.log(`Hello, my name is ${this.name}!`);
//   },
// }

// user.greet(); // Hello, my name is John Doe!

// function showThis() {
//   console.log('showthis this', this);
//   console.log('showthis arguments', this.age);
// }

// showThis.bind(user)();