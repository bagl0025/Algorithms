// Write code to return the the number of vowels in `str`
var str = "AaxxcfeO";
var vowelCount = function (str) {
  var vowels = "aeiou";
  var str2 = str.toLowerCase();
  var count = 0;
  for (i = 0; i < vowels.length; i++) {
    for (j = 0; j < str2.length; j++) {
      //   console.log(vowels[i], str2[j]);
      if (vowels[i] === str2[j]) {
        count += 1;
      }
    }
  }
  console.log(count);
  return count;
};
vowelCount(str);
