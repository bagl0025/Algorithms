// Write a function that takes a positive integer and returns true if the integer is an armstrong number, else return false. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number
var isArmstrong = function (num) {
  snum = num.toString();
  var anum = 0;
  for (i = 0; i < snum.length; i++) {
    anum += snum[i] ** snum.length;
    console.log(anum);
  }
  if (anum === num) {
    return true;
  } else {
    return false;
  }
};
