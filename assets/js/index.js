'use strict';
// functional expression
const anotherSum = function (a, b) {
  return a + b;
}

// function decrlaration
function sum(a, b) {
  return a + b;
}

function multiply (a,b) {
  return a * b;
}

function square (number) {
  const result = multiply(number, number);

  return result;
}

function highOrderFunction ( callbackFunction, num1, num2 ) {
  return callbackFunction(num1, num2);
}

const hofSum = highOrderFunction(function (elem, elem2) {  
  return elem + elem2;
}, 5, 5);

function hof () {

  return function() {
    return true;
  }
}

const test = hof();