import fs from "fs";

const input = fs.readFileSync("./puzzle3-input.txt", "utf-8");
const sampleInput = fs.readFileSync("./puzzle3-sampleInput.txt", "utf-8");

const powerUnit = input.split("\n");
let totalJoltage = 0;

function findJoltage(bank) {
  let highs = [];
  let nextIndex = 0;
  let partialBank = bank;
  const noOfBatteries = 12;

  for (let i = 1; i <= noOfBatteries; i++) {
    let high = 0;
    for (let j = 0; j < partialBank.length - (noOfBatteries - i); j++) {
      if (partialBank[j] > high) {
        high = partialBank[j];
        nextIndex = j;
      }
    }
    highs.push(high);
    partialBank = partialBank.slice(nextIndex + 1);
  }

  return highs.join("");
}

for (const unit of powerUnit) {
  const bank = unit.split("").map(Number);
  totalJoltage += parseInt(findJoltage(bank));
}

console.log(totalJoltage);
