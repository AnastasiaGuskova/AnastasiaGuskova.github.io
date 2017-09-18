/* Timer with milliseconds, make with the Date Objects */

(function() {
	var timer= document.getElementById('timer');
	var millisec = document.getElementById('millisec')
	var startButton = document.getElementById('start');
	var clearButton = document.getElementById('clear');
	var nowDate = new Date();
	var pauseTime, startTime, countTime;
	var inactiveTime = 0;
	var timerId;

	function tickTime() {
		// If argument - one-digit number, add 0 to it (1 --> 01). The argument - string
		function makeTwoDigitNumber(numStr) {
			if (numStr.length == 1) {
				return '0' + numStr;
			}
			else {
				return '' + numStr;
			}
		}

		nowDate.setTime(Date.now() - startTime - inactiveTime);
		timer.innerHTML = makeTwoDigitNumber(nowDate.getUTCHours() + '') + ':'
					+ makeTwoDigitNumber(nowDate.getUTCMinutes() + '') + ':'
					+ makeTwoDigitNumber(nowDate.getUTCSeconds() + '');
		millisec.innerHTML = nowDate.getMilliseconds();
	}

	function startTimer() {
		startTime = new Date();
		pauseTime = new Date();
		countTimer();
	}

	function countTimer() {
		countTime = new Date();
		inactiveTime = countTime - pauseTime;

		timerId = setInterval(tickTime, 4);
		startButton.removeEventListener('click', startTimer);
		startButton.removeEventListener('click', countTimer);
		startButton.addEventListener('click', pauseTimer);
		
		startButton.innerHTML = 'Pause';
		startButton.classList.remove('btn-success');
		startButton.classList.add('btn-primary');
	}

	function pauseTimer() {
		pauseTime.setTime(Date.now());

		clearInterval(timerId);
		startButton.removeEventListener('click', pauseTimer);
		startButton.addEventListener('click', countTimer);

		startButton.innerHTML = 'Continue';
		startButton.classList.remove('btn-primary');
		startButton.classList.add('btn-success');
	}

	startButton.addEventListener('click', startTimer);

	function clearTimer() {
		if(startButton.innerHTML == 'Pause') {
			pauseTimer();
		}
		startButton.innerHTML = 'Start';
		timer.innerHTML = '00:00:00';
		millisec.innerHTML = '000';

		startButton.removeEventListener('click', pauseTimer);
		startButton.removeEventListener('click', countTimer);
		startButton.addEventListener('click', startTimer);
	}

	clearButton.addEventListener('click', clearTimer);
})();



