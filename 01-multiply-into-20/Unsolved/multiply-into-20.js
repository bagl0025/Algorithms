var arr = [3, 4, 5, 7, 9];
const multiplyInto20 = function (arr) {
  var yes = 0;

  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] * arr[j] === 20) {
        yes = 1;
      }
    }
  }
  if (yes === 1) {
    return true;
  }
  return false;
};
multiplyInto20(arr);
