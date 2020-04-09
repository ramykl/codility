// https://app.codility.com/programmers/lessons/13-fibonacci_numbers/fib_frog/
// results - https://app.codility.com/demo/results/trainingP3HSGV-43Z/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 3) {
    return 1;
  }
  let fib = [0, 1];
  let steps = [1, 0];
  let N = A.length + 1;
  for (let i = 2; i < N; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    steps[i] = 0;
    if (fib[i] === N) {
      return 1;
    }
  }

  let base = 0;
  let result = -1;

  let i = 2;
  while (i < fib.length && base <= N) {
    let nextPos = base + fib[i];
    // console.log('-> i, N, base, nextPos, steps:', i, A.length+1, base, nextPos, steps)

    if (steps[base] === 0) {
      base++;
    } else if (nextPos > N) {
      base++;
      i = 2;
    } else {
      if (nextPos === N) {
        if (base === 0) {
          return 1;
        } else if (result < 0) {
          result = steps[base] + 1;
        } else {
          result = Math.min(result, steps[base] + 1);
        }
      } else if (A[nextPos - 1] === 1) {
        if (steps[nextPos] === 0) {
          if (base === 0) {
            steps[nextPos] = 1;
          } else {
            steps[nextPos] = steps[base] + 1;
          }
        } else {
          steps[nextPos] = Math.min(steps[nextPos], steps[base] + 1);
        }
      }
      i++;
      if (i >= fib.length) {
        base++;
        i = 2;
      }
    }
  }
  return result;
}
