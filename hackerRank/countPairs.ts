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
 * Complete the 'pairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

function pairs(k: number, arr: number[]): number {
    // Write your code here
    let count = 0;
    let sI = 0;
    let i = 1;
    arr = arr.sort((a,b)=> b-a); //descending
    
    while(sI < arr.length -1){
        i = sI + 1;
        while(i <= arr.length - 1 && arr[sI] - arr[i] <= k){
            if(arr[sI] - arr[i] === k){
                count++
            }
            i++;
        }
        sI++;
    }
    
    return count;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

    const n: number = parseInt(firstMultipleInput[0], 10);

    const k: number = parseInt(firstMultipleInput[1], 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result: number = pairs(k, arr);

    ws.write(result + '\n');

    ws.end();
}
