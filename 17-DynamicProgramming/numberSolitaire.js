// https://app.codility.com/programmers/lessons/17-dynamic_programming/number_solitaire/
// results - https://app.codility.com/demo/results/trainingTS4QDV-34X/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let dp = Array.from({ length: A.length }, () => -Infinity);
  dp[0] = A[0];

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j <= i + 6 && j < A.length; j++) {
      // console.log('-> i, j, dpi, aj, dpj:', i, j, dp[i], A[j], dp[j])
      dp[j] = Math.max(dp[j], dp[i] + A[j]);
    }
  }

  return dp[dp.length - 1];
}
