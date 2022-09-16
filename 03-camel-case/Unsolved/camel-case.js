// Write code to create a function that accepts a string and returns the string in camelCase
var str = "let the force flow through you";
// "letTheForceFlowThroughYou"
var camelCase = function (str) {
  var str2 = [];
  for (i = 1; i < str.length; i++) {
    str2[0] = str[0].toLowerCase();
    if (str[i] === " ") {
      str2[i] = str[i + 1].toUpperCase();
      i++;
    } else {
      str2[i] = str[i];
    }
  }
  var str3 = str2.join("");
  console.log(str3);
  return str3;
};
camelCase(str);
