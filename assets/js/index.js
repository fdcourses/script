'use strict';
function Human (name, lastName) {
  this.name = name;
  this.lastName = lastName;

} 
function HumanProto () {
  this.walk = function () {
    console.log('I am walking right now');
  }
}

Human.prototype = new HumanProto();

const h1 = new Human('Test', 'Testovich');