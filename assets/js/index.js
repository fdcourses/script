const userInput = +prompt("Меню:\n1-сок\n2-чай\n3-компот\n4-торт");

// alert("Петя сказал: \"Привет\"");

if (userInput === 1) {
  alert("Вы выбрали сок");
} else if (userInput === 2) {
  alert("Вы выбрали чай");
} else if (userInput === 3) {
  alert("Вы выбрали компот");
} else if (userInput === 4) {
  alert("Вы выбрали торт");
} else {
  alert("No");
}
