function numberToString(num) {
  return num.toString(); // Using radix base 10 for decimal system. It is the default value, but is filled in anyways for this case.
}

// test cases
console.log(numberToString(123)); // returns '123';
console.log(numberToString(999)); // returns '999';
