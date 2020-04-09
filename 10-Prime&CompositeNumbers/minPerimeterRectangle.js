// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/
// results - https://app.codility.com/demo/results/trainingCBKYNW-XY6/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let i;
  let minSum = 1000000000;
  for (i = 1; i * i < N; i++) {
    if (N % i === 0) {
      minSum = Math.min(minSum, i + N / i);
    }
  }
  if (i * i === N) {
    minSum = i * 2;
  }
  return minSum * 2;
}
