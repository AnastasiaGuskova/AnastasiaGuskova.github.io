/* Timer with milliseconds, make with the Date Objects */

(function() {
	var timer= document.getElementById('timer');
	var millisec = document.getElementById('millisec');
	var record = document.getElementById('record-time');
	var startButton = document.getElementById('start');
	var clearButton = document.getElementById('clear');
	var splitButton = document.getElementById('split');
	var nowDate = new Date();
	var pauseTime, startTime, countTime;
	var inactiveTime = 0;
	var timerId;
	var splitTime;
	var timeLapsNum = 0;

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

	function makeThreeDigitNumber(numStr) {
		switch(numStr.length) {
			case 1:
				return '00' + numStr;
				break;
			case 2:
				return '0' + numStr;
			case 3: 
				return numStr;
		}
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
		splitButton.addEventListener('click', splitTimer);
		
		startButton.innerHTML = 'Pause';
		startButton.classList.remove('btn-success');
		startButton.classList.add('btn-primary');
	}

	function pauseTimer() {
		pauseTime.setTime(Date.now());

		timeLapsNum++;
		splitTime = document.createElement('p');
		splitTime.innerHTML = timeLapsNum + ' Stop: ' + timer.innerHTML + ' '
		 + makeThreeDigitNumber(millisec.innerHTML);
		record.appendChild(splitTime);

		clearInterval(timerId);
		startButton.removeEventListener('click', pauseTimer);
		startButton.addEventListener('click', countTimer);
		splitButton.removeEventListener('click', splitTimer);

		startButton.innerHTML = 'Continue';
		startButton.classList.remove('btn-primary');
		startButton.classList.add('btn-success');
	}

	startButton.addEventListener('click', startTimer);

	function splitTimer() {
		timeLapsNum++;
		splitTime = document.createElement('p');
		splitTime.innerHTML = timeLapsNum + ' Split: ' + timer.innerHTML + ' '
		 + makeThreeDigitNumber(millisec.innerHTML);
		record.appendChild(splitTime);
	}

	function clearTimer() {
		if(startButton.innerHTML == 'Pause') {
			pauseTimer();
		}
		startButton.innerHTML = 'Start';
		timer.innerHTML = '00:00:00';
		millisec.innerHTML = '000';
		timeLapsNum = 0;
		record.innerHTML = '';

		startButton.removeEventListener('click', pauseTimer);
		startButton.removeEventListener('click', countTimer);
		startButton.addEventListener('click', startTimer);
	}

	clearButton.addEventListener('click', clearTimer);
})();



