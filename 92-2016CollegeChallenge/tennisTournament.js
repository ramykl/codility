// https://app.codility.com/programmers/lessons/92-tasks_from_indeed_prime_2016_college_coders_challenge/tennis_tournament/
// results - https://app.codility.com/demo/results/training6MPCJE-CB3/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(P, C) {
  // write your code in JavaScript (Node.js 8.9.4)
  return Math.min(Math.floor(P / 2), C);
}
