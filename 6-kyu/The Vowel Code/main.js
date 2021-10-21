function encode(string) {
  const vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  let tmp = string.split('');
  tmp.forEach((c, i) => {
    for (const [key, value] of Object.entries(vowels)) {
        if (c == key)
            tmp[i] = `${value}`;
      }
  });

  return tmp.join('');
}

function decode(string) {
    const vowels = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5,
      };

      let tmp = string.split('');
      tmp.forEach((c, i) => {
        for (const [key, value] of Object.entries(vowels)) {
            if (c == value)
                tmp[i] = `${key}`;
          }
      });

  return tmp.join('');
}

// encode('hello')
// encode('How are you today?')
// encode('This is an encoding test.')
// decode('h2ll4')

console.log(encode('hello'));
console.log(encode('How are you today?'));
console.log(encode('This is an encoding test.'));
console.log(decode('h2ll4'));
