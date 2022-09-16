// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome
var str = "abcba";
var isPalindrome = function (str) {
  var revstr = str.split("").reverse().join("");
  console.log("str", str, "rev", revstr);
  if (str === revstr) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};

isPalindrome(str);
