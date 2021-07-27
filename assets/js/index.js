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



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function getPhones(amount) {
  const newPhones = [];

  for(let i = 0; i < amount; i++) {
    newPhones.push(new Phone (
      `Model ${i}`, 
      'Panasonic', 
      getRandomInt(5000, 50000),
      'black',
      Math.random() >= 0.5
    ))
  }

  return newPhones;
}

const phones = getPhones(50);

console.table(phones);

/*
  1. Посчитать количество моделей телефонов в 
      наличии и вывести в консоль 

  1.1* Вывести в консоль для каждого элемента массива 
  строку следующего вида:
  '<Производитель> <Модель> со стоимостью <цена> сейчас <в наличии / нет в наличии>'

  2. Получить массив тех телефонов, которые есть в наличии

  3. Получить массив телефонов для праздничной распродажи (черная пятница и т.д) 
      Всем телефонам которые стоят больше 30000 снизить цену на 30%. 
      
  
// advanced

1. Отсортировать массив телефонов по цене (от дорогих к дешевым)

2. Создать массивы с строками - именами производителей и массив с возможными цветами телефонов. Переделать логику генерируемых телефонов чтобы они получали случайного производителя и цвет из списков

*/