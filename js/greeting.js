var time = document.getElementById("header__user-hello");
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >= 0 && hourNow < 6) {
  greeting = "Приветствуем";
} else if (hourNow >= 6 && hourNow <= 10) {
  greeting = "Доброе утро";
} else if (hourNow >= 11 && hourNow < 18) {
  greeting = "Добрый день";
} else if (hourNow >= 18 && hourNow <= 23) {
  greeting = "Добрый вечер";
} else {
  greeting = "Приветствуем";
}

time.textContent = greeting;
