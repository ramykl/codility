// https://app.codility.com/programmers/lessons/17-dynamic_programming/min_abs_sum/
// results - https://app.codility.com/demo/results/trainingYQQ4PK-DXH/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 0) {
    return 0;
  }
  if (A.length === 1) {
    return Math.abs(A[0]);
  }

  A.sort((a, b) => Math.abs(a) - Math.abs(b));
  let max = Math.abs(A[A.length - 1]);
  let count = Array.from({ length: max + 1 }, () => 0);
  let total = 0;
  for (let i = 0; i < A.length; i++) {
    A[i] = Math.abs(A[i]);
    count[A[i]]++;
    total += A[i];
  }

  let dp = Array.from({ length: total + 1 }, () => -1);
  dp[0] = 0;

  const target = total / 2;
  let minAbsSum = total;
  // console.log('-> total, target, count:', total, target, count)
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) {
      for (let j = 0; j < dp.length; j++) {
        // console.log('i, j, dpj:', i, j, dp[j])
        if (dp[j] >= 0) {
          dp[j] = count[i];
        } else if (j >= i && dp[j - i] > 0) {
          dp[j] = dp[j - i] - 1;
        }
        // console.log('new dpj:', dp[j])
        if (dp[j] >= 0) {
          if (j === target) {
            return 0;
          } else {
            minAbsSum = Math.min(minAbsSum, Math.abs(total - 2 * j));
          }
        }
      }
    }
  }
  return minAbsSum;
}
