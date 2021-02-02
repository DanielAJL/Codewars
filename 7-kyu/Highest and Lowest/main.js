function highAndLow(numbers){
  const numbers_arr = numbers.split(' ');
  numbers_arr.sort((a, b) =>  {
    return b - a
  })
  return `${numbers_arr[0]} ${numbers_arr[numbers_arr.length-1]}`;
}


// test cases
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"