// https://app.codility.com/programmers/lessons/12-euclidean_algorithm/common_prime_divisors/
// results - https://app.codility.com/demo/results/trainingJJMR3Y-79U/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 0;
  for (let i = 0; i < A.length; i++) {
      if(A[i] === B[i]) {
          count++;
      } else {
          let div = gcd(A[i], B[i]);
          if (check(A[i], div) && check(B[i], div)) {
              count++;
          }
      }
  }
  return count;
}

function gcd(a, b) {
  let small = Math.min(a, b);
  let big = Math.max(a,b);
  if (big % small === 0) {
      return small;
  } else {
      return gcd(small, big % small);
  }
}

function check(a, b) {
  let val = gcd(a, b);
  if (val === a) {
      return true;
  } else if (val === 1) {
      return false;
  } else {
      a /= val;
      val = gcd(a, val);
      return check (Math.max(a, val), Math.min(a, val));
  }
}