"use strict";

// деструктуризация - особый способ создания переменных

const color = "red";

const monitor = {
  matrix: "Ips",
  sizes: {
    width: {
      value: 50,
      unit: "cm",
    },
    heigth: {
      value: 20,
      unit: "cm",
    },
  },
  resolution: {
    horizontal: {
      value: 1920,
      unit: "px",
    },
    vertical: {
      value: 1080,
      unit: "px",
    },
  },
  color: "black",
  manufacturer: "Samsung",
  refreshRate: 60,
};

const {
  color: monitorColor,
  manufacturer,
  sizes: {
    width: { value: monitorWidth },
  },
  ...restOfMonitor
} = monitor;

console.log(monitorWidth);

const arr = [-999, 2, 58, 9];

const [first, ...restOfArray] = arr;

function calculateDiagonalOfMonitor({sizes: {width:{value:mW},heigth: {value:mH}}}) 
{
  return Math.sqrt(mW ** 2 + mH ** 2);
}


const user1 = {
  name: 'Test',
  lastName: 'Testovich'
}

function sayHi (user = {name:'Undefined', lastName:'Nullovich'}) {

  const {name, lastName} = user;
  return `Hello ${name} ${lastName}`
}