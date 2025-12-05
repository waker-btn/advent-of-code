import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8");
const sampleInput = fs.readFileSync("./sampleInput.txt", "utf-8");

const reports = input.split("\n");
let safeReports = 0;

function isSafe(arr) {
  const increasing = arr[0] < arr[1];
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff < 1 || diff > 3) return false;
    if (increasing && arr[i] < arr[i - 1]) return false;
    if (!increasing && arr[i] > arr[i - 1]) return false;
  }
  return true;
}

for (const x of reports) {
  const report = x.split(" ").map(Number);
  let foundSafe = false;
  // Try original array
  if (isSafe(report)) {
    foundSafe = true;
  } else {
    // Try removing each index
    for (let i = 0; i < report.length; i++) {
      const testArr = report.slice(0, i).concat(report.slice(i + 1));
      if (isSafe(testArr)) {
        foundSafe = true;
        break;
      }
    }
  }
  if (foundSafe) safeReports++;
}

console.log(safeReports);
