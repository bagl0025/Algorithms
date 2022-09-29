var a = "abc"; //substring
var b = "abcdfecbaabc"; //string

// if object size < substing return 0
var characterCount = function (a, b) {
  //   charsA = {};
  charsB = {};

  for (i = 0; i < b.length; i++) {
    //turn string into object
    if (b[i] in charsB) {
      charsB[b[i]]++;
    } else {
      charsB[b[i]] = 1;
    }
  }
  var counts = [];
  for (i = 0; i < a.length; i++) {
    //loop through substring finding how many times it appears in substring
    counts.push(charsB[a[i]]);
    //max number of substrings is the least number of times one of the characters appears
    var max = Math.min(...counts);
  }
  console.log(counts);

  console.log("max", max);
  //   var intAB = Object.entries(charsA).filter({}.hasOwnProperty.bind(charsB));
  return max;
};
characterCount(a, b);
