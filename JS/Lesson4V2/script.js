(function() {
	var app = {
		createElement: function(params) {
			var elem = document.createElement(params.tagName);

			if(params.className) {
				elem.className = params.className;
			}

			if(params.content) {
				elem.innerHTML = params.content;
			}

			if (params.tagName === 'input') {
				elem.setAttribute('type', params.inputType);
				if (params.inputType === 'submit') {
					elem.setAttribute('value', params.inputValue);
				}
			}

			if (params.parentElem) {
				var insertPlace = params.insertPlace || 'after';
				
				switch(insertPlace) {
					case 'after':
						params.parentElem.appendChild(elem);
						break;
					case 'before':
						console.log('prepend');
						params.parentElem.prepend(elem);
						break;
				}
			}

			console.log('create ' + params.tagName);
			return elem;
		},

		createElements: function(params, amount) {
			var elems = [];
			for (var i = 0; i < amount; i++) {
				var elem = this.createElement(params);
				elems.push(elem);
			}
			return elems;
		}
	}

	var body = document.querySelector('body');
	app.createElement({
		tagName: 'h3',
		className: 'text-center',
		content: 'Тест по программированию',
		parentElem: body
	});

	var form = app.createElement({
		tagName: 'form',
		className: 'container',
		parentElem: body
	});

	var questionList = app.createElement({
		tagName: 'ol',
		parentElem: form
	});

	var questions = [];
	questions = app.createElements({
		tagName: 'li',
		content: 'Вопрос',
		parentElem: questionList
	}, 3);

	questions.forEach(function(item, i, arr) {
		app.createElements({
			tagName: 'div',
			content: '<label> Ответ ' + '</label>',
			parentElem: item
		}, arr.length);
	});

	var labels = form.querySelectorAll('label');
	labels.forEach(function(item, i, arr) {
		app.createElement({
			tagName: 'input',
			inputType: 'checkbox',
			parentElem: item,
			insertPlace: 'before'
		});
	});

	app.createElement({
		tagName: 'input',
		className: 'btn btn-default',
		inputType: 'submit',
		inputValue: 'Проверить мои результаты',
		parentElem: form
	});

})();