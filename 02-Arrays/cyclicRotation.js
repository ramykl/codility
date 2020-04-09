// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
// results - https://app.codility.com/demo/results/trainingZ3X2FF-NTW/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length) {
    let i = 1;
    while (i < K) {
      let last = A.pop();
      A.unshift(last);
      i++;
    }
  }
  return A;
}
