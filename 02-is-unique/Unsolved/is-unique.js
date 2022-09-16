// TODO: Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
  if (arr.length < 2) {
    return true;
  }
  arr.sort(function (a, b) {
    return b - a;
  });
  console.log(arr);
  for (i = 0; i < arr.length - 1; i++) {
    var flag = 1;
    temp = arr[i] - arr[i + 1];
    console.log(temp);
    if (temp === 0) {
      flag = 0;
    }
  }
  if (flag === 0) {
    return false;
  } else {
    return true;
  }
};
