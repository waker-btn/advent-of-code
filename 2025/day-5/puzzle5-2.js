//This can 100% be simplified further, but it works for now, and my brain hurts

import fs from "fs";

const input = fs.readFileSync("./puzzle5-input.txt", "utf-8");
const sampleInput = fs.readFileSync("./puzzle5-sampleInput.txt", "utf-8");

const prepareFile = input.split("\n\n");
let freshRanges = prepareFile[0]
  .split("\n")
  .map((range) => range.split("-").map(Number));
let prevSimplifiedRanges = [];
let totalFreshRanges = 0;

function simplifyRanges() {
  prevSimplifiedRanges = freshRanges.slice();
  const newFreshRanges = [];
  for (const range of freshRanges) {
    let simplified = false;

    for (let fresh of newFreshRanges) {
      if (range[0] >= fresh[0] && range[1] <= fresh[1]) {
        simplified = true;
        break;
      } else if (
        range[0] <= fresh[0] &&
        range[1] <= fresh[1] &&
        range[1] >= fresh[0]
      ) {
        simplified = true;
        fresh[0] = range[0];
        break;
      } else if (
        range[0] >= fresh[0] &&
        range[1] >= fresh[1] &&
        range[0] <= fresh[1]
      ) {
        simplified = true;
        fresh[1] = range[1];
        break;
      } else if (range[0] <= fresh[0] && range[1] >= fresh[1]) {
        simplified = true;
        fresh[0] = range[0];
        fresh[1] = range[1];
        break;
      }
    }

    if (!simplified) {
      newFreshRanges.push(range);
    }
  }
  freshRanges = newFreshRanges;
}

while (freshRanges.length !== prevSimplifiedRanges.length) {
  simplifyRanges();
}

console.log(freshRanges);
freshRanges.forEach((range) => {
  totalFreshRanges += range[1] - range[0] + 1;
});

console.log(totalFreshRanges);
