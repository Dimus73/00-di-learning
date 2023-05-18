function playTheGame(){

	console.log('Hellow !');
	q = 'Tell me how many bottles will be at the beginning'
	do {
		user_numb = parseInt(prompt(q));
		if ( isNaN(user_numb) ){
			q = "You didn't enter a number. Please enter a number.";
			user_numb = 'z';
		} 
	} while (isNaN(user_numb) || user_numb < 1)
	let i=0;
	console.log(`We start the song at ${user_numb} bottles`);
	while (user_numb-i>0){
		i++;
		if (i===1){
			console.log(`Take _${i}_ down, pass it around`)
		} else {
			console.log(`Take _${i}_ down, pass them around`)
		}
		user_numb-=i;
		console.log(`we have now ${user_numb} bottles`)
	}

}


