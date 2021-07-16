
const getFactorial = function (number) {
  if(isNaN(number)) {
    return null; // одна ошибка
  }

  if(number < 0) {
    return null; // другая ошибка
  }

  let result = 1;
  
  if(number === 0) {
    return result;
  }
  

  for(let i = 1; i <= number; i++) {
    result = result * i;
  }

  return result;

}