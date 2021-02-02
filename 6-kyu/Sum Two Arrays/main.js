const addArrays = (arr1, arr2) => {
  //  convert both array entries to strings and then join them into an array as an integer number and add/subtract them.
  let result_str = `${
    Number(arr1.toString().split(",").join("")) +
    Number(arr2.toString().split(",").join(""))
  }`;

  let result_arr = Array.from(result_str).filter((entry) => !isNaN(entry));
  result_arr = result_arr.map(Number);

  // check if result_str is negative, if true then convert the first entry to a negative [ and check if empty or 0 for returning an empty array]
  if (result_str < 0) {
    result_arr[0] = -result_arr[0];
  } else if (result_str == 0) {
    result_arr = [];
  }
  return result_arr.map(Number);
};

// test cases
console.log(addArrays([6, 7], [6, 7])); // [ 1, 3, 4 ]
console.log(addArrays([-5, 3, 1, 1, 7], [-3, 3, 8, 8, 5, 5, 2, 7])); // [-3, 3, 9, 3, 8, 6, 4, 4]
console.log(addArrays([], [])); // []
console.log(addArrays([6, 7, 7, 9, 3], [6, 7])); // [6, 7, 8, 6, 0]
