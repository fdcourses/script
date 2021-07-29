"use strict";

const newspaper = {
  title: "NY Post - Murzilka",

  articles: ["Main news", "Article not main", "test1234", "give more money"],

  showArticles() {
    const that = this;

    const arrow3 = () => {
      console.log(this);
    };

    this.articles.forEach();

    for (let i = 0; i < this.articles.length; i++) {
      const arrow = (article, index, array) => {
        console.log(
          `Newspaper ${this.title} | Article №${index + 1} : ${article}`
        );
      };
    }
  },
};
// сделатйе следующий вывод для метода showArticles
// NewsPaper <title> Article №<i>: <article>

const arr = [1, 2, 3, 4];

const evenArr = arr.filter((number) => number % 2 === 0);

function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

// rest operator - собирает любое количество в 1 массив
const arrowSum = (...rest) => rest.reduce((accumulator, currentValue) => accumulator + currentValue);

const test1 = arrowSum(1, 2, 3, 4, 5);

const numbers = [1,2,4,5,6,8,10];
const numbers2 = [1,25,8,66,6,3];

// spread - разворпвчивает из массива 
const allNumbers = [...numbers, ...numbers2];
const allNumbersExtended = [1,2,4,5,6,8,10, 1,25,8,66,6,3];