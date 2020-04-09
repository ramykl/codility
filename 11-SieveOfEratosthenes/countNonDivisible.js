// https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_non_divisible/
// results - https://app.codility.com/demo/results/trainingWTK9H2-CHU/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const max = Math.max(...A);
  let divisible = [];
  let count = [];

  // set divisible and count to default value up to max
  for (let i = 0; i <= max; i++) {
    divisible[i] = false;
    count[i] = 0;
  }

  // marking if value exists and counting how many times
  for (let i = 0; i < A.length; i++) {
    divisible[A[i]] = true;
    count[A[i]]++;
  }

  for (let val of A) {
    for (let k = 2; k * val <= max; k++) {
      // checking for products of val exist in A and counting them
      if (divisible[val * k]) {
        count[val * k]++;
      }
    }
  }

  let answer = [];
  for (let val of A) {
    answer.push(A.length - count[val]);
  }
  return answer;
}
