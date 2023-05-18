function playTheGame(){

	console.log('Hellow !');
	let q = 'Please enter a number from 1 to 10'
	let user_numb = 0;
	let attempt = 1;
	let winner = false
	let computerNumber = Math.round(Math.random()*(10-1)+1);

	while (attempt <= 3 && !winner){
		do {
			user_numb = parseInt(prompt(q));
			if ( isNaN(user_numb) ){
				q = "You didn't enter a number. Please enter a number from 1 to 10";
				console.log(q)
				user_numb = 'z';
			} else if (user_numb < 1 || user_numb > 10){
				q = "A number between 1 and 10 is required. Please try again";
				user_numb = 'z';
			}
		} while (isNaN(user_numb))
		console.log(user_numb);
		console.log(computerNumber);
		res = compareNumbers (computerNumber,user_numb);
		switch (res){
			case 0:
				winner = true;
				break;
			case -1:
				q ='Your number is more than necessary. Try again'
				break;
			case 1:
				q ='Your number is less than necessary. Try again'
				break;
		}
		attempt++;
	}
	if (winner){
		alert('WINNER')
	} else {
		alert ("You didn't guess. Try another time")
	}

}


function compareNumbers (n1,n2){
	if (n1 === n2) {
		return 0
	} else if (n1<n2){
		return -1
	} else {
		return 1
	}
}

