// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1
var words = ["great", "ostrich", "panther", "ruby", "chosen", "feathers"];

var rotationPoint = function (words) {
  for (i = 0; i < words.length; i++) {
    if (words[i + 1] < words[i]) {
      console.log(words[i + 1], i + 1);
      return i + 1;
    }
  }
  return -1;
};
rotationPoint(words);
