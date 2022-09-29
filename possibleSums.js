var coins = [10, 50, 100];
var quantity = [1, 2, 1];
var arr = [];
for (i = 0; i < coins.length; i++) {
  //creates new array of coins
  arr.push(Array(quantity[i]).fill(coins[i]));
}
arr = arr.flat();
// console.log("arr", arr);
const combinations = (arr, num) => {
  // num is number of elements to sum
  const res = [];
  let temp,
    i,
    j,
    max = 1 << arr.length; // uses bit shifting to produce max combinations
  // 1 << 4 = 16, 1 << 3, 8, etc
  for (i = 0; i < max; i++) {
    temp = [];
    for (j = 0; j < arr.length; j++) {
      if (i & (1 << j)) {
        /// ????????????
        //bit shitfing to check for non zero??
        temp.push(arr[j]);
      }
    }
    if (temp.length === num) {
      res.push(
        temp.reduce(function (a, b) {
          return a + b;
        })
      );
    }
  }
  return res;
};
var result = [];
for (i = 1; i < arr.length + 1; i++) {
  result.push(combinations(arr, i));
}
result = new Set(result.flat());
// console.log(result, result.size);
return x.size;

// drop repeated function call
