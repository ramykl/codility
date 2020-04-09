// https://app.codility.com/programmers/lessons/92-tasks_from_indeed_prime_2016_college_coders_challenge/socks_laundering/
// results - https://app.codility.com/demo/results/trainingCGKTMW-ZPV/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, C, D) {
  // write your code in JavaScript (Node.js 8.9.4)
  let max = Math.max(...C, ...D);
  let cleanCount = Array.from({ length: max + 1 }, () => 0);
  let dirtyCount = Array.from({ length: max + 1 }, () => 0);
  let pairs = 0;
  for (let i = 0; i < C.length; i++) {
    cleanCount[C[i]]++;
    if (cleanCount[C[i]] === 2) {
      cleanCount[C[i]] = 0;
      pairs++;
    }
  }
  for (let i = 0; i < D.length; i++) {
    dirtyCount[D[i]]++;
  }

  let toWash = 0;
  for (let i = 1; i < max + 1 && toWash < K; i++) {
    if (cleanCount[i] === 1 && dirtyCount[i]) {
      dirtyCount[i]--;
      pairs++;
      toWash++;
    }
  }
  for (let i = 1; i < max + 1 && toWash + 2 <= K; i++) {
    while (dirtyCount[i] >= 2 && toWash + 2 <= K) {
      dirtyCount[i] -= 2;
      toWash += 2;
      pairs++;
    }
  }
  return pairs;
}
