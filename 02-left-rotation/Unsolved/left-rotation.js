// Write a function that takes an array and a positive integer and "rotates" the array to the left by the integer
// Modify the original array rather than returning a new one
// There is no need to return from this function
const arr = [1, 2, 3];
const positions = 2;
const leftRotation = (arr, positions) => {
  if (arr.length > 0) {
    for (i = 0; i < positions; i++) {
      arr.push(arr[0]);
      arr.shift();
    }
  }
};
leftRotation(arr, positions);
