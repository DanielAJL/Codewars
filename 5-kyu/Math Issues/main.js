console.clear();

Math.round = function(number) {
	if(!number) return 0;
	if(number > 0){
		// positive nums
		let tmp = number.toString().split(".");
		if(tmp[1]){
			number = Number(tmp[1][0]) >= 5 ? Number(tmp[0]) + 1 : Number(tmp[0]);
		}
	} else {
		// negative nums
		let tmp = number.toString().split(".");
		if(tmp[1]){
			number = Number(tmp[1][0]) >= 5 ? Number(tmp[0]) - 1 : Number(tmp[0]);
		}
	}
	return number;
}

Math.ceil = function(number) {
	if(!number) return 0;

	if(number > 0) {
		// positive nums
		let tmp = number.toString().split(".");
		if(tmp[1]){
			number = Number(tmp[1]) > 0 ? Number(tmp[0]) + 1 :null;
		}
	} else {
		// negative nums
		let tmp = number.toString().split(".");
		if(tmp[1]){
			number = Number(tmp[1]) > 0 ? Number(tmp[0]) : null;
		}
	}

	return number;
};

Math.floor = function(number) {
	if(!number) return 0;
	if(number > 0){
		// positive nums
		let tmp = number.toString().split(".");
		if(tmp[1]){
			number = Number(tmp[1]) > 0 ? Number(tmp[0]) : null;
		}
	} else {
		// negative nums
		let tmp = number.toString().split(".");
		if(tmp[1]){
			number = Number(tmp[1]) > 0 ? Number(tmp[0]) - 1: null;
		}
	}

	return number;

}
  
// console.log("------------------- Math.round -------------------");
console.log(Math.round( 20.49)); //  20
console.log(Math.round( 20.5 )); //  21
console.log(Math.round( 42 )); //  42
console.log(Math.round(-20.5 )); // -20
console.log(Math.round(-20.51)); // -21

// console.log(Math.round(0.5000000));
// console.log(Math.round(0.44));
// console.log(Math.round(0.548));

// console.log("------------------- Math.ceil -------------------");
// console.log(Math.ceil(.95)); // expected output: 1
// console.log(Math.ceil(4)); // expected output: 4
// console.log(Math.ceil(7.004)); // expected output: 8
// console.log(Math.ceil(-7.004)); // expected output: -7

// console.log("------------------- Math.floor -------------------");
// console.log(Math.floor(5.95)); // expected output: 5
// console.log(Math.floor(5.05)); // expected output: 5
// console.log(Math.floor(5)); // expected output: 5
// console.log(Math.floor(-5.05)); // expected output: -6
