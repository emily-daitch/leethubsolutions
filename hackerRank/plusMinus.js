'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  const counts = arr.reduce(
    (acc, num) => {
      if (num > 0) {
        acc.positive++;
      } else if (num < 0) {
        acc.negative++;
      } else {
        acc.zero++;
      }
      return acc;
    },
    { positive: 0, negative: 0, zero: 0 }
  );

  const total = arr.length;
  const pRatio = counts.positive / total;
  const nRatio = counts.negative / total;
  const zRatio = counts.zero / total;

  return [pRatio, nRatio, zRatio];
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const ratios = plusMinus(arr);
  ratios.forEach(ratio => console.log(ratio.toFixed(6)));
}

