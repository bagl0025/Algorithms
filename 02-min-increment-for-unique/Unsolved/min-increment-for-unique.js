// Write a function to take an array of integers and return the minimum number of increments required across the array to ensure that every number is unique
// var arr = [3, 2, 1, 2, 1, 7];
// var arr = [1, 2, 2];
const minIncrement = function (nums) {
  var count = 0;
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i + 1] += 1;
      count += 1;
      nums.sort((a, b) => a - b);
      i--;
      //   console.log(arr);
    }
  }
  console.log(count);
  return count;
};
// minIncrement(arr);
