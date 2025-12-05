import fs from "fs";

const input = fs.readFileSync("./puzzle3-input.txt", "utf-8");
const sampleInput = fs.readFileSync("./puzzle3-sampleInput.txt", "utf-8");

const powerUnit = input.split("\n");
let totalJoltage = 0;

function findJoltage(bank) {
  let firstHigh = 0;
  let firstIndex;
  let secondHigh = 0;

  for (let i = 0; i < bank.length - 1; i++) {
    if (bank[i] > firstHigh) {
      firstHigh = bank[i];
      firstIndex = i;
    }
  }

  const bankPart = bank.slice(firstIndex + 1);

  for (let i = 0; i < bankPart.length; i++) {
    bankPart[i] > secondHigh ? (secondHigh = bankPart[i]) : null;
  }
  console.log(firstHigh + "" + secondHigh);
  return firstHigh + "" + secondHigh;
}

for (const unit of powerUnit) {
  const bank = unit.split("").map(Number);
  totalJoltage += parseInt(findJoltage(bank));
}

console.log(totalJoltage);
