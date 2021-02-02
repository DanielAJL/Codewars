const order = (str) => {
  const words = str.split(" ");
  const sorted_words = words
    .sort((a, b) => {
      // console.log(a.match(/\d/));
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");

  return sorted_words;
};

// test cases
console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Thi1s is2 3a T4est"
console.log(order("")); // ""
