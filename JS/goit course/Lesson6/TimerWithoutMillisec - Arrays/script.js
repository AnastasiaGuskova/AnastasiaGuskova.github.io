/* Timer without milliseconds, make with arrays */

(function() {
	var timer = document.getElementById('timer');
	var start = document.getElementById('start');
	var clear = document.getElementById('clear');
	var timerId;

	// Change digits on the clock
	function tickTime() {
		var arr = timer.innerHTML.split(":");
		var hour = arr[0];
		var min = arr[1];
		var sec = arr[2];
		// If argument - one-digit number, add 0 to it (1 --> 01). The argument - string
		function makeTwoDigitNumber(numStr) {
			if (numStr.length == 1) {
				return '0' + numStr;
			}
			else {
				return '' + numStr;
			}
		}
		function tickSec() {
			if (sec == 59 && min == 59) {
				min = 0;
				sec = 0;
				hour++;
			}
			else if (sec == 59) {
				sec = 0;
				min++;
			}
			else {
				sec++;
			}
			timer.innerHTML = makeTwoDigitNumber(hour + '') + ':' + makeTwoDigitNumber(min + '')
			+ ':' + makeTwoDigitNumber(sec + '');
		}
		timerId = setInterval(tickSec, 1000);
	}

	function startTimer() {
		tickTime();
		start.removeEventListener('click', startTimer);
		start.innerHTML = 'Pause';
		start.classList.remove('btn-success');
		start.classList.add('btn-primary');
		start.addEventListener('click', pauseTimer);
	}

	function pauseTimer() {
		clearInterval(timerId);
		start.removeEventListener('click', pauseTimer);
		start.innerHTML = 'Continue';
		start.classList.remove('btn-primary');
		start.classList.add('btn-success');
		start.addEventListener('click', startTimer);
	}

	start.addEventListener('click', startTimer);

	function clearTimer() {
		if(start.innerHTML == 'Pause') {
			pauseTimer();
		}
		start.innerHTML = 'Start';
		timer.innerHTML = '00:00:00';
	}

	clear.addEventListener('click', clearTimer);
})();

