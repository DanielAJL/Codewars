const maxProduct = (numbers, size) => {
  // sort from highest to lowest
  const sort = numbers.sort((a, b) => {
    return b - a;
  });

  // remove all from numbers[size], leaving size amount of highest numbers.
  numbers.splice(size);

  // return the value of [size] entries in numbers multiplied together
  return numbers.reduce((a, b) => a * b);
};

console.log(maxProduct([4, 3, 5], 2)); // 20
console.log(maxProduct([10, 8, 7, 9], 3)); // 720
console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5)); // 247895375
