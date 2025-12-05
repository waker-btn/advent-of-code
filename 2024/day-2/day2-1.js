import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8");
const sampleInput = fs.readFileSync("./sampleInput.txt", "utf-8");

const reports = input.split("\n");
let safeReports = 0;

for (const x of reports) {
  const report = x.split(" ").map(Number);
  let prevLevel = report[0];
  const increasing = report[0] < report[1];
  let safe = true;
  for (let i = 1; i < report.length; i++) {
    const diff = Math.abs(prevLevel - report[i]);
    if (diff < 1 || diff > 3) {
      safe = false;
      break;
    }
    if (increasing) {
      if (report[i] < prevLevel) {
        safe = false;
        break;
      }
    } else {
      if (report[i] > prevLevel) {
        safe = false;
        break;
      }
    }
    prevLevel = report[i];
  }
  if (safe) {
    safeReports++;
  }
}

console.log(safeReports);
