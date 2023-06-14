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
    const isTwelveFlat = (s.startsWith("12:00:00"));
    
    if(isTwelveFlat) {
        return isPM ? "12:00:00" : "00:00:00";
    }
    
    if(!isPM) {
        return s.slice(0,8);
    }
    else {
        return (Number(s.slice(0,2)) + 12).toString() + s.slice(2,8);
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
