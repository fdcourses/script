"use strict";

const str = "secret test very secret";
const str2 = "Nikolay Petrovich Ovechkin";
const strObj = new String(str);

const firstLetter = str.charAt(0);
const firstLetterUnicodeCode = str.charCodeAt(0);
const hasLetter = str.includes("t");

const trimmed = str.trim();

const newStr = str.replace("secret", "null");

const strArr = str2.split("");
const str2Twin = strArr.join("");

// Hello There My Dear Friends I Wand To Speak With You

function toJadenCase(str) {
  // const words = str.split(' ');
  // const wordsWithUpper = words.map((word) => {
  //   const firstLetter = word[0].toUpperCase();
  //   return firstLetter + word.slice(1);
  // });
  // const result = wordsWithUpper.join(' ');
  // return result;

  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");


}

console.log(trimmed);
