// https://app.codility.com/programmers/lessons/14-binary_search_algorithm/nailing_planks/
// results - https://app.codility.com/demo/results/training8FB54J-RMS/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, C) {
  // write your code in JavaScript (Node.js 8.9.4)
  let maxB = Math.max(...B);
  let beg = 0;
  let end = C.length;
  let lastPossible = -1;

  if (end === 1) {
    if (A[0] <= C[0] && B[0] >= C[0]) {
      return 1;
    } else {
      return -1;
    }
  }

  const totalNailsInitial = Array.from({ length: maxB + 1 }, () => 0);

  while (beg <= end) {
    let mid = Math.round((beg + end) / 2);

    let totalNails = totalNailsInitial.slice();

    for (let i = 0; i < mid; i++) {
      totalNails[C[i]] = 1;
    }

    for (let i = 1; i < maxB + 1; i++) {
      totalNails[i] += totalNails[i - 1];
    }
    // console.log('-> beg, end, mid, nails:', beg, end, mid, totalNails)
    let result = checkNailed(A, B, totalNails);
    if (result) {
      lastPossible = mid;
      if (end === mid) {
        break;
      }
      end = mid;
    } else {
      beg = mid;
    }
  }
  return lastPossible;
}

function checkNailed(A, B, totalNails) {
  for (let i = 0; i < A.length; i++) {
    if (totalNails[A[i] - 1] === totalNails[B[i]]) {
      return false;
    }
  }
  return true;
}
