// https://app.codility.com/programmers/lessons/91-tasks_from_indeed_prime_2016_challenge/dwarfs_rafting/
// results - https://app.codility.com/demo/results/training48DMVS-9ZE/
// needs some fixes for maximal boards??

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, S, T) {
  // write your code in JavaScript (Node.js 8.9.4)
  let row = Array.from({ length: N }, () => "");
  let raft = [];
  for (let i = 0; i < N + 1; i++) {
    raft[i] = row.slice();
  }

  let half = N / 2;
  let leftF = half * half;
  let rightF = half * half;
  let leftB = half * half;
  let rightB = half * half;

  if (S !== "") {
    let barrels = S.split(" ");
    for (let barrel of barrels) {
      const num = barrel.replace(/[^0-9]/g, "") - 1;
      const letter = letterToIndex(barrel.replace(/[^A-Z]/g, ""));
      raft[num][letter] = "b";
      if (letter < half && num < half) {
        leftF--;
      } else if (letter < half && num >= half) {
        leftB--;
      } else if (letter >= half && num < half) {
        rightF--;
      } else {
        rightB--;
      }
    }
  }
  // console.log('lf, lb, rf, rb:', leftF, leftB, rightF, rightB)

  let dLeftF = Math.min(leftF, rightB);
  let dRightF = Math.min(rightF, leftB);
  let dLeftB = Math.min(leftB, rightF);
  let dRightB = Math.min(leftF, rightB);

  if (T !== "") {
    let occ = T.split(" ");
    for (let seat of occ) {
      const num = seat.replace(/[^0-9]/g, "") - 1;
      const letter = letterToIndex(seat.replace(/[^A-Z]/g, ""));
      raft[num][letter] = "d";
      if (letter < half && num < half) {
        dLeftF--;
      } else if (letter < half && num >= half) {
        dLeftB--;
      } else if (letter >= half && num < half) {
        dRightF--;
      } else {
        dRightB--;
      }
    }
  }
  // console.log('dlf, dlb, drf, drb:', dLeftF, dLeftB, dRightF, dRightB)
  // console.log(raft)
  if (dLeftF < 0 || dLeftB < 0 || dRightF < 0 || dRightB < 0) {
    return -1;
  }
  return dLeftF + dLeftB + dRightF + dRightB;
}

function letterToIndex(letter) {
  return parseInt(letter, 36) - 10; // -10 gives 0 -> 25 range
}
