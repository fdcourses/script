let counter = 1001;

while(true) {
  counter--;

  if (counter % 2 === 1) {
    continue; // переходит на новую итерацию
  }
  
  console.log(counter);

  if(counter < 1) {
    break;
  }
}

