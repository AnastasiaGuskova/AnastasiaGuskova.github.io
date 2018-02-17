let keyboards = [];

const keyboardEn = {
	topRow: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
    middleRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
    bottomRow: ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"]
}
keyboards.push(keyboardEn);

const keyboardRu = {
    topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
    middleRow: ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
    bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
}
keyboards.push(keyboardRu);

const keyboardUa = {
	topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї"],
    middleRow: ["ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є"],
    bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "."]
}
keyboards.push(keyboardUa);

function createLayout(letters) {
	let keyboard = '<div class="row">';
	for (let i = 0; i < letters.topRow.length; i++) {
		keyboard += '<div class="key">' + letters.topRow[i] + '</div>';
	}
	keyboard += '</div><div class="row">';
	for (let i = 0; i < letters.middleRow.length; i++) {
		keyboard += '<div class="key">' + letters.middleRow[i] + '</div>';
	}
	keyboard += '</div><div class="row">';
	for (let i = 0; i < letters.bottomRow.length; i++) {
		keyboard += '<div class="key">' + letters.bottomRow[i] + '</div>';
	}
	return keyboard;
}

let lang;

do {
  lang = +prompt('Input language [0 - En, 1 - Ru, 2 - Ua]');
  if (lang == 0 || lang == 1 || lang == 2 || lang == null) {
    break;
  } else {
    alert('Unavalable language was chosen. Choose another one.');
  }
} while (true);


document.querySelector('.wrapper').
	insertAdjacentHTML('beforeend', createLayout(keyboards[lang]));