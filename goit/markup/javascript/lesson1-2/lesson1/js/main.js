
(function(){

	// degree of the number

	var userNumber = prompt('Enter your number');
	var degreeOfNumber = prompt('Enter degree of the number');
	var pow = function(userNumber,degreeOfNumber) {
		var res = userNumber;
		if (degreeOfNumber === 0) {
			return 1;	
		}

		for (var i = 2; i <= degreeOfNumber; i++) {
			res *= userNumber; 
		}

		return res;
	}
	console.log(pow(userNumber,degreeOfNumber));


	// second program
	
		var arr = [];
		for (var i = 1; i <= 5; i++) {
			arr.push(prompt('Enter user name №' + i));
		}
		var usersName = prompt('Enter name for comparison');
		for (var i = 0; i < arr.length; i++) {
			if (arr[i]== usersName) {
				alert(usersName +', you have been successfully entered');
				return;
			}
		}
		alert('Name «'+usersName +'» don`t found!');
}) ();
