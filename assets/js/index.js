const userInput = +prompt("Меню:\n1-сок\n2-чай\n3-компот\n4-торт");

// alert("Петя сказал: \"Привет\"");

switch(userInput) {
  case 1: {
    alert("Вы выбрали сок");
    break;
  }
  case 2: {
    alert("Вы выбрали чай");
    break;
  }
  case 3: {
    alert("Вы выбрали компот");
    break;
  }
  case 4: {
    alert("Вы выбрали торт");
    break;
  }
  default: {
    alert('Нет такого пункта');
  }
}
