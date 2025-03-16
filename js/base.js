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

// =================================================================

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Кожна транзакція - це об'єкт з властивостями: id, type і amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює і повертає об'єкт транзакції.
//    * Приймає суму і тип транзакції.
//    */
//   createTransaction(amount, type, balance) {
//     const transaction = {
//       id: Date.now(),
//       type,
//       amount,
//       balance,
//     };
//     this.transactions.push(transaction);

//     return transaction;
//   },

//   /*
//    * Метод відповідає за додавання суми до балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій
//    */
//   deposit(amount) {
//     if (amount <= 0) {
//       console.log('dccfdv');
//       return;
//     }
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.balance += amount;
//     this.transactions.push(transaction);

//     return transaction;
//   },

//   /*
//    * Метод відповідає за зняття суми з балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій.
//    *
//    * Якщо amount більше, ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливо, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount <= 0) {
//       console.log('dccfdv');
//       return;
//     }

//     if (amount > this.balance) {
//       console.log('Not enough funds');
//       return;
//     }
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.balance -= amount;
//     this.transactions.push(transaction);

//     return transaction;
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає і повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     return this.transactions.find(transaction => transaction.id === id);
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     return this.transactions
//       .filter(transaction => transaction.type === type)
//       .reduce((acc, transaction) => acc + transaction.amount, 0);
//   },
// };

// account.getBalance();
// account.deposit(1000);
// console.log(account);
// account.withdraw(100);
// console.log(account);
// account.deposit(-1000);

// console.table(account);
// console.log(account);

// // 1

// const person = {
//   name: 'Alice',
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// person.greet(); // Очікуваний результат: "Hello, my name is Alice"

// // 2

// const notifier = {
//   message: 'You have a new notification!',
//   showMessage() {
//     setTimeout(() => {
//       console.log(this.message);
//     }, 1000);
//   },
// };

// notifier.showMessage();

// //   3

// const user = {
//   name: 'Bob',
//   printName() {
//     console.log(this.name);
//   },
// };

// user.printName();

// // 4

// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }

//   describeCar() {
//     console.log(`This car is a ${this.brand} ${this.model}.`);
//   }
// }

// const myCar = new Car('Toyota', 'Corolla');
// myCar.describeCar(); // Очікуваний результат: "This car is a Toyota Corolla."

// // 5

// const prsn = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const getName = prsn.getFullName.bind(prsn);
// console.log(getName()); // Очікуваний результат: "John Doe"

// //   6

// function Person(name) {
//   this.name = name;
//   this.introduce = this.introduce.bind(this);
// }

// Person.prototype.introduce = function () {
//   console.log(`Hi, my name is ${this.name}`);
// };

// const alice = new Person('Alice');
// alice.introduce(); // Очікуваний результат: "Hi, my name is Alice"

// //   7

// const dog = {
//   name: 'Buddy',
//   bark() {
//     console.log(`${this.name} says woof!`);
//   },
// };

// dog.bark();

// //   8

// const cat = {
//     name: 'Whiskers',
//     meow() {
//       setTimeout(() => { // Використовуємо стрілкову функцію
//         console.log(`${this.name} says meow!`);
//       }, 1000);
//     },
//   };

//   cat.meow();
//   // Через 1 секунду: "Whiskers says meow!"

// // 9

// function greet() {
//   console.log(`Hello, my name is ${this.name}`);
// }

// const usr = { name: 'Emma' };

// greet.call(usr); // Очікуваний результат: "Hello, my name is Emma"

// //   10

// const counter = {
//   count: 0,
//   increment() {
//     function add = () => {
//        this.count++;
//     }
//     add();
//   },
// };

// counter.increment();
// console.log(counter.count); // Очікуваний результат: 1

// // 1. Привітання користувача
// // Створи об'єкт user з властивістю name і методом greet, який виводить у консоль рядок:
// const user = {
//   name: 'Alex',
//   greetName() {
//     console.log(`Hi my mame is ${this.name}`);
//   },
// };
// user.greetName();
// // "Привіт, мене звати Ім'я!"
// // Де Ім'я — це значення властивості name цього об'єкта.

