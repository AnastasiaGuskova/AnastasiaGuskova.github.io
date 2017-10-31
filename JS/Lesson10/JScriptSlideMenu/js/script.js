(function() {
	var dropDown = document.querySelectorAll('.dropdown');

	for(var i = 0; i < dropDown.length; i++ ) {
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
	var height;
	var maxHeight;

	function showElem(elem) {
		elem.classList.add('show-block-elem');
		height = 0;
		maxHeight = parseInt(window.getComputedStyle(elem, null).height);
		console.log(maxHeight);
		var showTimer = setInterval(function() {
			if (time == 1000) {
				clearInterval(showTimer);
			}
			elem.style.height = height + 'px';
			height += maxHeight/100;
			console.log(elem.style.height);
			time += 10;
		}, 10);

	}

	function hideElem(elem) {
		console.log('mouseleave');
		var hideTimer = setInterval(function() {
			if (time == 0) {
				clearInterval(hideTimer);
			}
			height -= maxHeight/100;
			elem.style.height = height + 'px';
			time -= 10;
		}, 10);
	}
})();