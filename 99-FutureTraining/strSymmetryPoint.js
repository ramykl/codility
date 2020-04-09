// https://app.codility.com/programmers/lessons/99-future_training/str_symmetry_point/
// results - https://app.codility.com/demo/results/training53T27D-P32/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (S.length % 2 === 0) {
    return -1;
  }
  if (S.length === 1) {
    return 0;
  }
  let mid = Math.floor(S.length / 2);
  let startString = S.slice(0, mid);
  let endString = reverseString(S.slice(mid + 1));
  if (startString === endString) {
    return mid;
  }
  return -1;
}

function reverseString(S) {
  return S.split("").reverse().join("");
}
