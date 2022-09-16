// TODO: Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods
// var arr = [5, 6, 7];
// var target = 6;

var linearSearch = function (arr, target) {
  var found = 0;
  if (arr.length === 0) {
    return -1;
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      found = i;
    }
  }
  if (found === 0) {
    return -1;
  } else {
    return found;
  }
};
// linearSearch(arr, target);
