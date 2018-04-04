/* 
  *** К этому pen подключена библиотека Lodash ***
  
  Используя свой шаблон из Задания 1, написать функцию
  renderRow которая принимает 3 аргумента: 
  - html шаблон: tpl
  - массив символов: row
  - ссылку на элемент в который будет рендериться результат,
    div c id=row-container: parent
  
  Используя функцию Lodash  _.template() и параментры функции
  renderRow, зарендерить результат обработки шаблона и данных
  в parent.
*/

const rows = {
  top: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
  middle: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
  bottom: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
};

function renderRow(tpl, row, parent) {
  // тут пишем логику работы функции
  const compiled = _.template(tpl);
  const result = compiled({data: row});
  parent.innerHTML = result;
}

// Если передать в renderRow rows.middle или rows.bottom,
// то в превью должна зарендерится строка кнопок с соответствующими
// символами
const tmpl = document.querySelector('#row-tpl').textContent.trim();
const container = document.querySelector('#row-container');

renderRow(tmpl, rows.top, container);