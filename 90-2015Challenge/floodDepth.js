// https://app.codility.com/programmers/lessons/90-tasks_from_indeed_prime_2015_challenge/flood_depth/
// results - https://app.codility.com/demo/results/trainingNDVWCW-478/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 3) {
      return 0;
  }
  let cMax = A[0];
  let cMin = A[0];
  let maxDepth = 0;
  for (let i = 1; i < A.length; i++) {
      if (A[i] >= cMax) {
          maxDepth = Math.max(maxDepth, cMax - cMin);
          cMax = A[i];
          cMin = A[i];
      } else if (A[i] < cMin) {
          cMin = A[i];
      } else {
          maxDepth = Math.max(maxDepth, A[i] - cMin);
      }
  }
  return maxDepth;
}