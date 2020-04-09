// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
// results - https://app.codility.com/demo/results/training2FAAGH-ADU/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let b = N.toString(2);
  let clear = false
  let count = 0;
  let maxCount = 0;
  for (let digit of b) {
      if (digit === '0') {
          count += 1;
      } else {
          if (clear !== false) {
              maxCount = Math.max(maxCount, count);
          } else {
              clear = true
          }
          count = 0;
      }
  }
  return maxCount;
}