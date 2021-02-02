const isSquare = (n) => {
  return Number.isInteger(Math.sqrt(n));
}


// test cases
isSquare(-1) // false
isSquare(4) // true
isSquare(0) // true
isSquare(26) // false