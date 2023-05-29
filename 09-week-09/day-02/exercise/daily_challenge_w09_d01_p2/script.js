const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`
let enter1 = document.querySelector('#enter1');
let enter2 = document.querySelector('#enter2');


// const morse=''

function toJs () {return new Promise ((resolve,reject) => {
	console.log(morse.length);
	if (morse.length === 0){ 
		reject (Error("Error in morse......"));
	} else{
		let morseObj = JSON.parse(morse);
		console.log('From the Promis',morseObj);
		if (Object.keys(morseObj).length === 0){
			reject(Error("Error in morse......"))
		} else {
			resolve(morseObj);
		}
	}
})
}

function toMorse(morseJS){
	let words = prompt('Enter the word');
	enter1.textContent = '"'+words+'"';
	return new Promise ((resolve, reject)=>{
		words = words.toLowerCase().split(' ').join('').split('');
		if (words.every((value) => value in morseJS)){
			let morse_words = words.map((value) => morseJS[value]);
			console.log('Преобразовано',morse_words);
			resolve(morse_words)
		} else {
			enter1.textContent += ' Invalid characters used. Operation aborted.'
			reject(Error('Invalid characters used. Operation aborted'))
		}
	})
}

function joinWords(morseTranslation){
	let str = morseTranslation.reduce((acc, value) => acc+=value+'<br>')
	enter1.textContent += " gives you:";
	enter2.innerHTML = str;

}

toJs()
.then(data => data)
.then(data => toMorse(data))
.then(morse_words => joinWords(morse_words))
.catch(err => console.log(err));



