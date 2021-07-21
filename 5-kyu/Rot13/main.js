/* eslint-disable no-console */

console.clear();
console.log('STARTED');

// letter becomes letter 13 chars further, with z as limit, going ahead from a
function rot13(message) {
  let msgArr = message.split('');

  console.log(msgArr);
  msgArr.forEach((char, i) => {
    assignNewChar(char, msgArr, i);
  });
  return msgArr.join('');
}

console.log(rot13('Test'));
function assignNewChar(char, msgArr, i) {
  if ((char >= 'a' && char <= 'm') || (char >= 'A' && char <= 'M')) {
    let ascii = char.charCodeAt(0);
    ascii += 13;
    let newChar = String.fromCharCode(ascii);
    msgArr[i] = newChar;
  } else if ((char >= 'n' && char <= 'z') || (char >= 'N' && char <= 'Z')) {
    let ascii = char.charCodeAt(0);
    ascii -= 13;
    let newChar = String.fromCharCode(ascii);
    msgArr[i] = newChar;
  }
}
