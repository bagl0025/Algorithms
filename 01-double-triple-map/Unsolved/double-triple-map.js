// Write code to create a function that accepts an array of numbers and returns a new array that corresponds to the original array
// If a element in the original array is even, the element at the same index in the new array should be double the original element
// If an element in the original array is odd, the element at the same index of the new array should be triple the original element

var doubleTripleMap = function (arr) {
  var a = arr.map(function (x) {
    if (x % 2 === 0) {
      console.log(x, x * 2);

      return (x = x * 2);
    } else if (x % 2 != 0) {
      console.log(x, x * 3);

      return (x = x * 3);
    }
  });
  console.log(a);
  return a;
};
