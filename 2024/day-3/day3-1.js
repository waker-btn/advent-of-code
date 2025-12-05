import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8");
const sampleInput = fs.readFileSync("./sampleInput.txt", "utf-8");

const re = /(?<=mul\()(\d{1,3}),(\d{1,3})(?=\))/g;
let total = 0;

for (const match of input.matchAll(re)) {
  total += match[1] * match[2];
}

console.log(total);

// \d for any number, {x,y} to bound amount of times
// (?<=y)x matches check behind
// x(?=y) matches check ahead
// \ escapes
