const sortArray = (arr) => {
  let odds_sorted = arr
    .filter((num) => num % 2)
    .sort((a, b) => {
      return a - b;
    });
  let even = arr.filter((num) => num % 2 === 0);
  console.log("odd", odds_sorted, "even", even);

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(even.shift()); // if EVEN remove and push the first even number found from the even array into the result array.
    } else {
      result.push(odds_sorted.shift()); // if ODD remove and push the first odd number found from the odd array into the result array.
    }
  }

  return result;
};

// test cases: return array with odd numbers only sorted. Even numbers stay at their index.
console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
console.log(sortArray([2, 3, 1, 8, 0])); // [2, 1, 3, 8, 0]
console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0]
console.log(sortArray([])); // []
