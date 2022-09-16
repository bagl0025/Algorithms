// Write a function to take a string and return true if it contains valid sets of matching brackets, else return false
var str = "{ } [ ( [] ) ] (";

const validBrackets = function (str) {
  var stack = [];
  for (i = 0; i < str.length; i++) {
    if (str[i] === "{" || str[i] === "(" || str[i] === "[") {
      stack.push(str[i]);
    } else if (str[i] === "}" || str[i] === ")" || str[i] === "]") {
      if (str[i] === "}" && stack[stack.length - 1] === "{") {
        stack.pop(stack.length - 1);
      } else if (str[i] === ")" && stack[stack.length - 1] === "(") {
        stack.pop(stack.length - 1);
      } else if (str[i] === "]" && stack[stack.length - 1] === "[") {
        stack.pop(stack.length - 1);
      }
    }
  }
  if (stack.length === 0) {
    console.log("true");
    return true;
  } else return false;
};
validBrackets(str);
