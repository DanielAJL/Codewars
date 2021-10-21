console.clear();

function highestRank(array) {
	// store unique values in filteredArray
	const filteredArray = [...new Set(array)];
	const storage = [];

	for (let i = 0; i < filteredArray.length; i++) {
		let count = 0;
		for (let j = 0; j < array.length; j++) {
			// if unique matches array entry, increment match count.
			if(filteredArray[i] == array[j]){
				count++;
			}
		}
		// create and push object to storage.
		let obj = {rank: filteredArray[i], count: count};
		storage.push(obj);
	}
	
	// sort by most matches
	// if the most amount is shared with another value, sort by value.
	storage.sort((a,b) => b.count - a.count);
	let draw = storage.filter((obj) => obj.count == storage[0].count);
	if(draw){
		draw.sort((a,b) => b.rank - a.rank);
		return draw[0].rank;
	}
	return storage[0].rank;
}

console.log(highestRank([10, 10, 8, 12, 7, 6, 4, 12, 10, 12]));
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 2]));
