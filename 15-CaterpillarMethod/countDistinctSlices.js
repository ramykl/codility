// https://app.codility.com/programmers/lessons/15-caterpillar_method/count_distinct_slices/
// results - https://app.codility.com/demo/results/trainingSPUMYF-RMW/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(M, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (M < 1 || A.length < 2) {
    return 1;
  }

  const LIMIT = 1000000000;
  let count = 0;
  let start = 0;
  let lastPos = [];

  for (let i = 0; i <= M; i++) {
    lastPos[i] = -1;
  }

  for (let i = 0; i < A.length && count <= LIMIT; i++) {
    const item = A[i];
    // console.log('-> i, item, start, count, lastPos:', i, item, start, count, lastPos)

    if (lastPos[item] + 1 > start) {
      start = lastPos[item] + 1;
    }
    lastPos[item] = i;
    count += i - start + 1;
  }

  return count > LIMIT ? LIMIT : count;
}
