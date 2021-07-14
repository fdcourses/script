// const userInput = prompt("Меню:\n1-сок\n2-чай\n3-компот\n4-торт");
// const number1;
// const number2;
// alert("Петя сказал: \"Привет\"");


// switch(userInput) {
//   case 1: {
//     alert("Вы выбрали сок");
//     break;
//   }
//   case 2: {
//     alert("Вы выбрали чай");
//     break;
//   }
//   case 3: {
//     alert("Вы выбрали компот");
//     break;
//   }
//   case 4: {
//     alert("Вы выбрали торт");
//     break;
//   }
//   default: {
//     alert('Нет такого пункта');
//   }
// }

// calculate(2,5,'/');

/*
  На свтчах сделать калькулятор. 
  2 числа и оператор вводит пользователь
*/

// const number1 = +prompt('number 1');
// const number2 = +prompt('number 2');
// const operator = prompt('Enter operator');



const calculate = function (number1, number2, operator) {

  if(isNaN(number1 - number2)) {
    return null;
  }

  switch(operator) {
    case '+': {
      const result = number1 + number2;
      return result;
    }
    case '-': {
      const result = number1 - number2;
      return result;
    }
    case '*': {
      const result = number1 * number2;
      return result;
    }
    case '/': {
      const result = number1 / number2;
      return result;
    }
    default: {
      return null;
    }
  }
}
