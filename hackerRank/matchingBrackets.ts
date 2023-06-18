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
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s: string): string {
    // Write your code here
    if(s.length < 2) return "NO"; // 1 cannot be balanced, length will never be 0
    
    function checkIsBalanced(s: string): boolean{
        let stack = [];
        let map = new Map<string, string>();
        map.set('}', '{');
        map.set(']', '[');
        map.set(')', '(');
        
        for(let i = 0; i <= s.length - 1; i++){
            switch(s.charAt(i)){
                case '{':
                case '(':
                case '[':
                    console.log('pushing', s.charAt(i));
                    stack.push(s.charAt(i));
                    break;
                case '}':
                case ')':
                case ']':
                    let top = stack[stack.length - 1];
                    let topPair = map.get(s.charAt(i));

                    console.log('checking', top);
                    console.log('against', topPair);
                    if(top === topPair){
                        stack.pop();
                    } else{
                        return false;
                    }
                    break;
            }
        }
        return stack.length == 0 ? true : false;
    }
    
    return checkIsBalanced(s) ? "YES" : "NO";
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const s: string = readLine();

        const result: string = isBalanced(s);

        ws.write(result + '\n');
    }

    ws.end();
}
