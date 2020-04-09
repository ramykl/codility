// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/count_factors/
// results - https://app.codility.com/demo/results/trainingFV4PS4-VNX/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 0;
  let i;
  for (i = 1; i * i < N; i++) {
    if (N % i === 0) {
      count += 2;
    }
  }
  if (i * i === N) {
    count += 1;
  }
  return count;
}
