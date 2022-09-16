// Write a function that takes two strings and returns true if every word found in the second string is present in the first string. You will be checking for both words and their frequency. Assume you'll need to worry about casing, but the strings won't contain any punctuation. Assume neither string will be empty
var magazine = "hello outside hello world";
var flyer = "hello outside";

var concertFlyer = function (magazine, flyer) {
  var mag = magazine.split(" ");
  var fly = flyer.split(" ");
  var count = 0;
  if (fly.length > mag.length) {
    return false;
  }
  for (i = 0; i < fly.length; i++) {
    var found = 0;
    for (j = 0; j < mag.length; j++) {
      //   console.log(fly[i], mag[j], i, j);

      if (fly[i] === mag[j]) {
        // console.log("m", fly[i], mag[j]);
        found += 1;
        if (found === 1) {
          mag.splice(j, 1);
          count += 1;
          //   console.log(mag);
        }
      }
    }
  }

  if (count === fly.length) {
    console.log(count);
    return true;
  } else return false;
};
concertFlyer(magazine, flyer);
