(function() {
	function pow(a, n) {
		if (n > 0) {
			if(n != 1) {
				return a * pow (a, n-1);
			}
			else {
				return a;
			}
		}
		else if(n == 0)  {
			return 1;
		}
		else {
			n = -n;
			var multip = a;
			for(var i=1; i < n; i++) {
				multip *= a; 
			}
			return 1/multip;
		}	
	}

	var a = prompt("Введите число");
	var n = prompt("Введите степень");

	var result = pow(a, n);
	console.log(result);
})();

