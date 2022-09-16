// Write a function that takes in a string and and an offset and returns a new string with each character moved by the offset

var str = "Ymj Vznhp Gwtbs Ktc Ozruji Tajw Ymj Qfed Itl";
//The Quick Brown Fox Jumped Over The Lazy Dog";
var offset = -31;
//uppercase 65-90
//lower 97-122
//space 32
var caesarCipher = function (str, offset) {
  var code = [];
  var shifted = [];
  offset = offset % 26;
  for (i = 0; i < str.length; i++) {
    code[i] = str.charCodeAt(i);
    if (code[i] >= 65 && code[i] <= 90) {
      //upper 65-90
      code[i] = code[i] + offset;
      if (code[i] > 90) {
        code[i] = code[i] - 90 + 64;
      } else if (code[i] < 64) {
        code[i] = 90 - (64 - code[i]);
      }
    } else if (code[i] > 96 && code[i] < 123) {
      //lower 97-122
      code[i] = code[i] + offset;
      if (code[i] > 122) {
        code[i] = code[i] - 122 + 96;
      } else if (code[i] < 97) {
        code[i] = 122 - (96 - code[i]);
      }
    }
  }
  for (i = 0; i < code.length; i++) {
    shifted[i] = String.fromCharCode(code[i]);
  }
  var shifted2 = shifted.join("");
  return shifted2;
};
caesarCipher(str, offset);
