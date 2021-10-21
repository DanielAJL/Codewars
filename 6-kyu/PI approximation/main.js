console.clear();

function iterPi(n)
{
	const pi = Math.PI;
	const pi_min = pi - n;
	const pi_max = pi + n;
	let state = false;
	let j = 3;

	// n = min number of iterations to run + 1000
	n = Number((1/n).toFixed(0)) + 1000;

	let tmp = 1;
	for (let i = 1; i <= n; i++) {
		if((tmp*4) >= pi_min && (tmp*4) <= pi_max )
			return [i, Number(((tmp*4).toFixed(10)))];
		if(!state)
			tmp = tmp - (1/j);
		else
			tmp = tmp + (1/j);
		j +=2;
		state = !state;
	}
}

let n = 0.00001;
console.log(iterPi(n)); // [1000, 3.1405926538]