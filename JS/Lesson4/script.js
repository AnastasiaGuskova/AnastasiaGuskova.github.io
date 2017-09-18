(function() {
	var testFunctions = {
		createHeading: function(text) {
			var newHeading = document.createElement('h3');
			newHeading.innerHTML = text;
			newHeading.classList.add('text-center');
			document.body.appendChild(newHeading);
		},
		createFormList: function() {
			var newForm = document.createElement('form');
			newForm.classList.add('container');
			var newList = document.createElement('ol');
			document.body.appendChild(newForm);
			newForm.appendChild(newList);
		},
		createListItem: function(question) {
			var newItem = document.createElement('li');
			newItem.innerHTML = question;
			document.querySelector('ol').appendChild(newItem);
		},
		createCheckbox: function(itemNum, answer) {
			var div = document.createElement('div');
			document.querySelector('ol').children[itemNum-1].appendChild(div);
			var newCheckbox = document.createElement('input');
			var newLabel = document.createElement('label');
			div.appendChild(newLabel);
			newCheckbox.setAttribute('type', 'checkbox');
			newLabel.appendChild(newCheckbox);
			newLabel.innerHTML += ('\n' + answer);
		},
		createButton: function(text) {
			var button = document.createElement('input');
			button.setAttribute('type', 'submit');
			button.setAttribute('value', text);
			button.classList.add('btn');
			button.classList.add('btn-default');
			document.body.getElementsByTagName('form')[0].appendChild(button);
		}
	};

	testFunctions.createHeading('Тест по программированию');
	testFunctions.createFormList();
	testFunctions.createListItem('Вопрос 1');
	testFunctions.createCheckbox(1, 'Ответ 1');
	testFunctions.createCheckbox(1, 'Ответ 2');
	testFunctions.createCheckbox(1, 'Ответ 3');
	testFunctions.createListItem('Вопрос 2');
	testFunctions.createCheckbox(2, 'Ответ 1');
	testFunctions.createCheckbox(2, 'Ответ 2');
	testFunctions.createCheckbox(2, 'Ответ 3');
	testFunctions.createListItem('Вопрос 3');
	testFunctions.createCheckbox(3, 'Ответ 1');
	testFunctions.createCheckbox(3, 'Ответ 2');
	testFunctions.createCheckbox(3, 'Ответ 3');
	testFunctions.createButton('Проверить мои результаты');
})();

