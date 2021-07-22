
const arr = [-100,5,30,45,60,1];

// ================================================

function getMin (arrayOfNumbers) {
  let minNumber = arrayOfNumbers[0];

  for(let i = 0; i < arrayOfNumbers.length ;i++){
    if(arrayOfNumbers[i] < minNumber) {
      minNumber = arrayOfNumbers[i];
    }
  }

  return minNumber;
}


function getMax (arrayOfNumbers) {
  let maxNumber = arrayOfNumbers[0];

  for(let i = 0; i < arrayOfNumbers.length ;i++){
    if(arrayOfNumbers[i] > maxNumber) {
      maxNumber = arrayOfNumbers[i];
    }
  }

  return maxNumber;
}

function getRandomNumber( ) {
  return Math.round(Math.random() *100);
}

const arr2 = [];

for(let i = 0; i < 10; i++) {
  arr2[i] = getRandomNumber();
}
