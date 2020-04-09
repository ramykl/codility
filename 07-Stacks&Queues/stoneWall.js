// https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/
// results - https://app.codility.com/demo/results/trainingKM8XVU-TGY/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
  // write your code in JavaScript (Node.js 8.9.4)
  let blockStack = [];
  let blocks = 0;
  for (let i = 0; i < H.length; i++) {
    if (blockStack.length === 0 || H[i] > blockStack[blockStack.length - 1]) {
      blockStack.push(H[i]);
    } else if (H[i] < blockStack[blockStack.length - 1]) {
      while (blockStack.length > 0) {
        let j = blockStack.length - 1;
        if (H[i] < blockStack[j]) {
          blocks++;
          blockStack.pop();
        } else if (H[i] > blockStack[j]) {
          blockStack.push(H[i]);
          break;
        } else {
          break;
        }
      }
    }
    if (blockStack.length === 0) {
      blockStack.push(H[i]);
    }
  }
  return blocks + blockStack.length;
}
