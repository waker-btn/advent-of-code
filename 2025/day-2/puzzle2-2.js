import fs from "fs";

const input = fs.readFileSync("./puzzle2-1-input.txt", "utf-8");
const sampleInput = fs.readFileSync("./puzzle2-1-sampleInput.txt", "utf-8");

const ranges = input.split(",");
let runningTotal = 0;

function checkValue(value) {
  const stringValue = value.toString();
  const length = stringValue.length;
  //create range of numbers up to length of digit
  const lengthRange = createRange(1, length);

  for (const step of lengthRange) {
    //check if digit can be broken up into 'step' chunks, with at least 2 chunks e.g 123456 can be broken up into chunks of 1, 2 and 3
    if (length % step === 0 && length / step > 1) {
      const slices = [];
      //chunk it
      for (let start = 0; start < length; start += step) {
        slices.push(value.toString().slice(start, start + step));
      }

      //check if the chunks match
      if (slices.every((slice) => slice === slices[0])) {
        return (runningTotal += value);
      }
    }
  }
}

function createRange(start, end) {
  return Array.from(
    {
      length: Math.ceil(parseInt(end) - parseInt(start) + 1),
    },
    (unused, i) => parseInt(start) + i
  );
}

for (const range of ranges) {
  const limits = range.split("-");

  //create an array of numbers for the range
  const numbers = createRange(limits[0], limits[1]);

  //check each value
  for (const value of numbers) {
    checkValue(value);
  }
}

console.log(runningTotal);
