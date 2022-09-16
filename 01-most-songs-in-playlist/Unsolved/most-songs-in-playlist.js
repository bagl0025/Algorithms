// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist
var arr = [3, 4, 2, 1, 7, 5, 3];
var mostSongsInPlaylist = function (arr) {
  var sum = 0;
  var songCount = 0;
  arr.sort(function (a, b) {
    return a - b;
  });
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum <= 60) {
      songCount += 1;
      console.log(songCount);
    }
  }
  return songCount;
};
mostSongsInPlaylist(arr);
