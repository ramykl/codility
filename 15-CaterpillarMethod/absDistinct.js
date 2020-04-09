// https://app.codility.com/programmers/lessons/15-caterpillar_method/abs_distinct/
// results - https://app.codility.com/demo/results/training4BZB4N-X4A/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 1) {
    return 1;
  }

  let left = 0;
  let right = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 0) {
      left = i;
      right = i;
      break;
    } else {
      A[i] *= -1;
    }
  }

  let lastVal = A[left];
  let nextVal = lastVal;
  let count = 1;
  while (left >= 0 && right < A.length) {
    if (A[left] !== A[right] && lastVal !== nextVal) {
      count++;
    }

    if (left > 0 && A[left] < A[right]) {
      lastVal = A[left];
      left--;
      nextVal = A[left];
    } else if (right < A.length - 1 && A[right] < A[left]) {
      lastVal = A[right];
      right++;
      nextVal = A[right];
    } else if (left > 0) {
      lastVal = A[left];
      left--;
      nextVal = A[left];
    } else if (right < A.length - 1) {
      lastVal = A[right];
      right++;
      nextVal = A[right];
    } else {
      break;
    }
  }

  return count;
}
