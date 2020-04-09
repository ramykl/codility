// https://app.codility.com/programmers/lessons/15-caterpillar_method/min_abs_sum_of_two/
// results - https://app.codility.com/demo/results/trainingGB4WAX-2HU/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length === 1) {
    return Math.abs(A[0] * 2);
  }

  A.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      return 0;
    } else if (A[i] > 0) {
      left = i;
      right = i;
      break;
    }
  }

  let minSum = 2000000000;
  while (left >= 0 && right < A.length) {
    let sum = A[left] + A[right];
    minSum = Math.min(
      minSum,
      Math.abs(sum),
      Math.abs(A[left] * 2),
      Math.abs(A[right] * 2)
    );

    if (sum === 0) {
      return 0;
    } else if (sum > 0 && left > 0) {
      left--;
    } else if (sum < 0 && right < A.length - 1) {
      right++;
    } else if (left > 0) {
      left--;
    } else {
      right++;
    }
  }
  return minSum;
}
