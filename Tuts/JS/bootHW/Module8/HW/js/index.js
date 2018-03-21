/*
 Напишите скрипт который реализует следующее поведение:
 
 - При нажатии на клавишу (не виртуальной клавиатуры) должно 
  обрабатываться событие keydown.
  (Для обработки нажатия нажатия клавиш, повесьте слушателя на window.
  window.addEventListener("keydown", callback);)
 
 - Должны обрабатываться только те клавиши, которые присутствуют
  в разметке HTML (на виртуальной клавиатуре).
 
 - Звук нажатия на клавишу должен соответсвовать ноте, описанной 
  в атрибуте button data-note.

 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.
 
 - Чекбокс Sound должен включать и выключать звук нажатия на клавиши. 
*/

const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const soundCheck = document.querySelector('#slideThree');
let soundFlag = soundCheck.checked;
const activeBtn = {
  node: null
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".toUpperCase().split("");
let charCodes = [];
keys.forEach(function(item, i, arr) {
	charCodes.push(item.charCodeAt(0));
});
charCodes[10] = 219;
charCodes[11] = 221;
charCodes[21] = 186;
charCodes[22] = 222;
charCodes[30] = 188;
charCodes[31] = 190;
charCodes[32] = 191;
charCodes[33] = 32;
 
function onClickButton(event) {
	for (let i = 0; i < charCodes.length; i++) {
		if (event.keyCode === charCodes[i]) {
			removeButtonHighLight();
			buttons[i].classList.add('keyboard__btn--active');
			if (soundFlag) {
				playSound(buttons[i].dataset.note);
			}
			activeBtn.node = buttons[i];
		}	
	}
}

function onClickSoundCheck(event) {
	soundFlag = event.target.checked;
	console.log(soundFlag);
}

function removeButtonHighLight() {
	if (activeBtn.node !== null) {
		activeBtn.node.classList.remove('keyboard__btn--active');
	}
}

window.addEventListener('keydown', onClickButton);
soundCheck.addEventListener('click', onClickSoundCheck);