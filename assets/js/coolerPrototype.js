'use strict';

class CoolerHuman {
  constructor(name, lastName, age) {
    // свойства созадваемого экземпляра класса

    if(isNaN(age) || typeof age !== 'number') {
      throw new TypeError('Age must be number');
    }

    // проверьте что пользователь имеет 
    // не отрицательный возраст при созддании
    if(age < 0) {
      throw new RangeError('Age must be positive nubmer');
    }

    

    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  // методы у экземпляров класса
  walk () {
    console.log('I am walking right now but cooler');
  }

  // создать метод isAdult, который будет возвращать, 
  // является ли конкретный пользователь совершеннолетним или нет

  isAdult () {
    return this.age >= 18;
  }
}

const coolerHuman1 = new CoolerHuman('Coolkid', 'Coolkidovich', 20);
const coolerHuman2 = new CoolerHuman('Coolkid', 'Coolkidovich', 50);