// Write code to merge two sorted arrays into a new sorted array
var arr1 = [1, 2, 3, 15];
var arr2 = [4, 6, 7, 9];
var mergeSorted = function (arr1, arr2) {
  var arr3 = [...arr1, ...arr2];
  arr3.sort((a, b) => a - b);
  console.log(arr3);
  return arr3;
};
mergeSorted(arr1, arr2);
