// https://app.codility.com/programmers/lessons/7-stacks_and_queues/fish/
// results - https://app.codility.com/demo/results/trainingDUPF5V-TFP/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let downstream = [];
  let alive = 0;
  for (let i = 0; i < A.length; i++) {
    if (B[i] === 1) {
      downstream.push(i);
    } else if (downstream.length > 0) {
      while (downstream.length > 0) {
        let j = downstream.length - 1;
        if (A[i] > A[downstream[j]]) {
          downstream.pop();
        } else {
          break;
        }
      }
    }
    if (B[i] === 0 && downstream.length === 0) {
      alive++;
    }
  }
  return alive + downstream.length;
}