// // 2. Лічильник
// // Створи об'єкт counter з властивістю count, яка починається з 0, та методом increment,
// //  який збільшує count на 1 і виводить нове значення в консоль.

// const counter = {
//   count: 0,

//   increaseCount() {
//     this.count += 1;
//     console.log(this.count);
//   },
//   decreaseCount() {
//     this.count -= 1;
//     console.log(this.count);
//   },
// };

// counter.increaseCount();
// counter.increaseCount();
// counter.increaseCount();
// counter.decreaseCount();

// // 3. Опис автомобіля
// // Створи об'єкт car з властивостями brand і model та методом getInfo,
// //  який повертає рядок у форматі: "Це автомобіль Brand Model."
// // Де Brand і Model беруться з відповідних властивостей об'єкта.

// const car = {
//   brand: 'Audi',
//   model: 'SQ8',
//   showCar() {
//     console.log(`My car is ${this.brand} ${this.model}`);
//   },
// };
// car.showCar();

// // 4. Витрати користувача
// // Створи об'єкт wallet з початковим балансом 1000 і методом spend(amount),
// // який зменшує баланс на amount і виводить у консоль залишок.

// const wallet = {
//   balance: 1000,
//   spend(amount) {
//     if (amount <= this.balance) {
//       return (this.balance -= amount);
//     } else {
//       return 'str';
//     }
//   },
// };

// console.log(wallet.spend(200));

// // 5. Додавання товару до кошика
// // Створи об'єкт cart із масивом items та методом addItem(item),
// //  який додає переданий item у масив і виводить оновлений список товарів.

// const catr = {
//   items: [],
//   addItem(item) {
//     this.items.push(item);
//     console.log(this.items);
//   },
// };

// catr.addItem('Cat food');
// catr.addItem('Beer');

// // 6. Таймер зі стрілковою функцією
// // Створи об'єкт timer із методом start,
// //  який через 2 секунди виводить повідомлення: "Час вийшов!"
// // Використай setTimeout та стрілкову функцію, щоб зберегти правильний this.

// const timer = {
//   start() {
//     setTimeout(() => {
//       console.log('Час вийшов!');
//     }, 2000);
//   },
// };

// timer.start();
// // 7. Видалення користувача
// // Створи об'єкт usersList, який містить масив users.
// //  Додай метод removeUser(name), який видаляє користувача з масиву
// // та виводить оновлений список.

// const usersList = {
//   users: ['Alice', 'Bob', 'Charlie'],

//   removeUser(name) {
//     this.users.map(user => {
//       if (user === name) {
//         this.users.splice(this.users.indexOf(user), 1);
//         return console.log(this.users);
//       }
//     });
//   },
// };
// usersList.removeUser('Alice');
// usersList.removeUser('Bob');

// // 8. Перемикання стану
// // Створи об'єкт toggle з властивістю isOn: false і методом switch(),
// // який змінює isOn на протилежне значення та виводить його у консоль.

// const toggle = {
//   isOn: false,

//   switch() {
//     this.isOn = !this.isOn;
//     console.log(this.isOn);
//   },
// };

// toggle.switch();

// // 9. Логін користувача
// // Створи об'єкт userAuth з властивістю isLoggedIn:
// //  false та методом login(), який змінює isLoggedIn на true і
// //  виводить повідомлення: "Користувач увійшов у систему!"

// const userAuth = {
//   isLoggedIn: false,

//   login() {
//     this.isLoggedIn = true;
//     console.log('Користувач увійшов у систему!');
//   },
// };

// userAuth.login();

// // 10. Вивід адреси
// // Створи об'єкт address з властивостями city та street і
// // методом getAddress(), який повертає рядок: "Адреса: місто, вулиця."
// // Де місто і вулиця беруться з об'єкта.

