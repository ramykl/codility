// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
// results - https://app.codility.com/demo/results/trainingJRSG7K-8FM/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort();
  let current = null;
  let count = 0;
  for (let i of A) {
    if (i !== current) {
      if (count % 2 === 1) {
        break;
      }
      current = i;
    }
    count += 1;
  }
  return current;
}
