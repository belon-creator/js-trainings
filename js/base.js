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
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
  color: 'red',
  mileage: 50000,
  owner: {
    name: 'Alex',
    age: 35,
    city: 'Kyiv',
  },
};

car.color = 'black';
car.mileage += 10000;
car.isInsured = true;
car.owner.city = 'Lviv';

console.log(car);

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key} : ${user[key]}`);
}

const countProps = function (obj) {
  const countOfKeys = Object.keys(obj).length;
  return countOfKeys;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

const findBestEmployee = function (employees) {
  let bestEmployee = '';
  let bestEmployeeScore = 0;

  for (const employee in employees) {
    if (employees[employee] > bestEmployeeScore) {
      bestEmployeeScore = employees[employee];
      bestEmployee = employee;
    }
  }
  return bestEmployee;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux

const countTotalSalary = function (employees) {
  const salaries = Object.values(employees);
  let totalSalary = 0;

  for (const salary of salaries) {
    totalSalary += salary;
  }
  return totalSalary;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const values = [];

  for (const element of arr) {
    if (element[prop] !== undefined) {
      values.push(element[prop]);
    }
  }
  return values;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
