// Write a function that takes in a Roman Numeral string and returns its integer form
var str = "XVII";
var romanToInt = function (str) {
  var sum = [];
  const dict = [
    "I",
    1,
    "V",
    5,
    "X",
    10,
    "L",
    50,
    "C",
    100,
    "D",
    500,
    "M",
    1000,
  ];
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < dict.length; j++) {
      if (str[i] === dict[j]) {
        sum.push(dict[j + 1]);
      }
    }
  }
  console.log(sum);
  var tsum = 0;
  console.log(tsum, "1");

  for (i = 0; i < sum.length; i++) {
    if (sum[i] < sum[i + 1]) {
      tsum -= sum[i];
      console.log(tsum, "2");
    } else {
      tsum += sum[i];
      console.log(tsum, "3");
    }
  }

  console.log(tsum);
  return tsum;
};
romanToInt(str);
