/*
1. Создать функцию - конструктор обьектов пользователей 
   со следующими свойствами:
    firstName
    lastName
    fullName
    age
    isMale

  + 1) у пользователья есть свойство отвечающее за его деньги 
        в банке
     2) свойство от вечающее за его зарплату
     3) ему можно было начисял ть зарплату 
*/

const user1 = {
  firstName: 'Test',
  lastName: 'Testovich',
  age: 18,
  isMale: true
}

const user2 = {
  firstName: 'Null',
  lastName: 'Nullovna',
  age: 18,
  isMale: false
}

const user3 = {
  firstName: 'Undefined',
  lastName: 'Undefinov',
  age: 18,
  isMale: true
}

// Создайте функцию которая будет здороватся с пользователем

function sayHello(user) {
  return `Hello ${user.firstName} ${user.lastName} !`;
}

// const gretings1 = ;
sayHello(user1);
