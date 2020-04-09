// https://app.codility.com/programmers/lessons/90-tasks_from_indeed_prime_2015_challenge/slalom_skiing/
// results - https://app.codility.com/demo/results/training5ZQKUV-66Z/
// needs optimisation

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let multiverse = [];
  let N = A.length;
  for (let point of A) {
    multiverse.push((N + 1) * 2 + point);
    multiverse.push((N + 1) * 2 - point);
    multiverse.push(point);
  }

  smallEnd = Array.from({ length: multiverse.length + 1 }, () => -1);
  let longest = 0;
  for (let i = 0; i < multiverse.length; i++) {
    let start = 0;
    let end = longest;
    while (start <= end) {
      mid = parseInt((start + end) / 2);
      if (multiverse[i] < smallEnd[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    if (smallEnd[start] === -1) {
      smallEnd[start] = multiverse[i];
      longest++;
    } else {
      smallEnd[start] = Math.min(smallEnd[start], multiverse[i]);
    }
  }
  return longest;
}
