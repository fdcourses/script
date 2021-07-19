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

function User(firstName, lastName, age, isMale, moneyInBank, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = firstName + ' ' + lastName;
  this.age = age;
  this.isMale = isMale;
  this.moneyInBank = moneyInBank;
  this.salary = salary;

  this.getSalary = function (monthNumber) {

    return this.moneyInBank += (this.salary * monthNumber);
  }
}

const user1 = new User('Karl', 'Marx', 238, true, 0, 100);
const user2 = new User('John', 'Rockfeller', 175, true, 10000000, 10000000);