// const address = {
//   city: 'Lviv',
//   street: 'Qwerty',

//   getAddress() {
//     console.log(`Адреса: ${this.city}, ${this.street}`);
//   },
// };

// address.getAddress();

// const user = {
//   name: 'Alice',
//   greet() {
//     console.log(`Привіт, мене звати ${this.name}!`);
//   },
// };

// const anotherUser = { name: 'Bob' };

// console.log(user.greet.call(anotherUser));
// // Використай call, щоб вивести "Привіт, мене звати Bob!"

// // 2

// const cart = {
//   items: [],
//   addItem(item) {
//     this.items.push(item);
//     console.log(`Додано товар: ${item}. Поточний список:`, this.items);
//   },
// };

// const addToCart = cart.addItem.bind(cart);
// addToCart('Apple');
// addToCart('Banana');

// // 3

// const person = { name: 'John' };

// function introduce() {
//   console.log(`Hi, my name is ${this.name}`);
// }

// introduce.call(person);
// // Використай call для виклику introduce з person

// // 4

// function calculateArea() {
//   return this.width * this.height;
// }

// const rectangle = { width: 10, height: 5 };

// console.log(calculateArea.call(rectangle));
// // Використай call, щоб знайти площу

// // 5

// const timer = {
//   message: 'Час вийшов!',
//   start() {
//     setTimeout(
//       function () {
//         console.log(this.message);
//       }.bind(this),
//       2000,
//     );
//   },
// };

// timer.start();

// //   6

// const userList = {
//   users: ['Alice', 'Bob', 'Charlie'],
//   removeUser(name) {
//     this.users = this.users.filter(user => user !== name);
//     console.log(`Після видалення ${name}:`, this.users);
//   },
// };

// const anotherList = { users: ['Emma', 'Liam', 'Olivia'] };

// userList.removeUser.call(anotherList, 'Liam');

// // Використай call, щоб видалити 'Liam' з anotherList

// //   7

// function describeCar() {
//   console.log(`Це автомобіль ${this.brand} ${this.model}.`);
// }

// const car1 = { brand: 'Toyota', model: 'Corolla' };
// const car2 = { brand: 'BMW', model: 'X5' };

// describeCar.call(car1);
// describeCar.call(car2);

// // Використай call для car1 і car2

// //   8

// const button = {
//   message: 'Натиснуто кнопку!',
//   handleClick() {
//     console.log(this.message);
//   },
// };

// // Прив’яжи handleClick до button і збережи у змінну boundClick
// const boundClick = button.handleClick.bind(button);

// boundClick();

// // 9

// const wallet = {
//   balance: 500,
//   spend(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       console.log(`Витрачено ${amount}, залишок: ${this.balance}`);
//     } else {
//       console.log('Недостатньо коштів!');
//     }
//   },
// };

// const myWallet = { balance: 300 };

// // Використай call, щоб витратити 100 з myWallet

// wallet.spend.call(myWallet, 100);

// // 10

// const math = {
//     multiply(num, factor) {
//       return num * factor;
//     },
//   };

//   // Створи функцію double, яка множить число на 2, використовуючи bind
//   const double = math.multiply.bind(null, 2)

//   console.log(double(5)); // Очікувано: 10

// ------------------------------------------------

// 1

// const book = {
//   title: 'War and Peace',
//   author: 'Leo Tolstoy',
//   getInfo() {
//     return `Книга ${this.title} написана Автором ${this.author}`;
//   },
// };

// console.log(book.getInfo());

/*
Створи об'єкт player з властивістю score (початково 0)
 та методом increaseScore(), 
 який збільшує score на 10 і виводить новий бал.



Створи об'єкт clock з методом showTime(), 
який виводить поточний час у форматі Год:Хв.

Створи об'єкт bankAccount з властивістю balance та методом deposit(amount),
 який додає суму до балансу та виводить оновлений баланс.

Створи об'єкт movie з властивістю title та методом play(),
 який виводить: "Відтворення фільму: Назва".*/

