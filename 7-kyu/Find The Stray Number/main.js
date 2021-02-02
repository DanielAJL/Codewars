const stray = (arr) => {
  const new_arr = arr.filter((entry) => entry !== arr[0]); // checks array for what doesn't match the first entry and returns value(s) as an array.
  if (new_arr.length > 1) {
    // if new_arr has multiple items, then the first entry during the filter process was the odd one out.
    return arr[0];
  }
  return Number(new_arr.toString());
};

// test cases
console.log(stray([1, 1, 2])); // 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // 3
console.log(stray([8, 1, 1, 1, 1, 1, 1])); // 8
