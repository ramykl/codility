// https://app.codility.com/programmers/lessons/91-tasks_from_indeed_prime_2016_challenge/rectangle_builder_greater_area/
// results - https://app.codility.com/demo/results/training29K2SQ-HVT/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, X) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 4) {
    return 0;
  }

  const LIMIT = 1000000000;
  let count = [];
  let posts = [];
  let answer = 0;
  for (let i = 0; i < A.length; i++) {
    count[A[i]] = Number.isInteger(count[A[i]]) === false ? 1 : count[A[i]] + 1;
    if (count[A[i]] === 2) {
      posts.push(A[i]);
    }
    if (count[A[i]] === 4 && (A[i] >= X || A[i] * A[i] >= X)) {
      answer++;
    }
  }

  posts.sort((a, b) => a - b);

  let i = 0;
  let j = posts.length - 1;
  for (let i = 0; i < posts.length; i++) {
    let begin = i + 1;
    let end = posts.length - 1;
    while (begin <= end) {
      let mid = parseInt((begin + end) / 2);
      if (posts[mid] * posts[i] >= X) {
        end = mid - 1;
      } else {
        begin = mid + 1;
      }
    }
    answer += posts.length - (end + 1);
    if (answer > LIMIT) {
      return -1;
    }
  }
  return answer;
}
