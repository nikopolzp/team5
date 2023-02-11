//======================================1 task======================================================//

//1. Використовуючи функцію if...else,
//напишіть код, який буде запитувати:
//"What is the official name of JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показувати через alert: "True!"
//у противному випадку показати:"Don't you know? ECMAScript!"
// const answer = prompt("What is the official name of JavaScript?");

// if (answer === "ECMAScript") {
//   alert("True!");
// } else {
//   alert("Don't you know? ECMAScript!");
// }

// answer === "ECMAScript" ? alert("True!") : alert("Don't you know? ECMAScript!");

//======================================2 task======================================================//

//2. Напишіть програму, яка запитає у користувача через prompt "Enter the number of minutes to format"
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"

// const time = prompt("Enter the number of minutes to format");

// const hours = String(Math.floor(time / 60)).padStart(2, "0");
// const min = String(time % 60).padStart(2, "0");

// console.log(`${hours}:${min}`);

//3. Напишіть цикл, який виведе в консоль усі парні числа від max до min включно по зменшенню
// const max = 20;
// const min = 1;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//======================================5 task======================================================//

//5. Напишіть код, який буде запитувати логін за допомогою prompt "Hello, please enter your login!"
// і виводити результат у консоль браузера
//Якщо під час вводу login нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "admin", то prompt запитує пароль (Please enter your password)
//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"

//Пароль перевіряти так:
//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"
//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"

// const login = prompt("Hello, please enter your login!");

// let message;

// switch (login) {
//   case null:
//     message = "Authorization has been cancelled";
//     break;

//   case "admin":
//         const pass = prompt("Please enter your password");
//         switch (pass) {
//             case null:
//                 message = "Authorization has been cancelled";
//                 break;

//             case "adminPassword":
//                 message = "Hello!";
//                 break;

//             default:
//                 message = "Goodbye!";
//             break;
//         }
//         break;

//     default:
//         message = "Goodbye!";
//     break;
// }

// console.log(message);

// 8. При завантаженні сторінки користувачу у prompt пропонується ввести число від 0 до 59 'Hello, enter please the number between  0 and 59'.
//Зроби перевірку на відповідність введеного числа вказаному діапазону (0-59). Якщо число не відповідає виведіть
//alert з повідомленням "The [number] is outside 0 and 59"
// Визначте в яку чверть години попаде
// це число(в першу, другу, третю чи четверту) та виведіть це повідомлення у консоль, наприклад, "Number [number] refers to 2 quarters".

// const number = prompt("Hello, enter please the number between  0 and 59");
// if (number < 0 || number > 59) {
//   alert(`The ${number} is outside 0 and 59`);
// } else if (number >= 0 && number <= 14) {
//   console.log(`The ${number} refers to 1 quarters`);
// } else if (number >= 15 && number <= 29) {
//   console.log(`The ${number} refers to 2 quarters`);
// } else if (number >= 30 && number <= 44) {
//   console.log(`The ${number} refers to 3 quarters`);
// } else if (number >= 45 && number <= 59) {
//   console.log(`The ${number} refers to 4 quarters`);
// }

// const getMessage = (number, quarter) => {
//   return `Number ${number} refers to ${quarter} quarters`;
// };

// const number = prompt("Hello, enter please the number between  0 and 59");
// if (Number(number) === 60) {
//   alert(`The ${number} is outside 0 and 59`);
// } else {
//   const quarter =
//     Number(number) === 0 ? Number(number) : Math.floor((number - 1) / 15);
//   switch (quarter) {
//     case 0:
//       alert(getMessage(number, 1));
//       break;
//     case 1:
//       alert(getMessage(number, 2));
//       break;
//     case 2:
//       alert(getMessage(number, 3));
//       break;
//     case 3:
//       alert(getMessage(number, 4));
//       break;
//     default:
//       alert(`The ${number} is outside 0 and 59`);
//       break;
//   }
// }

//9. Дано рядок, що складається із символів, наприклад, 'a1abcde'.
// Перевір, що першим символом цього рядка є літера 'a'.
// Якщо так - виведи 'yes' у консоль, в противному випадку виведи 'no'.

// const word = 'a1abcde';
// word[0] === "a" ? console.log("yes") : console.log("no");

// const word = "a1abcde";
// word.startsWith(`a1a`) ? console.log("yes") : console.log("no");

