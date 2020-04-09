// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
// results - https://app.codility.com/demo/results/trainingDTWD3H-NMY/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxEnd = 0;
  let maxSlice = -2147483648;
  for (let val of A) {
    maxEnd = Math.max(val, maxEnd + val);
    maxSlice = Math.max(maxSlice, maxEnd);
  }
  return maxSlice;
}
