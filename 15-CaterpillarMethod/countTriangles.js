// https://app.codility.com/programmers/lessons/15-caterpillar_method/count_triangles/
// results - https://app.codility.com/demo/results/training986YYW-HMR/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 3) {
      return 0;
  }
  
  A.sort((a, b) => a - b);
  let count = 0;
  for (let left = 0; left < A.length - 2; left++) {
      let mid = left + 1;
      let right = mid + 1;
      
      while (mid < A.length -1) {
          if (right < A.length && A[left] + A[mid] > A[right]) {
              right++;
          } else {
              count += right - mid - 1;
              mid++;
          }
      }
  }
  return count;
}