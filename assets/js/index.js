'use strict';
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

class Car {
  constructor (weight, maxSpeed, currentSpeed, name) {
    this.weight = weight;
    this.maxSpeed = maxSpeed;
    this.currentSpeed = currentSpeed;
    this.name = name;
  }

  set weight(newWeight) {
    if(isNaN(newWeight) || typeof newWeight !== 'number') {
      throw new TypeError('Invalid type');
    }

    if(newWeight < 0) {
      throw new RangeError('Weight cant be negative');
    }

    this._weight = newWeight;
  }

  get weight() {
    return this._weight;
  }

  set maxSpeed(newSpeed) {
    if(isNaN(newSpeed) || typeof newSpeed !== 'number') {
      throw new TypeError('Invalid type');
    }

    if(newSpeed < 0) {
      throw new RangeError('Speed cant be negative');
    }

    this._maxSpeed = newSpeed;
  }

  get maxSpeed() {
    return this._maxSpeed;
  }

  set currentSpeed(newSpeed) {
    if(isNaN(newSpeed) || typeof newSpeed !== 'number') {
      throw new TypeError('Invalid type');
    }

    if(newSpeed < 0) {
      throw new RangeError('Speed cant be negative');
    }

    this._currentSpeed = newSpeed;
  }

  get currentSpeed() {
    return this._currentSpeed;
  }

  set name(newName) {
    if(typeof newName !== 'string') {
      throw new TypeError('Invalid type');
    }

    if(newName.trim() === '') {
      throw new Error('Name must not be empty');
    }

    this._name = newName.trim();
  }

  get name() {
    return this._name;
  }
}

const car = new Car(500, 500, 500, '   dsfds           ');