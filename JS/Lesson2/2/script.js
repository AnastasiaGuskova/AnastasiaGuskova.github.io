(function() {
	var arr = [];

	for (var i = 0; i < 5; i++) {
		arr[i] = prompt("Введите любимое имя");
	}

	var name = prompt("Введите имя");

	for (var i = 0; i < 5; i++) {
		if (arr[i] == name) {
			var flagName = name;
		}
	}

	if (flagName) {
		alert(flagName + ", вы успешно вошли");
	}
	else {
		alert("Данного имени не существует в массиве."); 
	}
})();

