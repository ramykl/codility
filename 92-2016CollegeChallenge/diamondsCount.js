// https://app.codility.com/programmers/lessons/92-tasks_from_indeed_prime_2016_college_coders_challenge/diamonds_count/
// results - https://app.codility.com/demo/results/training9WD44T-CTR/
// needs optimisation
// python solution https://gist.github.com/jerryvig/19059c96e5f51207f1f2bea7fe148cf0

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y) {
  // write your code in JavaScript (Node.js 8.9.4)
  let points = [];
  for (let i = 0; i < X.length; i++) {
    points.push({ x: X[i], y: Y[i] });
  }
  let max = Math.max(...X, ...Y);

  let byMeanX = {};
  let byMeanY = {};

  let combinations = combinationsOfTwo(points);
  for (let pair of combinations) {
    // check if y values are equal
    if (pair[0].y === pair[1].y) {
      // calculate the mean of x values
      let meanX = (pair[0].x + pair[1].x) / 2;
      let iMeanX = parseInt(meanX);
      // check the mean is an int and is a different value (not same position)
      if (meanX !== pair[0].x && meanX === iMeanX) {
        // store values in byMeanX object of objects
        if (byMeanX[iMeanX] === undefined) {
          byMeanX[iMeanX] = {};
        }
        if (byMeanX[iMeanX][pair[0].y] === undefined) {
          byMeanX[iMeanX][pair[0].y] = 1;
        } else {
          byMeanX[iMeanX][pair[0].y]++;
        }
      }

      // check if x values are equal
    } else if (pair[0].x === pair[1].x) {
      // calculate the mean of y values
      let meanY = (pair[0].y + pair[1].y) / 2;
      let iMeanY = parseInt(meanY);
      // check the mean is an int and is a different value (not same position)
      if (meanY !== pair[0].y && meanY === iMeanY) {
        // store values in byMeanY object of objects
        if (byMeanY[iMeanY] === undefined) {
          byMeanY[iMeanY] = {};
        }
        if (byMeanY[iMeanY][pair[0].x] === undefined) {
          byMeanY[iMeanY][pair[0].x] = 1;
        } else {
          byMeanY[iMeanY][pair[0].x]++;
        }
      }
    }
  }

  let diamonds = 0;
  for (let y of Object.keys(byMeanY)) {
    for (let x of Object.keys(byMeanY[y])) {
      // console.log('y, x byMeanX, byMeanXx:', y, x, byMeanX, byMeanX[x]);
      if (byMeanX.hasOwnProperty(x) && byMeanX[x].hasOwnProperty(y)) {
        diamonds += byMeanX[x][y] * byMeanY[y][x];
      }
    }
  }
  return diamonds;
}

// return all the different combinations of two points
function combinationsOfTwo(A) {
  let comb = [];
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      comb.push([A[i], A[j]]);
    }
  }
  return comb;
}
