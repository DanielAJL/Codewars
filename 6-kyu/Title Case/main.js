/* eslint-disable no-console */

console.clear();
console.log('STARTED');

function capitalizeFirstLetter(string) {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function titleCase(title, minorWords) {
  if (!title) return '';

  const titleArr = title.split(' ');

  titleArr.forEach((word, i) => {
    titleArr[i] = capitalizeFirstLetter(word);
  });

  if (minorWords) {
    const minorWordsArr = minorWords.split(' ');
    minorWordsArr.forEach((minor, i) => {
      minorWordsArr[i] = capitalizeFirstLetter(minor);
    });

    titleArr.forEach((word, i) => {
      if (i !== 0) {
        if (minorWordsArr.includes(word)) {
          titleArr[i] = word.toLowerCase();
        }
      }
    });
  }
  console.log(titleArr.join(' '));
  return titleArr.join(' ');
}

console.log('1: ', titleCase('a clash of KINGS', 'a an the of'));
console.log('2: ', titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log('3: ', titleCase('the quick brown fox'));
console.log('4: ', titleCase(''));
