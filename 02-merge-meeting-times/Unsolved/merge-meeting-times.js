// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks
// var arr = [
//   [5, 8],
//   [1, 4],
//   [6, 8],
// ];
var arr = [
  [1, 10],
  [2, 5],
  [6, 8],
  [9, 10],
  [10, 12],
];

var mergeMeetingTimes = function (arr) {
  arr.sort(function (a, b) {
    return a[0] - b[0];
  });
  console.log("arr", arr);
  meeting = [];
  meeting.push([arr[0][0], arr[0][1]]);
  var s1 = arr[0][0];
  var e1 = arr[0][1];
  var s2;
  var e2;
  for (i = 1; i < arr.length; i++) {
    s2 = arr[i][0];
    e2 = arr[i][1];
    console.log(s2, e2, s1, e1);
    if (s2 >= s1 && e2 <= e1) {
      console.log("next meeting covered by first");
    } else if (s2 >= s1 && s2 <= e1 && e2 > e1) {
      console.log("2nd meeting extends first");
      meeting.pop();
      meeting.push([s1, e2]);
    } else {
      meeting.push([s2, e2]);
      console.log(i, "no overlap");
      s1 = s2;
      e1 = e2;
    }
  }
  console.log(meeting);
  return meeting;
};
mergeMeetingTimes(arr);
