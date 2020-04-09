// https://app.codility.com/programmers/lessons/14-binary_search_algorithm/min_max_division/
// results - https://app.codility.com/demo/results/trainingSZ7XJG-C3F/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, M, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let min = 0;
  let sum = 0;

  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    min = Math.max(min, A[i]);
  }

  if (K === 1) {
    return sum;
  } else if (K >= A.length) {
    return min;
  }

  let mid = 0;
  while (min <= sum) {
    let temp = mid;
    mid = parseInt((min + sum) / 2);
    if (mid === temp) {
      break;
    }
    let blocks = blocksNeeded(A, mid);
    // console.log('-> sum, min, mid, blocks, K:', sum, min, mid, blocks, K)

    if (blocks > K) {
      min = mid + 1;
    } else {
      sum = mid;
    }
  }
  return sum;
}

function blocksNeeded(A, x) {
  let count = 1;
  let sum = A[0];

  for (let j = 1; j < A.length; j++) {
    if (sum + A[j] > x) {
      sum = A[j];
      count++;
    } else {
      sum += A[j];
    }
  }
  return count;
}
