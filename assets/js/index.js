"use strict";

// functional expression
const anotherSum = function (a, b) {
  return this;
};

// function decrlaration
function sum(a, b) {
  return this;
}

const arrowSum = (a, b) => {
  return this;
};

const newspaper = {
  title: "NY Post - Murzilka",

  articles: ["Main news", "Article not main", "test1234", "give more money"],

  showArticles() {
    const that = this;
    this.articles.forEach((article, index, array) => {
      console.log(
        `Newspaper ${this.title} | Article №${index + 1} : ${article}`
      );
    });
  },
};
// сделатйе следующий вывод для метода showArticles
// NewsPaper <title> Article №<i>: <article>
