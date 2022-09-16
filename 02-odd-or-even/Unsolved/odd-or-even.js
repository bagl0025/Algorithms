// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function (num) {
  if (num % 2 === 0) {
    console.log("even");
    return "even";
  } else {
    console.log("odd");
    return "odd";
  }
};
oddOrEven(5);
