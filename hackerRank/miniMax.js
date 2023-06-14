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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let sum = BigInt(0);
    let min = BigInt(0);
    let max = BigInt(0);
    
    const sortedArray = arr.sort((a, b) => a - b);
  
    sum = sortedArray.reduce((acc, num) => acc + BigInt(num), BigInt(0));
    min = sum - BigInt(sortedArray[sortedArray.length - 1]);
    max = sum - BigInt(sortedArray[0]);
    return [min, max];
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let res = miniMaxSum(arr);
    const answer = res[0] + " " + res[1];
    console.log(answer);

}
