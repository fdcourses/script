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

const month = +prompt('Enter month');

// if (result === 1) {
//   // 1
// } else if (result === 2) {
//   // 2
// } else {
//   // все остальное
// }


// if(month > 2 && month < 6) {
//   alert('Spring');
// }


switch (month) {
  case 12:
  case 1:
  case 2: {
    // 2
    alert("Зима");
    break;
  }
  case 3:
  case 4:
  case 5: {
    alert('Spring');
    break;
  }
  case 6:
  case 7:
  case 8: {
    alert('Summer');
    break;
  }
  case 9:
  case 10:
  case 11: {
    alert('Autumn');
    break;
  }

  default: {
    // все остальное
    alert("Doesnt exist");
  }
}

const calculate = function (number1, number2, operator) {
  if (isNaN(number1 - number2)) {
    return null;
  }

  switch (operator) {
    case "+": {
      const result = number1 + number2;
      return result;
    }
    case "-": {
      const result = number1 - number2;
      return result;
    }
    case "*": {
      const result = number1 * number2;
      return result;
    }
    case "/": {
      const result = number1 / number2;
      return result;
    }
    default: {
      return null;
    }
  }
};
