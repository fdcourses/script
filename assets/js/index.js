// function expression
// const getSumOfTwoNumbers = function (value1, value2) {
//   // debugger;

//   if (isNaN(value1 - value2)) {
//      return null;
//   } else {
//     const result = value1 + value2;

//     return result;
//   }
// };

// const result = getSumOfTwoNumbers("test", 15);

const getSum = function (a, b) {
  const result = a + b;

  return result;
};

// console.log(result);

// Найти минимальное число из 2
const getMinNumber = function (num1, num2) {
  if (isNaN(num1 - num2)) {
    return null;
  }

  if (num1 > num2) {
    return num2;
  }
  return num1;
};

// Найти максимальное число из 2
const getMaxNumber = function (num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return null;
  }

  if (num1 > num2) {
    return num1;
  }
  return num2;
};

// Проверить, является ли число четным
const isEven = function (number) {
  if (isNaN(number)) {
    return null;
  }

  // if(number % 2 === 0) {
  //   return true;
  // }
  // return false;

  return number % 2 === 0;
};

// + С помощью функции решите квадратное уравнение

const solveSquareExpression = function (a, b, c) {
  if (isNaN(a - b - c)) {
    return null;
  }

  const d = b * b - 4 * a * c;

  if (d < 0) {
    return NaN;
  }

  const dSquareRoot = d ** (1 / 2);

  const x1 = (-b + dSquareRoot) / (2 * a);
  const x2 = (-b - dSquareRoot) / (2 * a);
  return [x1, x2]; // число
};