// const player = {
//   score: 0,
//   increaseScore() {
//     this.score += 10;
//     console.log(`Твій новий бал: ${this.score}`);
//   },
// };
// player.increaseScore();

// //

// const clock = {
//   showTime() {
//     const date = new Date();
//     const hours = date.getHours().toString().padStart(2, '0');
//     const minutes = date.getMinutes().toString().padStart(2, '0');
//     console.log(`Current time is: ${hours}:${minutes}`);
//   },
// };
// clock.showTime();

// const bankAccount = {
//   balance: 0,
//   deposit(amount){
//     this.balance += amount;
//     console.log(`Your new balance is: ${this.balance}`);
//   }
// }

// bankAccount.deposit(1000);

// const users = ['Alice', 'Bob', 'Charlie', 'David'];

// function logUsers(usersArray) {
//   usersArray.forEach(user => console.log(user));
// }

// logUsers(users);

// // Використання map
// // 👉 Завдання: Є масив чисел. Використай map, щоб створити новий масив, де кожне число помножене на 2.

// const numbers = [1, 2, 3, 4, 5];
// function doubleNumbers(numbersArray) {
//   return numbersArray.map(number => number * 2);
// }

// console.log(doubleNumbers(numbers)); // Очікувано: [2, 4, 6, 8, 10]

// // 3. Використання filter
// // 👉 Завдання: Є масив чисел. Використай filter, щоб залишити тільки парні числа.

// const nmbers = [10, 15, 20, 25, 30, 35];

// function getEvenNumbers(numbersArray) {
//   return numbersArray.filter(number => number % 2 === 0);
// }

// console.log(getEvenNumbers(nmbers)); // Очікувано: [10, 20, 30]
// // 4. Використання reduce
// // 👉 Завдання: Є масив цін. Використай reduce,
// // щоб порахувати загальну суму всіх цін.

// const prices = [100, 200, 50, 150];

// function getTotalPrice(pricesArray) {
//   return pricesArray.reduce((acc, price) => (acc += price), 0);
// }

// console.log(getTotalPrice(prices)); // Очікувано: 500

// // 5. Використання find
// // 👉 Завдання: Є масив користувачів з віком. Використай find,
// //  щоб знайти першого користувача, якому більше 18 років.

// const usrs = [
//   { name: 'Alex', age: 16 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 17 },
//   { name: 'David', age: 25 },
// ];

// function findAdult(usersArray) {
//   return usersArray.find(user => user.age > 18);
// }

// console.log(findAdult(usrs)); // Очікувано: { name: 'Bob', age: 20 }

// // 1. Використання forEach
// // 👉 Завдання: Виведи у консоль імена всіх користувачів у форматі:
// // "Користувач: Ім'я"

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ];

// function logUserNames(usersArray) {
//   return usersArray.forEach(user => console.log(`Користувач: ${user.name}`));
// }

// logUserNames(users);

// // 2. Використання map
// // 👉 Завдання: Створи новий масив, де кожен користувач матиме додаткову
// //  властивість isAdult, яка true, якщо йому 18 або більше років,
// // і false, якщо менше.

// const usrs = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 30 },
// ];

// function markAdults(usersArray) {
//   return usersArray.map(user => ({
//     ...user,
//     isAdult: user.age >= 18,
//   }));
// }

// console.log(markAdults(usrs));
// // 3. Використання filter
// // 👉 Завдання: Знайди всіх користувачів,
// //  які мають більше 1000 грн на балансі.

// const usersWithBalance = [
//   { name: 'Alice', balance: 500 },
//   { name: 'Bob', balance: 1500 },
//   { name: 'Charlie', balance: 2000 },
// ];

// function getRichUsers(usersArray) {
//   return usersArray.filter(user => user.balance >= 1000);
// }

// console.log(getRichUsers(usersWithBalance));
// // 4. Використання reduce
// // 👉 Завдання: Підрахуй загальний баланс всіх користувачів.

