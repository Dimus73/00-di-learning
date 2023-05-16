let sentence = ""
let newSentence = ""
sentence = prompt("Enter the sentence")
wordNot = sentence.indexOf('not')
wordBad = sentence.indexOf('bad')
console.log(wordNot, wordBad)
if (wordNot > 0 && wordBad > 0 && wordNot<wordBad){
	newSentence = sentence.slice(0,wordNot) + 'good' + sentence.slice(wordBad+'not'.length,)
} else{
	newSentence = sentence
}
console.log(newSentence)




