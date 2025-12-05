import fs from "fs";

const input = fs.readFileSync("./puzzle5-input.txt", "utf-8");
const sampleInput = fs.readFileSync("./puzzle5-sampleInput.txt", "utf-8");

const prepareFile = input.split("\n\n");
const freshRanges = prepareFile[0].split("\n");
const ingredients = prepareFile[1].split("\n");

let isFresh = 0;

function checkFresh() {
  for (const ingredient of ingredients) {
    for (const range of freshRanges) {
      const startEnd = range.split("-");
      if (
        parseInt(startEnd[0]) <= parseInt(ingredient) &&
        parseInt(ingredient) <= parseInt(startEnd[1])
      ) {
        isFresh++;
        break;
      }
    }
  }
}

checkFresh();
console.log(isFresh);

// const allFreshIds = new Set(
//   freshRanges
//     .map((range) => {
//       const startEnd = range.split("-");
//       return createRange(startEnd[0], startEnd[1]);
//     })
//     .flat(1)
//     .sort((a, b) => a - b)
// );
