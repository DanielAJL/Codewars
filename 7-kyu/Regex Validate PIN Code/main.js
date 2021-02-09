const validatePIN = (str) => {
  const isValid = !!((str.length === 4 || str.length === 6) && /^[0-9]+$/.test(str));
  return isValid;
};

// test cases
validatePIN('123456'); // true
validatePIN('1234'); // true
validatePIN('090909'); // true
validatePIN('1.234'); // false
validatePIN('1'); // false
validatePIN('a234'); // false
validatePIN('-1234'); // false
validatePIN('-34+'); // false
