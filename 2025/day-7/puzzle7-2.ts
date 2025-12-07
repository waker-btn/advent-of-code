// NO IDEAS HOW TO FIGURE THIS ONE OUT YET

import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8");
const sampleInput = fs.readFileSync("./sampleInput.txt", "utf-8");

const layout = input.split("\n").map((row) => row.split(""));
const invert = layout[0].map((_, colIndex) =>
  layout.map((row) => row[colIndex])
);

const start = [layout[0].findIndex((cell) => cell === "S"), 0];
let totalSplit = 0;
const visited = new Set<string>();

function checkAhead(startPosition: number[]) {
  const key = startPosition.join(",");
  if (visited.has(key)) return;
  visited.add(key);

  console.log(`Checking ${startPosition}`);
  const [y, x] = startPosition;
  const path = invert[y].slice(x);

  if (!path.length) {
    return;
  }

  for (let cell = 0; cell < path.length; cell++) {
    if (path[cell] === "^") {
      totalSplit++;
      invert[y][cell + x] = "X";
      if (y - 1 >= 0) checkAhead([y - 1, cell + x]);
      if (y + 1 < invert.length) checkAhead([y + 1, cell + x]);
      break;
    } else if (path[cell] === "X") {
      if (y - 1 >= 0) checkAhead([y - 1, cell + x]);
      if (y + 1 < invert.length) checkAhead([y + 1, cell + x]);
      break;
    }
  }
}

checkAhead(start);
console.log(totalSplit);
