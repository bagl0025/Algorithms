// Write code to create a function that accepts two arrays of numbers
// Return a new array containing the intersecting elements of the arrays
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 5, 6, 7, 8, 9];
var arrayIntersection = function (arr1, arr2) {
  var arr3 = [];

  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr3.push(arr1[i]);
      }
    }
  }
  return arr3;
};

arrayIntersection(arr1, arr2);
