// https://app.codility.com/programmers/lessons/8-leader/equi_leader/
// results - https://app.codility.com/demo/results/trainingWQXG5Z-42W/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (A.length < 2) {
    return 0;
  }
  let size = 0;
  let value = null;
  for (let i = 0; i < A.length; i++) {
    if (size === 0) {
      size++;
      value = A[i];
    } else {
      if (value === A[i]) {
        size++;
      } else {
        size--;
      }
    }
  }
  if (size <= 0) {
    return 0;
  }
  let pos = [];
  let count = 0;
  let countArray = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === value) {
      count++;
      pos.push(i);
    }
    countArray.push(count);
  }
  if (count < A.length / 2.0) {
    return 0;
  }
  let equi = 0;
  for (let i = 0; i < countArray.length; i++) {
    const leftMin = (i + 1) / 2;
    const rightMin = (countArray.length - i - 1) / 2;
    if (countArray[i] > leftMin && count - countArray[i] > rightMin) {
      equi++;
    }
  }
  return equi;
}
