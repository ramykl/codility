// https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
// results - https://app.codility.com/demo/results/training9EANXZ-Q7B/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = A % K === 0 ? 1 : 0;
  const div1 = Math.floor(A / K);
  const div2 = Math.floor(B / K);
  return A !== B ? count + div2 - div1 : count;
}