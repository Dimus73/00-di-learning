//************* Exercise 1 : Menu */

function mergeWords(string) {
	return function(nextString) {
		if (nextString === undefined) {
			return string;
		} else {
			return mergeWords(string + ' ' + nextString);
		}
	}
 }

 console.log(mergeWords('There')('is')('no')('spoon.')());