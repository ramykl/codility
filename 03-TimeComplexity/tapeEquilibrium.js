// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
// results - https://app.codility.com/demo/results/trainingHMJHCT-9BX/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)    let lower = [];
  let upper = [];
  for (let i = 0; i < A.length; i++) {
    let iRev = A.length - 1 - i;
    if (i === 0) {
      lower[i] = 0;
      upper[iRev] = A[iRev];
    } else {
      lower[i] = lower[i - 1] + A[i - 1];
      upper[iRev] = upper[iRev + 1] + A[iRev];
    }
  }
  let result = null;
  for (let i = 1; i < lower.length; i++) {
    let diff = Math.abs(lower[i] - upper[i]);
    if (diff < result || result === null) {
      result = diff;
    }
  }
  return result;
}
