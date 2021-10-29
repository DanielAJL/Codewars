console.clear()
/**
 * Returns the amount collected by each beggar in order of each beggar.
 * 
 * @param {number[]} values amount collected ( in turns for each beggar )
 * @param {number} n amount of beggars
 * @returns {number[]}
 */
function beggars(values, n){
	// There are no beggars, hence nothing to collect.
	if (!n)
		return [];
	/**
	 * Create a placeholder array with 0's to store values in for n amount of beggars.
	 * We iterate over the array and check which position to sum the value.
	 */
	const sumValuesArr = Array(n).fill(0);
	values.forEach((value, index) => {
		sumValuesArr[index % n] += value;
	});

	return sumValuesArr;
}  
  
console.log(beggars([1,2,3,4,5],0)); // [ ]
console.log(beggars([1,2,3,4,5],3)); // [5,7,3]
console.log(beggars([1,2,3,4,5],2)); // [9, 6];