import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8");
const sampleInput = fs.readFileSync("./sampleInput.txt", "utf-8");

const leftList = [];
const rightList = [];
const rightOccurances = {};
const distances = [];
let total = 0;
let similarityScore = 0;

//prepare from file
const initial = input.split("\n");
for (const x of initial) {
  const split = x.split("   ");
  leftList.push(split[0]);
  rightList.push(split[1]);
}

//sort lists
leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);

//find distance
for (let i = 0; i < leftList.length; i++) {
  distances.push(Math.abs(leftList[i] - rightList[i]));
}

//find similarity
for (const right of rightList) {
  rightOccurances[right] = rightOccurances[right]
    ? rightOccurances[right] + 1
    : 1;
}

//sum distances
total = distances.reduce((acc, cur) => {
  return acc + cur;
}, 0);

//sum simularityScore
for (const left of leftList) {
  similarityScore += left * (rightOccurances[left] || 0);
}

console.log(total);
console.log(similarityScore);
