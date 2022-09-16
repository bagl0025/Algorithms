// Write code to return a new string with all of the characters in `str` reversed.
// You may NOT use the built-in reverse method

const reverse = (str) => {
  revstr = [];
  for (i = str.length - 1; i >= 0; i--) {
    // console.log(str[i], i);
    revstr += str[i];
  }
  return revstr;
};

reverse('brian dog cat tac');
console.log('reversed = ', revstr);
