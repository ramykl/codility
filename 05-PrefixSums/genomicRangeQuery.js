// https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
// results - https://app.codility.com/demo/results/trainingV3ZJH2-KAP/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = [];
  // track the most recent previous occurance of letters
  let lastA = [];
  let lastC = [];
  let lastG = [];

  for (let i = 0; i < S.length; i++) {
    if (i === 0) {
      lastA[i] = -1;
      lastC[i] = -1;
      lastG[i] = -1;
    } else {
      lastA[i] = lastA[i - 1];
      lastC[i] = lastC[i - 1];
      lastG[i] = lastG[i - 1];
    }
    if (S[i] === "A") {
      lastA[i] = i;
    } else if (S[i] === "C") {
      lastC[i] = i;
    } else if (S[i] === "G") {
      lastG[i] = i;
    }
  }

  for (let i = 0; i < P.length; i++) {
    if (lastA[Q[i]] >= P[i]) {
      result.push(1);
    } else if (lastC[Q[i]] >= P[i]) {
      result.push(2);
    } else if (lastG[Q[i]] >= P[i]) {
      result.push(3);
    } else {
      result.push(4);
    }
  }
  return result;
}
