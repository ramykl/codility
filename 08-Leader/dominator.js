// https://app.codility.com/programmers/lessons/8-leader/dominator/
// results - https://app.codility.com/demo/results/trainingHAY9PR-2SR/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let size = 0;
  let value = null;
  for (let i = 0; i < A.length; i++) {
    if (size === 0) {
      size++;
      value = A[i];
    } else {
      if (value !== A[i]) {
        size--;
      } else {
        size++;
      }
    }
  }
  let candidate = -1;
  if (size > 0) {
    candidate = value;
  }
  let count = 0;
  let index = null;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === candidate) {
      count++;
      if (index === null) {
        index = i;
      }
    }
  }
  if (count > A.length / 2.0) {
    return index;
  }
  return -1;
}
