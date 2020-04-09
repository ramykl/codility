// https://app.codility.com/programmers/lessons/16-greedy_algorithms/tie_ropes/
// results - https://app.codility.com/demo/results/trainingDXN6WX-WWT/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (K === 1) {
    return A.length;
  }

  let length = 0;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    length += A[i];
    if (length >= K) {
      count++;
      length = 0;
    }
  }
  return count;
}
