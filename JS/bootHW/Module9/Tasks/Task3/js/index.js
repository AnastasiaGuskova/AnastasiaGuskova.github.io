/* 
  *** К этому pen подключена библиотека Lodash ***
  
  Продолжаем тему клавиатуры. В этом задании необходимо
  создать шаблон целой клавиатуры по переданым строкам 
  и отрендерить результат.
  
  Дан объект rows который содержит 3 поля, каждое из которых
  содержит массив символов. Каждое из полей представляет
  собой строку клавиатуры.
  Для перебора полей объекта используйте Object.keys(obj).
  
  Напишите функцию renderKeyboard которая принимает 3
  аргумента:
  - шаблон: tpl
  - данные строк, обьект с полями: rows
  - ссылку на элемент-родитель в который будем рендерить результат: parent
*/

const letters = {
  top: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
  middle: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
  bottom: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
};

const html = document.querySelector("#keyboard-tpl").textContent.trim();
const parent = document.querySelector("#keyboard-container");

renderKeyboard(html, letters, parent);

function renderKeyboard(tpl, rows, parent) {
  const compiled = _.template(tpl);
  const result = compiled(rows);
  parent.innerHTML = result;
}