// const usersTotalBalance = [
//   { name: 'Alice', balance: 500 },
//   { name: 'Bob', balance: 1500 },
//   { name: 'Charlie', balance: 2000 },
// ];

// /**
//  *
//  * @param {balance} usersArray
//  * @returns total balance of all users
//  */
// function getTotalBalance(usersArray) {
//   return usersArray.reduce((acc, usr) => (acc += usr.balance), 0);
// }

// console.log(getTotalBalance(usersTotalBalance)); // Очікувано: 4000

// // 5. Використання find
// // 👉 Завдання: Знайди користувача з іменем "Charlie".

// const findUserName = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ];

// function findCharlie(usersArray) {
//   return usersArray.find(user => user.name === 'Charlie');
// }

// console.log(findCharlie(findUserName));

// // 6. Використання some
// // 👉 Завдання: Перевір, чи є хоча б один користувач,
// // який має баланс більше 3000 грн.

// const usersBalance = [
//   { name: 'Alice', balance: 500 },
//   { name: 'Bob', balance: 1500 },
//   { name: 'Charlie', balance: 4000 },
// ];

// function hasRichUser(usersArray) {
//   return usersArray.some(rich => rich.balance >= 3000);
// }

// console.log(hasRichUser(usersBalance)); // Очікувано: true

// // 7. Використання every
// // 👉 Завдання: Перевір, чи всі користувачі старші за 18 років.

// const checkUsersAge = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 17 },
//   { name: 'Charlie', age: 30 },
// ];

// function areAllAdults(usersArray) {
//   return usersArray.every(userAge => userAge.age >= 18);
// }

// console.log(areAllAdults(checkUsersAge)); // Очікувано: false

// // 8. Використання sort
// // 👉 Завдання: Відсортуй користувачів за віком
// // (від наймолодшого до найстаршого).

// const usersSort = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ];

// function sortUsersByAge(usersArray) {
//   const copyArr = [...usersArray];

//   return copyArr.sort((a, b) => a.age - b.age);
// }

// console.log(sortUsersByAge(usersSort));

// // 9. Використання map
// // 👉 Завдання: Створи новий масив,
// // де кожен користувач має тільки ім'я і вік (без інших властивостей).

// const Changdusers = [
//   { name: 'Alice', age: 25, balance: 500 },
//   { name: 'Bob', age: 30, balance: 1500 },
//   { name: 'Charlie', age: 22, balance: 2000 },
// ];

// function extractNamesAndAges(usersArray) {
//   return usersArray.map(user => ({ name: user.name, age: user.age }));
// }

// console.log(extractNamesAndAges(Changdusers));

// // 10. Використання reduce
// // 👉 Завдання: Порахуй загальний вік всіх користувачів.

// const usersAge = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 22 },
// ];

// function getTotalAge(usersArray) {
//   let total = 0;
//   usersArray.map(user => (total += user.age));
//   return total
// }

// console.log(getTotalAge(users)); // Очікувано: 77

//
// =========================================================
//

/*
Напиши класс User для создания пользователя со следующим свойствами:

name - строка
age - число
followers - число
Добавь метод getInfo(), который, выводит строку: 
User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers
*/

// class User {
//   constructor({ name, age, followers }) {
//     (this.name = name), (this.age = age), (this.followers = followers);
//   }
//   getInfo() {
//     return console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
//     );
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// //

// /*
// Напиши класс Storage, который будет создавать объекты для управления складом товаров.
//  При вызове будет получать один аргумент - начальный массив товаров,
//   и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих
// */

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }

//   removeItem(item) {
//     const index = this.items.indexOf(item);
//     if (index !== -1) {
//       this.items.splice(item, 1);
//     }
//   }
// }

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// /*
//   Напиши класс StringBuilder. На вход он получает один параметр - строку,
//    которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
//   */

// class StringBuilder {
//   #value;
//   constructor(string) {
//     this.#value = string;
//   }

//   get value() {
//     return this.#value;
//   }

