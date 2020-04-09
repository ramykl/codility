// https://app.codility.com/programmers/lessons/6-sorting/triangle/
// results - https://app.codility.com/demo/results/trainingKBFVRP-P7A/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 3) {
    return 0;
  }

  A.sort((a, b) => a - b);
  let triangular;
  for (let i = 2; i < A.length; i++) {
    let val0 = A[i];
    let val1 = A[i - 1];
    let val2 = A[i - 2];
    let sum01 = val0 + val1;
    let sum02 = val0 + val2;
    let sum12 = val1 + val2;
    if (sum01 > val2 && sum02 > val1 && sum12 > val0) {
      return 1;
    }
  }
  return 0;
}
