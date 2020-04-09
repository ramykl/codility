// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
// results - https://app.codility.com/demo/results/trainingQRCXTS-YNV/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let resultArray = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= X && typeof resultArray[A[i]] == "undefined") {
      resultArray[A[i]] = i;
    }
  }
  if (resultArray.length <= X) {
    return -1;
  }
  let max = Math.max(...resultArray.slice(1));
  return Number.isInteger(max) ? max : -1;
}
