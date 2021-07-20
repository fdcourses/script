
const arr = [];

// вставляет значения в массив на последнее не знаятое место
arr.push(1);
arr.push(3);
arr.push(2);
arr.push(true);
arr.push(false);

arr.push('string 6', 'string 5', 'string 4');

// удаляет последнее значение массива и сохраняет его
const firstDeleted = arr.pop();

const secondDeleted = arr.pop();

// ================================================



console.log(arr);