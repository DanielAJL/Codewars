/* eslint-disable no-console */

console.clear();
console.log('STARTED');

function uniqueInOrder(sequence) {
  // sequence from str to arr
  if (typeof sequence === 'string') sequence = sequence.split('');
  sequence = sequence.filter((value, i) => value !== sequence[i + 1]);
  return sequence;
}

console.log('sequence 1: ', uniqueInOrder('AAAABBBCCDAABBB'));
console.log('sequence 2: ', uniqueInOrder('ABBCcAD'));
console.log('sequence 3: ', uniqueInOrder([1, 2, 2, 3, 3]));
