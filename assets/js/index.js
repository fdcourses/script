
const arr = [];

// вставляет значения в массив на последнее не знаятое место
arr.push(1);
arr.push(3);
arr.push(2);
arr.push(true);
arr.push(false);

arr.push('string 6', 'string 5', 'string 4');

// удаляет последнее значение массива и сохраняет его
const firstDeleted = arr.pop();

const secondDeleted = arr.pop();

// ================================================

const test1 = {};
const test2 = {};

function Student (firstName, lastName, age, isMale) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;

  this.study = study;
}

function study () {
  return `Student ${this.firstName} ${this.lastName} is studying`;
}

const student1 = new Student('Test', 'Testovich', 22, true);
const student2 = new Student('Test1', 'Testovich1', 221, true);

function Animal () {

  this.exist = function() {
    return true;
  } 
}

const monkeyPrototype =  new Animal();



function Monkey (name, appendages) {
  this.name = name;
  this.appendages = appendages;
}

Monkey.prototype = monkeyPrototype;


const pete = new Monkey ('Pete', 5);

const tom = new Monkey ('Tom', 5);

const jerry = new Monkey ('jerry', 5);


const testasdsadas = new Monkey ('testasdsadas', 5);


const sadsa = new Monkey ('asdsad', 5);


// pete.__proto__ = monkeyPrototype;
// tom.__proto__ = monkeyPrototype;
