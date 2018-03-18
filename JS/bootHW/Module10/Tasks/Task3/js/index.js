/* 
  Написать скрипт, который по клику присваивает
  выбранной кнопке языка класс lang-ctrls__btn--active
  и сохраняет сделанный выбор  в объекте, а этот объект
  сохранятеся в localStorage.
  
  При загрузке окна происходит провека есть ли сохраненный
  выбор в localStorage и если есть, то данные для подсветки 
  коавиши берутся оттуда.
*/

// localStorage.clear();

const btnsBody = document.querySelector('.lang-ctrls__body');

let activeBtn = {
	node: document.querySelector('.lang-ctrls__btn--active')
}

if (localStorage.getItem('lang')) {
	let btns = document.querySelectorAll('.lang-ctrls__btn');
	btns.forEach(function(item) {
		if (item.dataset.lang === localStorage.getItem("lang")) {
			changeHighlight(item);
			activeBtn.node = item;
		}
	});
}

function changeHighlight(btn) {
	activeBtn.node.classList.remove('lang-ctrls__btn--active');
	btn.classList.add('lang-ctrls__btn--active');
}

function onClickLangBtn(event) {
	let target = event.target;

	if(target.tagName === 'BUTTON') {
		changeHighlight(target);
		activeBtn.node = target;
		localStorage.setItem('lang', activeBtn.node.dataset.lang);
	}
}

btnsBody.addEventListener('click', onClickLangBtn);
