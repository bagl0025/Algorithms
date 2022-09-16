// Write code to create a function that accepts two arrays of numbers
// There will be one number common to both arrays
// Return the common number
// You may not use the `indexOf` or `includes` method
// var arrA = [1, 2, 3, 4, 5];
// var arrB = [5, 6, 7, 8];
var commonElement = function (arrA, arrB) {
  for (i = 0; i < arrA.length; i++) {
    for (j = 0; j < arrB.length; j++) {
      if (arrA[i] === arrB[j]) {
        console.log(arrA[i], "bbb");
        return arrA[i];
      }
    }
  }
};

// commonElement(arrA, arrB);
