'use strict';

const fs = require('fs');

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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    // This can be solved in O(n) using a clever XOR technique, but I wanted
    // to try to find an efficient alternative
    // let's use a map with the integer as a key and the count as a value
    // This will still run in O(n)
    // But it will take O(n) space instead of O(1)
    // An advantage is if we were asked to return the set of lonely integers
    // instead of a single lenely integer, we could.
    const integerCountMap = new Map();

    a.forEach((integer) => {
        if (integerCountMap.has(integer)) {
            integerCountMap.set(integer, integerCountMap.get(integer) + 1);
        } else {
            integerCountMap.set(integer, 1);
        }
    });

    const lonelyIntegerEntry = Array.from(integerCountMap.entries()).find(([_, count]) => count === 1);

    if (lonelyIntegerEntry) {
        return lonelyIntegerEntry[0];
    }

    // Handle the case where no lonely integer is found
    throw new Error('No lonely integer found.');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
