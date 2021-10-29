/**
 * @param {string} str
 * Make the str do the wave.
 * - all characters in string will be lowercase.
 * - possibility of whitespaces.
 */
function wave(str) {
	const arrayHolder = [];
	let strArr = [...str];
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i] !== ' '){
			strArr[i] = strArr[i].toUpperCase();
			arrayHolder.push(strArr.join(''));
			strArr[i] = strArr[i].toLowerCase();
		}
	}
	return arrayHolder;
}


console.log(wave("test string"));
console.log(wave("code wars"));
