// https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
// results - https://app.codility.com/demo/results/training8VQNBA-NTF/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort((a,b) => a-b);
  console.log(A);
  let missing;
  let i = 1;
  for (i = 1; i < A.length+1; i++) {
      console.log('i:', i);
      console.log('A[i-1]', A[i-1])
      if (i !== A[i-1]) {
          missing = i;
          break;
      }
  }
  missing = i;
  return missing
}