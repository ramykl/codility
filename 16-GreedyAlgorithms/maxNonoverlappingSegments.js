// https://app.codility.com/programmers/lessons/16-greedy_algorithms/max_nonoverlapping_segments/
// results - https://app.codility.com/demo/results/training94QWAN-9SB/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 2) {
    return A.length;
  }
  let count = 1;
  let last = B[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] > last) {
      count++;
      last = B[i];
    }
  }
  return count;
}
