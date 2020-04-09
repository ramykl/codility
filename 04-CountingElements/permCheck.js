// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
// results - https://app.codility.com/demo/results/trainingK2PZ9F-XK2/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let resultArray = [0];
  for (let i = 0; i < A.length; i++) {
    if (A[i] > A.length || typeof resultArray[A[i]] !== "undefined") {
      return 0;
    } else {
      resultArray[A[i]] = true;
    }
  }
  for (let i = 0; i < resultArray.length; i++) {
    if (typeof resultArray[i] == "undefined") {
      return 0;
    }
  }
  return 1;
}
