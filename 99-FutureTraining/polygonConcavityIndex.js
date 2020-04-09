// https://app.codility.com/programmers/lessons/99-future_training/polygon_concavity_index/
// results - https://app.codility.com/demo/results/trainingDJ9JDA-M77/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (inside(A[0], A.slice(1))) {
      return 0;
  }
  for (let i = 1; i < A.length; i++) {
      let left = A.slice(0,i);
      let right = A.slice(i+1);
      if (inside(A[i], left.concat(right))) {
          return i;
      }
  }
  return -1;
}

function inside(point, vs) {

  let x = point.x;
  let y = point.y;
  // console.log(point, vs)
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      let xi = vs[i].x;
      let yi = vs[i].y;
      let xj = vs[j].x;
      let yj = vs[j].y;

      let intersect = ((yi > y) != (yj > y))
          && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
  }

  return inside;
};