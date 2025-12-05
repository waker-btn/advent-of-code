import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8");
const sampleInput = fs.readFileSync("./sampleInput.txt", "utf-8");

const leftList = [];
const rightList = [];
const distances = [];
let total = 0;

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

//sum distances
total = distances.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(total);
