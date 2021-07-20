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

const boss = {
  firstName: 'Petr',
  lastName: 'Pertovich',
  age: 37,
  isMale: true,
  0 : 'secret',
  'full name': 'Pert Petrovich',
}

const test = 0;
const newProperty = 'abracadabra 123456789';


// console.log(boss[test]);


function createMultiplicationTable() {
  const resultingTable = {};
  
  for(let i = 1; i < 10; i++) {
    for(let j = 1; j < 10; j++) {
      resultingTable[`${i} * ${j} = `] = j * i;
    }
  }

  return resultingTable;
}

createMultiplicationTable();