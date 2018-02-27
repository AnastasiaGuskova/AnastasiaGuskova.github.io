/*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.
  
  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/

let lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};

let charCodes = [];
lang.en.toUpperCase().split('').forEach(function(item, i, arr) {
	charCodes.push(item.charCodeAt(0));
});
charCodes[10] = 219;
charCodes[11] = 221;
charCodes[21] = 186;
charCodes[22] = 222;
charCodes[30] = 188;
charCodes[31] = 190;
charCodes[32] = 191;

// Rendering of Sound Links
const sounds = [
	{ note: 'do', src: 'https://goo.gl/T1rxRG' },
	{ note: 're', src: 'https://goo.gl/KT8FN3' },
	{ note: 'mi', src: 'https://goo.gl/1SfsNS' },
	{ note: 'fa', src: 'https://goo.gl/OsOCXe' },
	{ note: 'sol', src: 'https://goo.gl/vukZmv' },
	{ note: 'la', src: 'https://goo.gl/Bjd9KT' }
];

const soundHtml = document.querySelector('#sound-tpl').textContent.trim();
const soundCont = document.querySelector('#sound-src');

function renderSoundSrc(tmpl, parent) {
	const compiled = _.template(tmpl);
	const result = compiled({soundSrc: sounds});
	parent.innerHTML = result;
}

renderSoundSrc(soundHtml, soundCont);

// Create Letters Array
const firstRow = lang.en.slice(0, 12).split('');
const secondRow = lang.en.slice(12, 23).split('');
const thirdRow = lang.en.slice(23).split('');
lang.en = {
	firstRow: lang.en.slice(0, 12).split(''),
	secondRow: lang.en.slice(12, 23).split(''),
	thirdRow: lang.en.slice(23).split('')
};

// Keyboard Generation
const html = document.querySelector("#keyboard-tpl").textContent.trim();
const parent = document.querySelector("#keyboard-container");

renderKeyboard(html, lang.en, parent);

function renderKeyboard(tpl, rows, parent) {
  const compiled = _.template(tpl);
  const result = compiled({data: rows, smth: sounds});
  parent.innerHTML = result;
}

// Play Sound
const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  audio.currentTime = 0;
  audio.play();
};

const soundCheck = document.querySelector('#slideThree');
let soundFlag = soundCheck.checked;

function onClickSoundCheck(event) {
	soundFlag = event.target.checked;
	console.log(soundFlag);
}

soundCheck.addEventListener('click', onClickSoundCheck);

// Highlighting of pressed buttons
const activeBtn = {
  node: null
};
const buttons = Array.from(document.querySelectorAll("button"));

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

function removeButtonHighLight() {
	if (activeBtn.node !== null) {
		activeBtn.node.classList.remove('keyboard__btn--active');
	}
}

window.addEventListener('keydown', onClickButton);

