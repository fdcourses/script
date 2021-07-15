// const userName = prompt('Введите имя');

// if(userName) {
//   response = 'Привет ' + userName;
// } else{
//   response = 'Вы ничего не ввели';
// }

//const response =  userName ? 'Привет ' + userName :'Вы ничего не ввели';

// alert( userName ? 'Привет ' + userName :'Вы ничего не ввели');

const userInput = +prompt("Введите число");

if (userInput % 2 === 0) {
  alert("Четное");
} else {
  alert("Нечетное");
}

userInput % 2 === 0 ? alert("Четное") : alert("Нечетное");

alert(userInput % 2 === 0 ? "Четное" : "Нечетное");
