// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
