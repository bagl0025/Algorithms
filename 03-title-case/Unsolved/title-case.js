// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized
var str = "a lannister always pays his debts";
// "A Lannister Always Pays His Debts";

var titleCase = function (str) {
  var str2 = [];
  for (i = 0; i < str.length; i++) {
    if (i === 0) {
      str2[i] = str[i].toUpperCase();
    } else if (str[i - 1] === " ") {
      str2[i] = str[i].toUpperCase();
    } else {
      str2[i] = str[i];
    }
  }
  var str3 = str2.join("");
  console.log(str3);
  return str3;
};
titleCase(str);
