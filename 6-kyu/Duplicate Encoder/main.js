console.clear();
function duplicateEncode(word){
	// Copy of the word, as an array. We will use it to compare in forEach.
	let wordArray = word.toLowerCase().split("");

	/**
	 * Array to mutate, else our forEach mutates the wordArray
	 * and matches.length gets altered each time we mutate a match.
	 */

	let resultArr = word.toLowerCase().split("");
	let matches;

	wordArray.forEach((character, i) => {
		matches = wordArray.filter((each) => each == character);
		if(matches.length > 1){
			resultArr[i] = ')';
		} else {
			resultArr[i] = '(';
		}
	});
	return resultArr.join('');
}

// console.log(duplicateEncode("din")) // (((
console.log(duplicateEncode("recede")) // ()()()