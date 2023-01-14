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

const getMessage = (number, quarter) => {
  return `Number ${number} refers to ${quarter} quarters`;
};

const number = prompt("Hello, enter please the number between  0 and 59");
if (Number(number) === 60) {
  alert(`The ${number} is outside 0 and 59`);
} else {
  const quarter =
    Number(number) === 0 ? Number(number) : Math.floor((number - 1) / 15);
  switch (quarter) {
    case 0:
      alert(getMessage(number, 1));
      break;
    case 1:
      alert(getMessage(number, 2));
      break;
    case 2:
      alert(getMessage(number, 3));
      break;
    case 3:
      alert(getMessage(number, 4));
      break;
    default:
      alert(`The ${number} is outside 0 and 59`);
      break;
  }
}
