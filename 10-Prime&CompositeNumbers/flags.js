// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/
// results - https://app.codility.com/demo/results/trainingBPW263-2GT/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let count = 0;
  let peaks = [0];
  let next = [0];

  peaks[A.length - 1] = 0;
  next[A.length - 1] = -1;

  for (let i = A.length - 1; i > 1; i--) {
    peaks[i - 1] = 0;
    if (A[i - 1] > A[i - 2] && A[i - 1] > A[i]) {
      peaks[i - 1] = 1;
      count++;
    }

    if (peaks[i] === 1) {
      next[i - 1] = i;
    } else {
      next[i - 1] = next[i];
    }
  }

  if (next.length > 1) {
    if (peaks[1] === 1) {
      next[0] = 1;
    } else {
      next[0] = next[1];
    }
  }

  if (count < 2) {
    return count;
  }

  const max = Math.min(count, parseInt(Math.sqrt(A.length))) + 1;

  for (let i = max; i > 0; i--) {
    let tally = 1;
    let base = next[0];
    let j = next[base];

    while (j < peaks.length && j > 0) {
      if (j - base >= i) {
        tally++;
        base = j;
        j = next[base];
      } else {
        j = next[j];
      }
    }
    if (tally >= i) {
      return i;
    }
  }
  return 0;
}
