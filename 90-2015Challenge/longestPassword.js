// https://app.codility.com/programmers/lessons/90-tasks_from_indeed_prime_2015_challenge/longest_password/
// results - https://app.codility.com/demo/results/trainingZU9C6P-C8E/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const words = S.split(" ");
  let longest = -1;
  for (let word of words) {
    const stripped = word.replace(/[^0-9a-z]/gi, "");
    if (word.length === stripped.length) {
      const letters = stripped.replace(/[^a-z]/gi, "");
      const numbers = stripped.replace(/[^0-9]/g, "");
      if (letters.length % 2 === 0 && numbers.length % 2 === 1) {
        longest = Math.max(longest, letters.length + numbers.length);
      }
    }
  }
  return longest;
}
