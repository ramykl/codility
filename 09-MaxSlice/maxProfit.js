// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/
// results - https://app.codility.com/demo/results/training2SDP6J-GFJ/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxEnd = 0;
  let maxSlice = 0;
  let curMinVal = A[0]
  for (let i = 1; i < A.length; i++) {
      maxEnd = Math.max(0, A[i] - curMinVal);
      maxSlice = Math.max(maxSlice, maxEnd);
      if (A[i] < curMinVal) {
          curMinVal = A[i];
      }
  }
  return maxSlice;
}