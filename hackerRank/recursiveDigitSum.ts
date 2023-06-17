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

/*
function rec(n){
    if(n.length==1) return parseInt(n);
    let sum=0;
    for(let i=0;i<n.length;i++){
        sum+=parseInt(n[i]);
    }
    return rec(sum.toString())
}
function superDigit(n, k) {
    let val=rec(n);
    return rec((val*k).toString())
}
*/

function recurse(str: string): number {
    if(str.length === 1){
        return parseInt(str);
    }
        
    const charArr: string[] = str.split('');
    const sum = charArr.reduce((acc, digit) => acc + parseInt(digit), 0);

    return superDigit(String(sum), 1);
}

function superDigit(n: string, k: number): number {
    let val=recurse(n);
    return recurse((val*k).toString())
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
