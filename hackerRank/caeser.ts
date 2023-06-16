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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s: string, k: number): string {
    // Write your code here
    let res: string = "";
    let AValue: number = 65;
    let ZValue: number = 90;
    let aValue: number = 97;
    let zValue: number = 122;
    let dictionarySize: number = 26;
    
    for(let i: number = 0; i < s.length; i++) {
        console.log('i', i);
        if(s.charCodeAt(i) >= aValue && s.charCodeAt(i) <= zValue){
            let charCode: number = s.charCodeAt(i) - aValue;
            let newValue: number = (charCode + k) % (dictionarySize);
            res += String.fromCharCode(newValue + aValue);
        } else if(s.charCodeAt(i) >= AValue && s.charCodeAt(i) <= ZValue){
            let charCode: number = s.charCodeAt(i) - AValue;
            let newValue: number = (charCode + k) % (dictionarySize);
            res += String.fromCharCode(newValue + AValue);
        } else {
            res += s.charAt(i);
        }
    }
    
    return res;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const s: string = readLine();

    const k: number = parseInt(readLine().trim(), 10);

    const result: string = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
