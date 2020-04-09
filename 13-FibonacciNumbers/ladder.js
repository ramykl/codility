// https://app.codility.com/programmers/lessons/13-fibonacci_numbers/ladder/
// results - https://app.codility.com/demo/results/trainingH9SWV3-C89/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let fibSteps = [1, 1];
  let max = Math.max(...A);
  let maxB = Math.max(...B);
  for (let i = 2; i <= max; i++) {
    fibSteps[i] = (fibSteps[i - 1] + fibSteps[i - 2]) % Math.pow(2, maxB);
  }

  let result = [];
  for (let i = 0; i < A.length; i++) {
    result.push(fibSteps[A[i]] % Math.pow(2, B[i]));
  }
  return result;
}
