// https://app.codility.com/programmers/lessons/99-future_training/polygon_concavity_index/
// results - https://app.codility.com/demo/results/trainingP7EKFC-XJ7/
// python solution - https://davidjalon.com/index/polygonconcavityindex/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let angles = [];
  let totalAngles = 0;
  for (let i = 1; i < A.length - 1; i++) {
    angles.push(turn(A[i - 1], A[i], A[i + 1]));
    if (angles[i - 1].dir === "r") {
      totalAngles += angles[i - 1].ang;
    } else if (angles[i - 1].dir === "l") {
      totalAngles -= angles[i - 1].ang;
    }
  }
  angles.push(turn(A[A.length - 2], A[A.length - 1], A[0]));
  angles.unshift(turn(A[A.length - 1], A[0], A[1]));
  if (angles[angles.length - 2].dir === "r") {
    totalAngles += angles[angles.length - 2].ang;
  } else if (angles[angles.length - 2].dir === "l") {
    totalAngles -= angles[angles.length - 2].ang;
  }
  if (angles[0].dir === "r") {
    totalAngles += angles[0].ang;
  } else if (angles[0].dir === "l") {
    totalAngles -= angles[0].ang;
  }
  // console.log(angles)
  // console.log(totalAngles);

  let exterior = "l";
  if (totalAngles < 0) {
    exterior = "r";
  }

  for (let i = 0; i < angles.length; i++) {
    if (angles[i].dir === exterior) {
      return i;
    }
  }
  return -1;
}

function turn(P, Q, R) {
  const v1 = { x: Q.x - P.x, y: Q.y - P.y };
  const v2 = { x: R.x - Q.x, y: R.y - Q.y };
  const numerator = v1.x * v2.x + v1.y * v2.y;
  const lenv1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
  const lenv2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
  let quotient = numerator / (lenv1 * lenv2);
  if (quotient < -1) {
    quotient = -1;
  } else if (quotient > 1) {
    quotient = 1;
  }
  const angle = (Math.acos(quotient) * 180) / Math.PI;

  if (v1.x === 0) {
    if (v1.y > 0) {
      if (R.x < Q.x) {
        return { dir: "l", ang: angle };
      } else if (R.x > Q.x) {
        return { dir: "r", ang: angle };
      } else {
        return { dir: "s", ang: angle };
      }
    } else {
      if (R.x < Q.x) {
        return { dir: "r", ang: angle };
      } else if (R.x > Q.x) {
        return { dir: "l", ang: angle };
      } else {
        return { dir: "s", ang: angle };
      }
    }
  } else {
    const constant = v1.y * P.x - v1.x * P.y;
    const value = v1.y * R.x - v1.x * R.y;
    if (value < constant) {
      return { dir: "l", ang: angle };
    } else if (value > constant) {
      return { dir: "r", ang: angle };
    } else {
      return { dir: "s", ang: angle };
    }
  }
}
