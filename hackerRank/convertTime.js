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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const isPM = (s[8] === 'P');
    const isTwelve = (s.startsWith("12"));
    
    if(isTwelve) {
        return isPM ? "12" + s.slice(2,8) : "00" + s.slice(2,8);
    }
    
    let offset = isPM ? 12 : 0;
    let hour = parseInt(s.slice(0, 2));
    hour = (hour + offset) % 24;
    return hour.toString().padStart(2, '0') + s.slice(2, 8);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
