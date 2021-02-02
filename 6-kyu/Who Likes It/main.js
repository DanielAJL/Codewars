const likes = (arr) => {
  if (!arr.length) return "no one likes this";

  let static_str = "like this";

  if (arr.length === 1) {
    return `${arr[0]} likes this`;
  } else if (arr.length === 2) {
    return `${arr[0]} and ${arr[1]} ${static_str}`;
  } else if (arr.length === 3) {
    return `${arr[0]}, ${arr[1]} and ${arr[2]} ${static_str}`;
  } else {
    return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others ${static_str}`;
  }
};

// test cases
console.log(likes([])); // 'no one likes this'
console.log(likes(["Peter"])); // 'Peter likes this'
console.log(likes(["Jacob", "Alex"])); // 'Jacob and Alex like this'
console.log(likes(["Max", "John", "Mark"])); // 'Max, John and Mark like this'
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // 'Alex, Jacob and 2 others like this'
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Daniel"]));
