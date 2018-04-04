/*
 Напишите скрипт который реализует следующее поведение:
 
 - При клике по любой кнопке на клавиатуре, этому элемету
  должен присваиваться класс keyboard__btn--active. 
 
 - При клике по другой кнопке класс должен удалиться с
 предыдущей кнопки, и присвоиться новой кнопке.
 
 - Элементам с классом x-position и y-position должно присваиваться 
 значение event.clientX и event.clientY
 
PS: При клике вне кнопок класс keyboard__btn--active удаляется с 
  предыдущей кнопки. Никаких других событий происходить не должно:
  класс не приваивается, координаты не записываются.
  Рекомендуется использовать classList.contains.

PSS: Используйте делегирование, установив addEventListener 
  классу keyboard.
*/

const keyboard = document.querySelector('.keyboard');
const x = document.querySelector('.x-position');
const y = document.querySelector('.y-position');
const activeBtn = {
  node: null
};

function removeButtonHighLight() {
	if (activeBtn.node !== null && 
		activeBtn.node.classList.contains('keyboard__btn--active')) {
			activeBtn.node.classList.remove('keyboard__btn--active');
	}
}

function onClickButton(event) {
	let target = event.target;

	if (target.tagName === 'BUTTON') {
		removeButtonHighLight();
		target.classList.add('keyboard__btn--active');
		x.textContent = event.clientX;
		y.textContent = event.clientY;
		activeBtn.node = target;
	}
}

function onClickVoid(event) {
	if(event.target.tagName !== 'BUTTON') {
		removeButtonHighLight();
	}
}

keyboard.addEventListener('click', onClickButton);
document.addEventListener('click', onClickVoid);


