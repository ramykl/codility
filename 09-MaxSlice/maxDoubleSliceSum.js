// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/
// results - https://app.codility.com/demo/results/trainingGQRQUC-3VT/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 4) {
    return 0;
  }
  let sumLeft = [];
  let sumRight = [];
  let maxSumLeft = 0;
  let maxSumRight = 0;

  for (let i = 0; i < A.length; i++) {
    let iRev = A.length - 1 - i;
    if (i === 0 || i === 1) {
      sumLeft[i] = 0;
      sumRight[iRev] = 0;
    } else {
      sumLeft[i] = Math.max(sumLeft[i - 1] + A[i - 1], A[i - 1], 0);
      sumRight[iRev] = Math.max(
        sumRight[iRev + 1] + A[iRev + 1],
        A[iRev + 1],
        0
      );
    }
  }
  for (let i = 1; i < A.length - 1; i++) {
    if (sumLeft[i] + sumRight[i] > maxSumLeft + maxSumRight) {
      maxSumLeft = sumLeft[i];
      maxSumRight = sumRight[i];
    }
  }
  return maxSumLeft + maxSumRight;
}
