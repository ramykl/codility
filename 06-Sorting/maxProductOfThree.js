// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
// results - https://app.codility.com/demo/results/trainingG8WQPN-XMW/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort((a,b) => a-b);
  let bottom = A[0] * A[1] * A[A.length-1];
  let top = A[A.length-3] * A[A.length-2] * A[A.length-1];
  return Math.max(bottom, top);
}
