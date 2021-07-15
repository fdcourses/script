
/*
  спросите у пользователя пароль 
  пока он не введет правильный

  БОНУС ограничте количество попыток до 5
*/




let tries = 0;

while (true) {
  const userInput = prompt('Vvedite parol');

  tries++;

  if(userInput === CORRECT_PASSWORD) {
    alert('Vi voshli');
    break;
  }

  if(tries >= MAX_TRIES) {
    alert('Vi ne admin');
    break;
  }
}
