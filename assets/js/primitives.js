"use strict";

const result = Number.isInteger(12.5);

const str = "    secret     test    very     secret";
const str2 = "Nikolay Petrovich Ovechkin";
const strObj = new String(str);

const firstLetter = str.charAt(0);
const firstLetterUnicodeCode = str.charCodeAt(0);
const hasLetter = str.includes("t");

const trimmed = str.trim();

const newStr = str.replace("secret", "!@*^!#*!&%");

const strArr = str2.split(" ");
const str2Twin = strArr.join(", ");

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

function betterTrim (str) {
  let result = '';
  // debugger;

  // for(let i = 0; i <str.length -1; i++ ) {
  //   if((str[i] === ' ' && str[i+1] !== ' ') || (str[i] !== ' ' && str[i+1] !== ' ') || (str[i] !== ' ' && str[i+1] === ' ')) {
  //     result += str[i+1];
  //   }
  // }

  for(let i = 0; i< str.length; i++) {
    if(str[i] === " " && str[i+1] === ' ') {
      continue;
    }

    result += str[i];
  }

  return result.trim();
}

console.log(trimmed);

/*
number
boolean
undefined
null
String
bigint

symbol


-------
object
*/

const sym1 = Symbol(); 
const sym2 = Symbol();

const userFrontId = Symbol('user id for front');

const user = {
  id: 0,
  name: 'Feofan',
  lastName: '123',
  [userFrontId]: 500
}

const numberArray = [1,23,4,5,78];

// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

const arrayIterator = numberArray[Symbol.iterator]();

// const t1 = betterTrim();

// for .. of
// for(let number of numberArray) {
//  console.log(number);
// }
