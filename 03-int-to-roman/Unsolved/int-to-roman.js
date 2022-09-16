// Write a function that takes in an integer and returns it as a Roman numeral string
var num = 23;
var intToRoman = function (num) {
  var lookup = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  var roman = "";
  var i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      console.log(i, num, lookup[i]);

      roman += i;
      console.log(roman);
      num -= lookup[i];
      console.log(num);
    }
  }
  return roman;
};

intToRoman(num);
