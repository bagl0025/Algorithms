// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method
var num = 25;
var isPerfectSquare = function (num) {
  if (num === 1 || num === 0) {
    return true;
  }
  for (i = 2; i <= num / 2; i++) {
    if (num % (i * i) === 0) {
      console.log(i);
      return true;
    }
  }
  return false;
};
isPerfectSquare(num);
