// https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_semiprimes/
// results - https://app.codility.com/demo/results/trainingZD8TJZ-BTX/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, P, Q) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (N === 1) {
    return Array.from({ length: P.length }, () => 0);
  }
  let primes = [];
  let semiPrimes = [];
  let max = Math.max(...Q);
  let min = Math.min(...P);

  for (let i = 2; i <= max; i++) {
    primes[i] = true;
    semiPrimes[i] = false;
  }

  for (let i = 2; i <= parseInt(Math.sqrt(max)); i++) {
    for (let j = i; j * i <= max; j++) {
      primes[j * i] = false;
      if (primes[j] && primes[i]) {
        semiPrimes[i * j] = true;
      } else {
        semiPrimes[i * j] = false;
      }
    }
  }

  let count = [0];
  for (let i = 1; i < semiPrimes.length; i++) {
    count[i] = count[i - 1];
    if (semiPrimes[i]) {
      count[i]++;
    }
  }

  let answer = [];
  for (let i = 0; i < P.length; i++) {
    answer.push(count[Q[i]] - count[P[i] - 1]);
  }
  return answer;
}
