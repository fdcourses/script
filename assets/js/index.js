'use strict';
// functional expression
const anotherSum = function (a, b) {
  return a + b;
}

// function decrlaration
function sum(a, b) {
  return a + b;
}

function test() {
  return this;
}

const test2 = function () {
  return this;
}

const thisFunc = test();
