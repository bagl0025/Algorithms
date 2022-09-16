// Write a function that takes in an array of digits representing a non negative integer and add one to it. The digits are arranged such that the most significant digits are on the left and each element in the array contains a single digit
// Return the new array
// Solve without joining the digits array and modify the original array in place
var digits = [9, 9, 9, 0];

var plusOne = function (digits) {
  var l = digits.length - 1;
  if (digits.length === 0) {
    digits[0] = 1;
    console.log(digits);
    return digits;
  } else if (digits[l] != 9) {
    digits[l] += 1;
  } else if (digits[l] === 9) {
    for (i = l; i >= 0; i--) {
      digits[i] = 0;
      if (digits[i - 1] != 9 && i != 0) {
        digits[i - 1] += 1;
        break;
      } else if (i === 0) {
        digits.unshift(1);
      }
    }
  }
  console.log(digits);
  return digits;
};
plusOne(digits);
