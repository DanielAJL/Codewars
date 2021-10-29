/**
 * 
 * @param {string} str 
 * @returns {String}
 */

function alphabetPosition(str) {
	const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
	let result = [];
	str = str.toLowerCase().split('');
	str.forEach((character, i) => {
		if(alphabet.indexOf(str[i]) >= 0){
			/**
			 * The example shows the count in alphabet starting at 1, not 0.
			 * So we add a +1 to add onto the index (which does start at 0).
			 */
			result.push(alphabet.indexOf(str[i]) + 1);
		}
	});

	return result.join(' ');
}



console.log(alphabetPosition("The sunset sets at twelve o' clock."));
//  "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

console.log(alphabetPosition("The narwhal bacons at midnight."));
// "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"