const twoOldestAges = (ages) => {
  const two_oldest = ages
    .sort((a, b) => {
      return a - b;
    })
    .splice(-2);

  return two_oldest;
};

// const twoOldestAges = (ages) => {
//   return ages
//     .sort((a, b) => {
//       return a - b;
//     })
//     .splice(-2);
// };

// test cases
console.log(twoOldestAges([1, 2, 10, 8])); // [8, 10]
console.log(twoOldestAges([1, 5, 87, 45, 8, 8])); // [ 45, 87 ]
console.log(twoOldestAges([1, 1, 1, 1])); // [1, 1]
console.log(twoOldestAges([1, 2, 3])); // [2, 3]
console.log(twoOldestAges([3, 2, 1])); // [2, 3]
console.log(twoOldestAges([-9, 0, -61])); // [-9, 0]
console.log(twoOldestAges([-3, 2, -1])); // [-1, 2]
