var str1 = "Helloo";
var str2 = "Hexlo";

const oneEditAway = function (str1, str2) {
  var l1 = str1.length;
  var l2 = str2.length;
  var l3;
  var count = Math.abs(l1 - l2);
  if (Math.abs(l1 - l2) > 1) {
    console.log(false);
    return false;
  }
  if (l1 < l2) {
    l3 = l1;
  } else l3 = l2;
  for (i = 0; i < l3; i++) {
    if (str1[i] != str2[i]) {
      count += 1;
    }
  }
  console.log(count);
  if (count === 1) {
    return true;
  } else return false;
};
oneEditAway(str1, str2);
