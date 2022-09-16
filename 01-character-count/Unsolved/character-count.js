// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
  chars = {};
  for (i = 0; i < str.length; i++) {
    if (str[i] in chars) {
      chars[str[i]]++;
    } else {
      chars[str[i]] = 1;
    }
  }
  console.log(chars);
  return chars;
};
