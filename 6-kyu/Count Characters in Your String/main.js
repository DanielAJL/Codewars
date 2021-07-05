/* eslint-disable no-shadow */
// eslint-disable-next-line no-console
console.clear();

function count(string) {
  const res = {};
  let tmp;
  const arr = string.split('');
  arr.forEach((char) => {
    tmp = char;
    const matches = arr.filter((char) => char === tmp);
    res[char] = char;
    res[char] = matches.length;
  });
  console.log(res);
  return res;
}

count('abacvsddvxxxxvwdffsxvxcbs');
