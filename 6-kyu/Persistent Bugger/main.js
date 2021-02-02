const persistence = (num) => {
  let num_arr = Array.from(num.toString());
  let count = 0;
  if (num_arr.length === 1) return count;
  const reducer = (accumulator, current) => {
    return `${accumulator * current}`;
  };

  while (num_arr.length > 1) {
    num_arr = Array.from(num_arr.reduce(reducer));
    count++;
  }

  return count;
};

console.log(persistence(21));
console.log(persistence(4));
console.log(persistence(10));
console.log(persistence(0));
// test cases
persistence(21); // 1
persistence(39); // 3
persistence(4); // 0
persistence(25); // 2
persistence(999); // 4