//1. Напишіть скрипт, який для об'єкта user, послідовно:
//1 додасть властивість mood зі значенням 'happy'
//2 замінить значення властивості hobby на 'skydiving'
//3 замінить значення властивості premium на false
//4 використовуючи Object.keys() и for...of, виведе у консоль зміст об'єкта users у форматі:
//name: John
//"age: 20"
//"hobby: skydiving"
//"premium: false"
//"mood: happy"

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (let key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

//2. Є об'єкт, в якому зберігаються зарплати команди. Напишіть функцію getTotalSalary, яка буде повертати загальну суму зарплат. Якщо об'єкт пустий, то функція має повернути 0

// const salaries = {
//   mango: 100,
//   poly: 160,
//   ajax: 1470,
// };

// function getTotalSalary(salaries) {
//   let summ = 0;
//   for (const salarie of Object.values(salaries)) {
//     summ += salarie;
//   }
//   return summ;
// }
// console.log(getTotalSalary(salaries));

//3. Напишіть фукцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і рядок з назвою каменю.
//Функція обчислює і повертає загальну вартість каменів з таким іменем

// const stones = [
//   { name: 'emerald', price: 1300, quantity: 4 },
//   { name: 'diamond', price: 2700, quantity: 6 },
//   { name: 'sapphire', price: 400, quantity: 7 },
//   { name: 'rubble', price: 150, quantity: 100 },
// ]

// const calcTotalPrice = function(stones, stonesName) {
//   let totalPrice = 0;
//   for (let stone of stones) {
//     if (stone.name === stonesName) {
//       totalPrice = stone.price * stone.quantity;
//     }
//   }
//   return totalPrice;
// }

// console.log(calcTotalPrice(stones, 'rubble'));

//4. Створіть об'єкт calculator з трьома методами
//read(a, b) - приймає два аргумента та зберігає їх як властивості об'єкта під ключами prop1 та prop2
//sum() перевіряє чи присутні  властивості prop1/prop2 та повертає їх суму, в противному випадку повертає null
//mult() перевіряє чи присутні  властивості prop1/prop2 та повертає їх добуток, в противному випадку повертає null
// Не забудьте, що математичні оператори працюють коректно тільки з числовими значеннями

// const calculator = {
//     read(a, b) {
//         this.prop1 = a;
//         this.prop2 = b;
//   },
//     sum() {return !isNaN(Number(this.prop1)) && !isNaN(Number(this.prop2))
//       ? this.prop1 + this.prop2
//       : null;},
//   mult() {return !isNaN(this.prop1) && !isNaN(this.prop2)
//       ? this.prop1 * this.prop2
//       : null;},
// };

// calculator.read(2, '5asd')
// console.log(calculator.mult())

// 5. Напишіть функцію updateObject, яка приймає об'єкт та ключ
//і повертає новий об'єкт без вказаної властивості
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b') => {a: 1, c: 3}
//
// function updateObject(obj, removedKey) {

//     // const nevObj = { ...obj };
//     // delete nevObj[key];

//     const newObj = { };
//     for (const key in obj) {
//         if (key !== removedKey) {
//           console.log(key)
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }
// console.log(updateObject({ a: 1, b: 2, c: 3 }, 'b'))

//6. Напишіть функцію updateObject, яка приймає об'єкт та перелік ключів
//і повертає новий об'єкт без вказаних властивостей
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b', 'c') => {a: 1}

// function updateObject(obj, ...removedKeys) {

//     const newObj = { };
//     for (const key in obj) {

//         if (!removedKeys.includes(key)) {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }
// console.log(updateObject({ a: 1, b: 2, c: 3 }, "b", "c"));

// 3. Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), яка памятає ім'я шефа під час її виклику
//Функція makeDish має логіровать "<shef> is cooking <dish>"

// function makeShef(shefName) {
//     function makeDish(dish) {
//      console.log(`${shefName} is cooking ${dish}`)
//  }
//     return makeDish
// }

// makeShef('Poly')('fish')
// const poly = makeShef('Poly')

// poly('pizza')
// poly('pasta')

// 02.
// 2. Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентіфікатор у властивість id та викликає callback
//передаючи йому створений об'єкт.
//showProduct(product) - коллбек, що приймає об'єкт
//продукта і логірує його в консоль

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: Math.random(),
//   };
//   callback(product);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct("Vasya", 100, showProduct);

// // 4. Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();




// 5. Виправте код, щоб він працював
// function callAction(action) {
//     action()
// }

// const item = {
//     getQuantity() {
//         console.log(this.quantity);
//     },
//     quantity: 5,
// }

// callAction(item.getQuantity.bind(item));