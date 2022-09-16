// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
  if (num === 0) {
    return 1;
  } else {
    var fnum = 1;
    for (i = num; i > 1; i--) {
      fnum = fnum * i;
      console.log('i', i, 'fnum', fnum, 'num', num);
    }
    return fnum;
  }
};
