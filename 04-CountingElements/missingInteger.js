// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
// results - https://app.codility.com/demo/results/trainingC8TMF7-FFG/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let resultArray = [0];
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 0 && typeof resultArray[A[i]] == "undefined") {
      resultArray[A[i]] = i;
    }
  }
  let i;
  for (i = 0; i < resultArray.length; i++) {
    if (typeof resultArray[i] == "undefined") {
      break;
    }
  }
  return i;
}
