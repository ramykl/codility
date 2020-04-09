// https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/
// results - https://app.codility.com/demo/results/trainingV7XQMP-JSQ/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (S.length === 0) {
    return 1;
  } else if (S.length % 2 === 1) {
    return 0;
  }
  let A = S.split("");
  let open = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === "(") {
      open++;
    } else {
      open--;
    }
    if (open === -1) {
      return 0;
    }
  }
  return open === 0 ? 1 : 0;
}
