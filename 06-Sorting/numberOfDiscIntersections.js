// https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
// results - https://app.codility.com/demo/results/trainingUNTTQP-2HX/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let circles = [];
  let count = 0;
  const LIMIT = 10000000;

  for (let i = 0; i < A.length; i++) {
    circles.push({
      id: i,
      start: i - A[i],
      end: i + A[i]
    });
  }
  circles.sort((a, b) => a.start - b.start);

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    let j = i + 1;

    while (circles[j] && circle.end >= circles[j].start) {
      if (++count > LIMIT) {
        return -1;
      }
      j++;
    }
  }
  return count;
}
