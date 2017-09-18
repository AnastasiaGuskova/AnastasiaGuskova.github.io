(function() {
	var dropDown = document.querySelectorAll('.dropdown');

	for(var i=0; i < dropDown.length; i++ ) {
		var submenu;
		dropDown[i].addEventListener('mouseenter', function() {
			submenu = this.querySelectorAll('.submenu');
			showElem(submenu[0]);
		});
		dropDown[i].addEventListener('mouseleave', function() {
			submenu = this.querySelectorAll('.submenu');
			hideElem(submenu[0]);
		});
	}

	var time = 0;

	function showElem(elem) {
		elem.classList.add('show-block-elem');
		var heigt = 0;
		var timer = setInterval(function() {
			if (time == 1000) {
				clearInterval(timer);
				console.log('clearInterval');
			}
			var op = (opacityValue + 0.01) + '';
			elem.style.opacity = op;
			time += 10;
		}, 10);

	}

	function hideElem(elem) {
		var opacityValue = 1;
		var timer = setInterval(function() {
			if (time == 0) {
				clearInterval(timer);
			}
			var op = (opacityValue - 0.01) + '';
			elem.style.opacity = op;
			time -= 10;
		}, 10);
	}
})();