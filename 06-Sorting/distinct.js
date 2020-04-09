// https://app.codility.com/programmers/lessons/6-sorting/distinct/
// results - https://app.codility.com/demo/results/trainingS7EH4X-2E8/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length) {
      A.sort((a,b) => a-b);
      let count = 1;
      for (let i = 1; i < A.length; i++) {
          if (A[i] !== A[i-1]) {
              count++;
          }
      }
      return count;
  }
  return 0;
}
