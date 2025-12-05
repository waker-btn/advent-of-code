import fs from "fs";

const input = fs.readFileSync("./puzzle5-input.txt", "utf-8");
const sampleInput = fs.readFileSync("./puzzle5-sampleInput.txt", "utf-8");

const prepareFile = input.split("\n\n");
const freshRanges = prepareFile[0].split("\n");
const allFreshIds = new Set();

function createRange(start, end) {
  return Array.from(
    {
      length: Math.ceil(parseInt(end) - parseInt(start) + 1),
    },
    (unused, i) => parseInt(start) + i
  );
}

for (const range of freshRanges) {
  const startEnd = range.split("-");
  const rangeArray = createRange(startEnd[0], startEnd[1]);
  rangeArray.forEach((id) => allFreshIds.add(id));
}

console.log(allFreshIds.size);
