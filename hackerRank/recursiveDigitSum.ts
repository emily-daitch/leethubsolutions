'use strict';

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n: string, k: number): number {
    // Write your code here
    if(k > 1){
        let startString = '';
        // for(let i = 0; i < k; i++){
        //     startString += n;
        // };
        startString = n.repeat(k);
        return superDigit(startString, 1);
    } else {
        if(n.length === 1){
            return parseInt(n);
        }
        
        // let charArr: string[] = [];
        // let sum = 0;
        // for(let j = 0; j < n.length; j++){
        //     charArr.push(n.charAt(j));
        //     sum += Number(n.charAt(j));
        // };
        
        const charArr: string[] = n.split('');
        const sum = charArr.reduce((acc, digit) => acc + parseInt(digit), 0);

        return superDigit(String(sum), 1);
        
    }
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const n: string = firstMultipleInput[0];

    const k: number = parseInt(firstMultipleInput[1], 10);

    const result: number = superDigit(n, k);

    ws.write(result + '\n');

    ws.end();
}
