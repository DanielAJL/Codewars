const noSpace = (str) => {
  str = Array.from(str)
    .filter((item) => item !== " ")
    .join("");

  return str;
  // return str.split(' ').join('');
};

// test cases
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")); // returns '8j8mBliB8gimjB8B8jlB';
console.log(noSpace("8aaaaa dddd r     ")); // returns '8aaaaaddddr';
