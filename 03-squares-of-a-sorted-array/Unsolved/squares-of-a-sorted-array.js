// Write code to create a function that accepts an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order
arr = [-4, -1, 0, 3, 10];
var sortedSquares = function (arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  return arr;
};
sortedSquares(arr);
