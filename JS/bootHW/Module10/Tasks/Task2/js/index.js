/* 
  Напишите скрипт, реализующий функционал таймера
  который считает время от заданого значения до нуля.
  По достижении 00:00:000 выводит alert('n минут прошло').
  
  Создайте функцию countDownFrom, которая бы по клику на кнопку
  startBtn вела обратный отсчет от n минут. n - аргумент
  функции, кол-во минут от 1 до 99.
  
  Создайте функцию alertUser, которая, по истечению
  времени будет просто выводить alert с сообщение 'n минут прошло'.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе.
*/

const clockface = document.querySelector(".clock__time");
const startBtn = document.querySelector("#start");
const controls = document.querySelector(".lang-ctrls__body");
const buttons = controls.querySelector(".lang-ctrls__btn");
const timer = {
  id: "",
  startTime: "",
  currentTime: "",
  leftTime: ""
};

controls.addEventListener("click", setActiveBtn);
startBtn.addEventListener("click", countDownFrom.bind(null, 1));

function countDownFrom(minutes) {
  let millisec = minutes * 60 * 1000;
  updateClockface(millisec);
  startTime = Date.now();
  timer.id = setInterval(updateClockface, 4, millisec + startTime);
}

function alertUser(min) {
  alert(min + ' минут прошло');
}

/*
* Вспомогательные функции
* setActiveBtn - Подсветка активной кнопки
* getFormattedTime - возвращает форматированое время
* updateClockface - обновляет поле счетчика новым значением при вызове
*/

function updateClockface(time) {
  currentTime = Date.now();
  leftTime = time - currentTime;
  clockface.textContent = getFormattedTime(leftTime);
  if (leftTime < 5 && leftTime > -5) {
    clearInterval(timer.id);
    alertUser(Math.round((currentTime - startTime)/60/1000));
  }
}

function getFormattedTime(time) {
  const date = new Date(time);
  const mt =
    date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  const sc =
    date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  const ms =
    date.getMilliseconds() < 10
      ? "00" + date.getMilliseconds()
      : date.getMilliseconds() < 100
        ? "0" + date.getMilliseconds()
        : date.getMilliseconds();

  return `${mt}:${sc}:${ms}`;
}

function setActiveBtn(e) {
  Array.from(buttons, elem => elem.classList.remove("lang-ctrls__btn--active"));
  let elem = e.target;

  if (e.target.classList.contains("material-icons")) {
    elem = elem.parentNode;
  }
  if (!elem.classList.contains("lang-ctrls__btn")) {
    return false;
  }

  elem.classList.add("lang-ctrls__btn--active");
}