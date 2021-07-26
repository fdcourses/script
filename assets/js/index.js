/*
  cоздать функцию конструктор Phone 
   у телефона есть такие свойства:%
    модель
    производитель
    цена
    цвет
    comments (массив строк)
    в наличии (boolean)


    1. Создать массив с 50 телефонами (с разными данными)
*/

function Phone (model, manufacturer, price, color, inStock) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.price = price;
  this.color = color;
  this.comments = [];
  this.inStock = inStock;
}

// const newPhones = [
//   new Phone ('XZY PRO', "Epic 5G Touch", 99999999, 'black', false),
// ]

const newPhones = [];

for(let i = 0; i < 50; i++) {
  newPhones.push(new Phone (
    `Model ${i}`, 
    'Panasonic', 
    getRandomInt(5000, 50000),
    'black',
    Math.random() >= 0.5
  ))
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

console.table(newPhones);

// 