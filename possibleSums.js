var coins = [10, 50, 100];
var quantity = [1, 2, 1];
// var coins = [1, 2];
// var quantity = [50000, 2];
var arr = [5, 10, 15];
// for (i = 0; i < coins.length; i++) {
//   //creates new array of coins
//   arr.push(Array(quantity[i]).fill(coins[i]));
// }
// arr = arr.flat();
// console.log("arr", arr);
const combinations = (arr) => {
  // const combinations = (arr,num) => {
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
      // console.log(temp, "temp1");

      ///////////////////////////////////////////////
      //need to understand ans fix this if state ment//
      /// running too many timez
      ///////////////////////

      if (i & (1 << j)) {
        //bit shitfing to check for non zero??
        temp.push(arr[j]);
        console.log(temp, "temp", i, "i");
        res.push(
          temp.reduce(function (a, b) {
            return a + b;
          })
        );
      }
    }
    // if (temp.length === num) {
    //   res.push(
    //     temp.reduce(function (a, b) {
    //       return a + b;
    //     })
    //   );
    //   console.log(temp, "if len=num");
    // }
  }
  return res;
};
var result = [];
// for (i = 1; i < arr.length + 1; i++) {
result.push(combinations(arr));
// }
result = new Set(result.flat());
console.log(result, result.size);

// private void arraySumPermutation(int value ,int[] arr){
//   int N = arr.length;
//   for(int i=0;i<1<<N;i++){
//       int sum = 0;
//       for(int j=0;j<N;j++){

//           if((i & 1<<j)>0){
//               iCount++;
//               sum += arr[j];
//               //S.O.P(sum);
//           }
//       }

//   }
// }
