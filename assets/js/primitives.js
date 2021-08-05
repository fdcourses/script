'use strict';

const str = '       secret        test    very    secret        ';
const strObj = new String(str);


const firstLetter = str.charAt(0);
const firstLetterUnicodeCode = str.charCodeAt(0);
const hasLetter = str.includes('t');

const trimmed = str.trim();

const newStr = str.replace('secret', 'null');


function makeStringCaps (str) {
  let result = '';

  for(let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase();
  }

  return result;
}

// создайте функцию toRandomCase

function toRandomCase (str) {
  let result = '';

  for(let i = 0; i < str.length; i++) {

    if(Math.random() > 0.5) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }

  }

  return result;
}

// test string > TesT stRInG

console.log(trimmed);