// https://app.codility.com/programmers/lessons/99-future_training/array_inversion_count/
// results - https://app.codility.com/demo/results/trainingFNXB4Y-GMH/
// inspired by https://www.geeksforgeeks.org/counting-inversions/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  return mergeSortAndCount(A, 0, A.length - 1)
}

function mergeSortAndCount(A, start, end) {
  let count = 0;
  
  if (start < end) {
      let mid = parseInt((start + end) / 2);
      count += mergeSortAndCount(A, start, mid);
      count += mergeSortAndCount(A, mid + 1, end);
      count += mergeAndCount(A, start, mid, end);
      if (count > 1000000000) {
          return -1;
      }
  }
  return count;
}

function mergeAndCount(A, start, mid, end) {
  let left = A.slice(start, mid + 1);
  let right = A.slice(mid + 1, end + 1);
  
  let i = 0;
  let j = 0;
  let k = start;
  let swaps = 0;
  while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
          A[k++] = left[i++];
      } else {
          A[k++] = right[j++];
          swaps += (mid + 1) - (start + i)
      }
  }
  while (i < left.length) {
      A[k++] = left[i++];
  }
  while (j < right.length) {
      A[k++] = right[j++]
  }
  
  return swaps;
}