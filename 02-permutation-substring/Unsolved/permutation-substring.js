// Write code to create a function that accepts two strings
// Return true if the second string is a substring of any permutation of the first string
// Else return false
var str = "smapnuer";
var sub = "superx";

var permutationSubstring = function (str, sub) {
  var found = 0;
  var needed = sub.length;
  //need to check both strings for whitespace
  const spaces1 = str.split(" ").length - 1;
  const spaces2 = sub.split(" ").length - 1;
  if (spaces2 > spaces1) {
    return false;
  }
  // if both have space it's ok.
  for (i = 0; i < needed; i++) {
    for (j = 0; j < str.length; j++) {
      if (sub[i] === str[j]) {
        found += 1;
        if (found === needed) {
          console.log("true");
          return true;
        }
      }
    }
  }
  console.log("false");
  return false;
};
permutationSubstring(str, sub);
