function isValidWalk(walk) {
	if(walk.length == 1 || walk.length > 10) return false;
	let stepsFromStartX = 0;
	let stepsFromStartY = 0;

	walk.forEach((direction, i) => {
		if(direction == 'n') stepsFromStartY++;
		if(direction == 's') stepsFromStartY--;
		if(direction == 'e') stepsFromStartX++;
		if(direction == 'w') stepsFromStartX--;
	});

	if(stepsFromStartX == 0 && stepsFromStartY == 0 && walk.length == 10) return true;

	return false;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // should return true and exactly 10
console.log(!isValidWalk([ 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e' ])); // should return true [ more than 10 ]