//   append(str) {
//     this.#value += str;
//   }

//   prepend(str) {
//     this.#value = str + this.#value;
//   }

//   pad(str) {
//     this.prepend(str);
//     this.append(str);
//   }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// //

// class Car {
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   static getSpecs(car) {
//     console.log(
//       `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`,
//     );
//   }

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor({ price, maxSpeed }) {
//     (this.speed = 0),
//       (this.price = price),
//       (this.maxSpeed = maxSpeed),
//       (this.isOn = false),
//       (this.distance = 0);
//   }

//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     this._price = newPrice;
//   }

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this.isOn = true;
//   }

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     if (this.speed + value <= this.maxSpeed) {
//       this.speed += value;
//     } else {
//       this.speed = this.maxSpeed;
//     }
//   }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     if (value > 0) {
//         this.speed -= value;
//     }
//   }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if (this.isOn) {
//         this.hours * this.speed
//     }
//   }
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

// ===============================================================================

// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }

//   getArea() {
//     return this.length * this.width;
//   }

//   getPerimeter() {
//     return 2 * (this.length + this.width);
//   }
// }

// const rect = new Rectangle(10, 5);
// console.log(rect.getArea()); // Очікувано: 50
// console.log(rect.getPerimeter()); // Очікувано: 30

// // ===================

// class BankAccount {
//   constructor(balance) {
//     this.balance = balance;
//   }

//   deposit(amount) {
//     return (this.balance += amount);
//   }

//   withdraw(amount) {
//     if (this.balance - amount >= 0) {
//       return (this.balance -= amount);
//     }
//   }

//   getBalance() {
//     return this.balance;
//   }
// }

// const account = new BankAccount(1000);
// account.deposit(500);
// account.withdraw(200);
// console.log(account.getBalance()); // Очікувано: 1300

// // =================================

// class Student {
//   constructor(name, grades) {
//     this.name = name;
//     this.grades = grades;
//   }

//   getAverageGrade() {
//     return (
//       this.grades.reduce((acc, grade) => acc + grade, 0) / this.grades.length
//     );
//   }
// }

// const student = new Student('Alice', [90, 80, 100, 70]);
// console.log(student.getAverageGrade()); // Очікувано: 85

// // =============================

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     return console.log(
//       `Привіт, мене звати ${this.name} і мені ${this.age} років.`,
//     );
//   }
// }

// const person = new Person('Bob', 25);
// const newPerson = new Person('Asd', 18);

// person.greet(); // Очікувано: "Привіт, мене звати Bob і мені 25 років."
// newPerson.greet();

// // ====================================

// class Car {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   getCarInfo() {
//     return `Це ${this.brand} ${this.model}, рік випуску: ${this.year}.`;
//   }
// }

// const car = new Car('Tesla', 'Model S', 2022);
// console.log(car.getCarInfo()); // Очікувано: "Це Tesla Model S, рік випуску: 2022."

// // ============================

// class User {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }

//   changePassword(newPassword) {
//     this.password = newPassword
//   }
// }

// const user = new User('Alice', 'alice@example.com', '123456');
// user.changePassword('newpassword');
// console.log(user); // Очікувано: { name: "Alice", email: "alice@example.com", password: "newpassword" }

// class Car {
//   constructor({ brand, model, price, year }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     this.year = year;
//   }

//   getInfo() {
//     return `This is ${this.brand} ${this.model} ${this.year} year, cost ${this.price}$`;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// const tesla = new Car({
//   brand: 'Tesla',
//   model: 'X',
//   price: 50000,
//   year: 2023,
// });

// const audi = new Car({
//   brand: 'Audi',
//   model: 'SQ8',
//   price: 100000,
//   year: 2023,
// });

// console.log(tesla.getInfo());
// console.log(audi.getInfo());

// tesla.changePrice(80000);
// console.log(tesla.getInfo());

// import users from '../db/users.js';
// console.log(users);

// const getUserNames = users => {
//   const names = [];
//   users.forEach(user => names.push(user.name));
//   return names;
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// // Задание 2
// // Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
// // Задание 3
// // Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => {
//   return users.filter(user => user.gender === gender);
// };

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// // Задание 4
// // Получить массив только неактивных пользователей (поле isActive).

// const getInactiveUsers = users => {
//   return users.filter(user => user.isActive);
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
// // Задание 5
// // Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
// // Задание 6
// // Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) => {
//   const filteredUsers = [];
//   users.forEach(user => {
//     if (user.age >= min && user.age <= max) {
//       filteredUsers.push(user);
//     }
//   });
//   return filteredUsers;
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
// // Задание 7
// // Получить общую сумму баланса (поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   return users.reduce((acc, user) => (acc += user.balance), 0);
// };

// console.log(calculateTotalBalance(users)); // 20916
// // Задание 8
// // Массив имен всех пользователей у которых есть друг с указанным именем.

// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter(user => user.friends.includes(friendName))
//     .map(user => user.name);
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
// // Задание 9
// // Массив имен (поле name) людей, отсортированных в зависимости
// //  от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = users => {
//   const copyUsers = [...users];
//   return copyUsers
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// // Задание 10
// // Получить массив всех умений всех пользователей (поле skills),
// //  при этом не должно быть повторяющихся умений и они должны быть
// //  отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//   // твой код
// };

// console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Завдання:
// Обробити подію submit

// Заборонити перезавантаження сторінки.
// Вивести в консоль значення всіх полів форми при сабміті.
// Обробити подію input

// Виводити в консоль поточне значення поля логіну при кожному введенні символу.
// Обробити подію change

// Виводити повідомлення про зміну вибраного міста в <select>.
// Обробити подію focus і blur

// Додати підсвічування (наприклад, зміну кольору рамки)
//  до полів логіну та пароля під час фокусу.
// Автоматично фокусуватися на полі логіну при завантаженні сторінки.

// Автоматично очищати поле пароля після втрати фокусу.

// Змінювати текст кнопки при увімкненні чекбоксу

// Якщо чекбокс підписки відмічений – змінити текст кнопки на "Підписатися".
// Якщо не відмічений – повернути "Відправити".
// Перевіряти довжину пароля перед відправкою форми

// Якщо менше 6 символів – показувати alert і не відправляти форму.
// Зберігати введене ім'я в localStorage

// При перезавантаженні сторінки, якщо в localStorage є ім'я, підставляти його в поле логіну.
// Додати кнопку "Очистити форму"

// При натисканні має скидати всі значення в формі до початкових.

// const form = document.querySelector('#test-form');
// const inputEl = document.querySelectorAll('input');
// const loginInput = document.querySelector('#login-input');
// const pwdInput = document.querySelector('#password-input');
// const citySelect = document.querySelector('#city-select');
// const subscribeCheckbox = document.querySelector('#subscribe-checkbox');
// const submitBtn = document.querySelector('.submit-btn');

// const city = form.elements.city.value;

// form.addEventListener('submit', onFormSubmit);
// loginInput.addEventListener('input', onInput);
// citySelect.addEventListener('blur', onCityChange);
// inputEl.forEach(element => {
//   element.addEventListener('focus', function () {
//     this.style.backgroundColor = 'teal';
//   });

//   element.addEventListener('blur', function () {
//     this.style.backgroundColor = '';
//   });
// });

// subscribeCheckbox.addEventListener('change', onCheckboxCnng)

// function onCheckboxCnng() {
//    if (subscribeCheckbox.checked) {
//     console.log('subscr checked');
//     submitBtn.textContent = 'Підписатися';
//   } else {
//     submitBtn.textContent = 'Відправити';
//   }
// }

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   const form = evt.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;
//   const city = citySelect.value;
//   const subscription = form.elements.subscribe.checked;

//   console.log(`${login} ${password} ${city} ${subscription}`);

//   if (password.length < 6) {
//     alert('pwd should be longer 6 symbols');
//     pwdInput.style.backgroundColor = 'red';
//   }
//   form.reset();
// }

// function onInput(e) {
//   console.log(e.currentTarget.value);
// }

// function onCityChange() {
//   console.log(`City changed to ${city}`);
// }

// =====================================

// Обробити подію submit, щоб дані не відправлялися на сервер,
//  а виводилися в консоль у вигляді об'єкта. ✅
// Заборонити відправку форми, якщо поле "Ім'я" порожнє
// (вивести alert із повідомленням).✅
// Перевірити вік перед відправкою: якщо він менший за 18,
//  вивести повідомлення "Вам має бути 18 років або більше".✅
// Показувати повідомлення при зміні країни ("Ви вибрали: Україна/Польща/США").✅
// Автоматично додавати "@gmail.com" до email,
//  якщо користувач ввів лише ім'я (наприклад, ivan → ivan@gmail.com).✅
// Реагувати на введення у поле ім'я: якщо довжина менша за 3 символи,
//  зробити бордер червоним.✅
// Дозволити кнопку "Надіслати" тільки при погодженні з умовами
//  (checkbox має бути позначений).✅
// Очистити всі поля після успішного сабміту. ✅
// При втраті фокусу в полі email перевіряти, чи є в ньому "@",
//  якщо немає – додавати червоне підсвічування. ✅
// Підставляти вікористане ім'я у вітання
// (наприклад, якщо введено "Олег", після натискання submit вивести:
//  "Дякуємо, Олег! Дані відправлено."). ✅

const refs = {
  form: document.querySelector('#user-form'),
  nameInput: document.querySelector('#name-input'),
  emailInput: document.querySelector('#email-input'),
  ageInput: document.querySelector('#age-input'),
  countrySelect: document.querySelector('#country-select'),
  conditions: document.querySelector('#terms-checkbox'),
  submitBtn: document.querySelector('button'),
  greetingMsg: document.querySelector('.greet-user'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.countrySelect.addEventListener('change', onCountryCng);
refs.emailInput.addEventListener('blur', onMailInput);
refs.nameInput.addEventListener('blur', onNameInput);
refs.conditions.addEventListener('change', onLicenseChange);

function onFormSubmit(evt) {
  evt.preventDefault();

  if (!refs.nameInput.value.trim()) {
    alert('required fields');
    return false;
  }

  const userage = Number(refs.ageInput.value);

  if (userage < 18) {
    console.log('Вам має бути 18 років або більше');
    return;
  }

  const formData = new FormData(refs.form);
  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data);

  refs.greetingMsg.textContent = `Дякуємо, ${refs.nameInput.value}! Дані відправлено.`;

  refs.form.reset();
  refs.nameInput.style.borderColor = '';
  refs.emailInput.style.borderColor = '';
}

function onCountryCng(e) {
  const countryValues = {
    ua: 'Україна',
    pl: 'Польща',
    us: 'США',
  };

  const selectedCountry = countryValues[e.currentTarget.value];
  console.log(`Ви вибрали: ${selectedCountry}`);
}

function onMailInput() {
  const emailInputValue = refs.emailInput.value.trim();

  if (!emailInputValue.includes('@')) {
    refs.emailInput.value = emailInputValue + '@gmail.com';
    refs.emailInput.style.borderColor = 'red';
  } else {
    refs.emailInput.style.borderColor = '';
  }
}

function onNameInput(e) {
  const nameLength = Number(e.currentTarget.value.length);

  refs.nameInput.style.borderColor = nameLength < 3 ? 'red' : '';
}

function onLicenseChange() {
  if (refs.conditions.checked) {
    refs.submitBtn.removeAttribute('disabled');
  } else {
    refs.submitBtn.setAttribute('disabled', 'disabled');
  }
}


const parent = document.querySelector("#parent");

parent.addEventListener("click", (event) => {
  console.log("event.target: ", event.target);
  console.log("event.currentTarget: ", event.currentTarget);
});