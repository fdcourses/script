'use strict';

class Human {
  constructor(name, lastName, age) {
    // свойства созадваемого экземпляра класса

    // проверьте что пользователь имеет 
    // не отрицательный возраст при созддании

    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if(isNaN(newAge) || typeof newAge !== 'number') {
      throw new TypeError('Age must be number');
    }

    if(newAge < 0) {
      throw new RangeError('Age must be positive nubmer');
    }

    this._age = newAge;
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

const coolerHuman1 = new Human('Coolkid', 'Coolkidovich', 20);
const coolerHuman2 = new Human('Coolkid', 'Coolkidovich', 50);

const human1 = new Human('Human', 'Feofanov', 40 );

const obj = {
  // get food() {
  //   return 'smacna xavka';
  // }

  set food (newFood) {
    this._food = newFood;
  },

  get unTastyFood() {
    return this._food;
  }
}

/*
  Создать класс машина
  У машины будут следующие свойства:
  вес корпуса,
  максимальная скорость,
  текущую скорость, 
  имя

  всем этим свойствам задать геттеры и сеттеры
  осуществить в сеттерах проверки входящих данных 
  скрость не может ыбть отрицательной
  вес тоже не отрицательный 
  имя не может быть пустым

*/


