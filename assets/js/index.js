const number1 = +prompt('Enter first number');
const number2 = +prompt('Enter second number');



if(isNaN(number1 - number2)) {
  alert('Incorrect data');
}
else {
  const result = number1 + number2;
  
  alert(result);
}
