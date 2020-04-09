// https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
// results - https://app.codility.com/demo/results/trainingYWMFSJ-UAK/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let tally = [];
  let count = 0;
  let firstZero = false;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0 && firstZero) {
      tally.push(count);
      count = 0;
    } else if (A[i] === 0) {
      count = 0;
      firstZero = true;
    } else {
      count++;
    }
  }
  if (firstZero) {
    tally.push(count);
  }
  // console.log(tally);
  let total = 0;
  for (let i = 0; i < tally.length; i++) {
    total += tally[i] * (i + 1);
  }
  return total > 1000000000 ? -1 : total;
}
