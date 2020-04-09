// https://app.codility.com/programmers/lessons/99-future_training/tree_height/
// results - https://app.codility.com/demo/results/trainingAXVA25-YEV/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(T) {
  // write your code in JavaScript (Node.js 8.9.4)
  return navigateBranch(T);
}

function navigateBranch(T) {
  if (!T) {
    return -1;
  }
  let left = navigateBranch(T.l);
  let right = navigateBranch(T.r);

  return 1 + Math.max(left, right);
}
