function isAnagram(f1, f2){
	let sort_f1 = listOfLetters(f1);
	let sort_f2 = listOfLetters(f2);
	return (JSON.stringify(sort_f1) === JSON.stringify(sort_f2)) ? true : false;
};

function listOfLetters(f){
	let temp = f.toLowerCase().split('').sort().filter(item => item != ' ');
	return temp;
}

console.log(isAnagram("Schoold master", "The classroom"));
console.log(isAnagram("School master", "The classroom"));
