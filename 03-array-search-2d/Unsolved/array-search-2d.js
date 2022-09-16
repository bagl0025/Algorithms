// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function (arr) {
  var r = arr.length;
  var c = arr[0].length;
  var total = 0;
  for (i = 0; i < r; i++) {
    for (j = 0; j < c; j++) {
      if (arr[i][j] === 'X') {
        total += 1;
      }
    }
  }
  console.log(total);
  return total;
};
