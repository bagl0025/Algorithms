// Write code to create a function that accepts a string containing only 0s and 1s
// Return true if there are an equal number of 0s and 1s
// Else return false

var zeroesAndOnes = function (str) {
  var a = str.split('');
  var onesize = 0;
  console.log(a);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === '1') {
      onesize += 1;
    }
    console.log(onesize);
  }
  console.log('bb', a.length / 2);

  if (onesize === a.length / 2) {
    return true;
  } else {
    return false;
  }
};
