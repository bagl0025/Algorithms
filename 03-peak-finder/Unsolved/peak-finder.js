var nums = [1, 3, 7, 4, 3, 2, 1];

const peakFinder = function (nums) {
  // TODO: Write a function that takes an array of integers containing exactly one peak.
  // A peak is defined as a location in the array where the value is greater than every number to the left and every number to the right. Return the value found at the array's peak
  var peak = Math.max(...nums);
  console.log(peak);
  return peak;
};

peakFinder(nums);
