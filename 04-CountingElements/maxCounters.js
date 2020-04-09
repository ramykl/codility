// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
// results - https://app.codility.com/demo/results/training3G3RN6-PBB/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = Array.from({ length: N }, () => 0);
  let max = 0;
  let min = 0;

  A.forEach(val => {
    if (val > N) {
      min = max;
    } else {
      result[val - 1] = Math.max(result[val - 1], min) + 1;
      max = Math.max(result[val - 1], max);
    }
  });
  for (let i = 0; i < result.length; i++) {
    result[i] = Math.max(result[i], min);
  }

  return result;
}
