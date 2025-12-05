import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8");
const sampleInput = fs.readFileSync("./sampleInput.txt", "utf-8");

const reMul = /(?<=mul\()(\d{1,3}),(\d{1,3})(?=\))/g;
const reDo = /\)\(t'nod|\)\(od/;
let total = 0;
let match;

while ((match = reMul.exec(input)) !== null) {
  const previous = input.slice(0, match.index).split("").reverse().join("");

  if (previous.match(reDo) === null || previous.match(reDo)[0].length < 5) {
    total += match[1] * match[2];
  }
}

console.log(total);
