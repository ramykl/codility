// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/peaks/
// results - https://app.codility.com/demo/results/trainingHFJ33K-RYQ/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  // Can't have a peak in array length smaller than 3
  if (A.length < 3) {
    return 0;
  }

  // find peaks
  let peaks = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  // Can't have more groups than peaks
  if (peaks.length < 2) {
    return peaks.length;
  }

  let maxSize = 0;
  for (let i = 3; i <= A.length; i++) {
    if (A.length % i === 0) {
      const blockCount = A.length / i;
      let groupsHavePeak = 0;
      for (let j = 0; j < peaks.length; j++) {
        if (parseInt(peaks[j] / i) === groupsHavePeak) {
          groupsHavePeak++;
        }
      }

      if (groupsHavePeak === blockCount) {
        maxSize = Math.max(maxSize, blockCount);
      }
    }
  }
  return maxSize;
}
