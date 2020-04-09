// https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
// results - https://app.codility.com/demo/results/trainingGDD63W-BVN/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (S.length === 0) {
    return 1;
  } else if (S.length % 2 === 1) {
    return 0;
  }
  let A = S.split("");
  let brackets = [];
  for (bracket of A) {
    if (bracket === "(" || bracket === "[" || bracket === "{") {
      brackets.push(bracket);
    } else if (
      (bracket === ")" && brackets[brackets.length - 1] === "(") ||
      (bracket === "]" && brackets[brackets.length - 1] === "[") ||
      (bracket === "}" && brackets[brackets.length - 1] === "{")
    ) {
      brackets.pop();
    } else {
      return 0;
    }
  }
  return brackets.length ? 0 : 1;
}
