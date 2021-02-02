const getCount = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowel_count = 0;
  str = str.split("");
  str.forEach((char) => {
    vowels.forEach((vowel) => {
      if (char === vowel || char === vowel.toUpperCase()) {
        vowel_count++;
      }
    });
  });
  return vowel_count;
};

console.log(getCount("abracadabra")); // 5
console.log(getCount("o a kak ushakov lil vo kashu kakao")); // 13
console.log(getCount("my pyx")); // 0
console.log(getCount("o aAAAA kak ushakOOov liiIIl vo kashuUUUU kakao")); // 26
