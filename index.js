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
