const minSum = (arr) => {
  // sort arr from highest to lowest.
  const sorted = arr.sort((a, b) => {
    return b - a;
  });

  // grab first idx and last idx for highest and lowest ( min sum ).
  const placeholder = [];
  let iterator = sorted.length;

  for (let idx = 0; idx < arr.length; idx++) {
    if (iterator !== arr.length / 2) {
      iterator--;
      let result = arr[idx] * arr[iterator];
      placeholder.push(result);
    }
  }

  return placeholder.reduce((a, b) => a + b, 0);
};

/**
 * Given an array of integers,
 * Find the minimum sum which is obtained from summing each Two integers product .
 */
console.log(minSum([5, 4, 2, 3])); // 22
console.log(minSum([12, 6, 10, 26, 3, 24])); // 342
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6])); // 74
