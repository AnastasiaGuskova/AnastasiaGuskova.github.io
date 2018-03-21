/*
 Напишите скрипт который реализует следующее поведение:
 
 - При клике по label должен сработать checkbox и 
  включить, либо выключить звук при клике на клавишу.
  
 - Подсветку текущей клавиши реализуйте с помощью класса
  keyboard__btn--active.
  
 - Для проигрывания музыки вызовите функцию playSound
*/

const playSound = () => {
  const audio = document.querySelector("audio");
  audio.currentTime = 0;
  audio.play();
};

const btns = document.querySelector(".keyboard");
const activeBtn = {
  node: null
};

const soundCheck = document.querySelector('#slideThree');
let soundFlag = soundCheck.checked;

function removeButtonHighLight() {
	if (activeBtn.node !== null && 
		activeBtn.node.classList.contains('keyboard__btn--active')) {
			activeBtn.node.classList.remove('keyboard__btn--active');
	}
}

function onClickSoundCheck(event) {
	soundFlag = event.target.checked;
}

function onClickButton(event) {
	let target = event.target;

	if (target.tagName === 'BUTTON') {
		removeButtonHighLight();
		target.classList.add('keyboard__btn--active');
		if (soundFlag) {
			playSound();
		}
		activeBtn.node = target;
	}
}

function onClickVoid(event) {
	if(event.target.tagName !== 'BUTTON') {
		removeButtonHighLight();
	}
}

soundCheck.addEventListener('click', onClickSoundCheck);
btns.addEventListener('click', onClickButton);
document.addEventListener('click', onClickVoid);