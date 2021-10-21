console.clear();

function isPangram(string){
	const regex = /[a-zA-Z]/g;
	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	// remove non-alphabetic characters and make all lowercase.
	let filteredString = [...string.toLowerCase()].filter((char) => char.match(regex)).join('');

	// loop through alphabet and check if string contains each iteration.
	for (let i = 0; i < alphabet.length; i++) {
		if(!filteredString.includes(alphabet[i]))
			return false;
	}
	return true;
}

var string = "The quick brown fox jumps over the lazy dog.";
var string2 = "This is not a pangram.";

console.log(isPangram(string)); // true
console.log(isPangram(string2)); // false

