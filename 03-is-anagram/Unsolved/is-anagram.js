// TODO: Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function (strA, strB) {
  if (strA.length != strB.length) {
    return false;
  }
  a = strA.split('').sort().join('');
  b = strB.split('').sort().join('');
  console.log(a, b);

  if (a === b) {
    console.log('true');
    return true;
  } else {
    return false;
  }
};
