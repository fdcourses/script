// Create
const cat1 = {
  name: "Оболтус",
  breed: "Сиамский",
  age: 5,
  color: "серый",
  isMale: true,
  sleep: function () {
    return "ZZZ...";
  },
};

const cat2 = {
  name: "Арнольд",
  breed: "Шотландский вислоухий",
  age: 2,
  color: "серый",
  isMale: false,
  sleep: function () {
    return "ZZZ...";
  },
};

const cat3 = {
  name: "Васька",
  breed: "Дворовой",
  age: 5,
  color: "серый",
  isMale: true,
  sleep: function () {
    return "ZZZ...";
  },
};

// function declaration
function func1() {}

// Функция конструктор котов
function Cat(name, breed, age, color, isMale) {
  this.nickname = name;
  this.breed = breed;
  this.age = age;
  this.furColor = color;
  this.isMale = isMale;

  this.sleep = function () {
    return "ZZZ...";
  };
  // добавить бег
}

const constractedCat = new Cat("Петька", "Дворовой", 3, "черный", true);
const constrCat2 = new Cat('Соня','мейн-кун', 2, 'рыжий', false);