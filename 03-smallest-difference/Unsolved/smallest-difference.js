// Write a function that takes in two sorted arrays and returns a pair of numbers (one from each array) with the smallest difference
var arr1 = [2, 4, 6, 8, 15, 20];
var arr2 = [17, 25, 30, 47];
// [15, 17];
var smallestDifference = function (arr1, arr2) {
  var diff = 9999999;
  var result = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) < diff) {
        diff = Math.abs(arr1[i] - arr2[j]);
        result = [arr1[i], arr2[j]];
      }
    }
  }
  console.log(result);
  return result;
};
smallestDifference(arr1, arr2);
