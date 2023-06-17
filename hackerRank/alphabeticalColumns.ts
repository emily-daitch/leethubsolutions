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
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid: string[]): string {
    // Write your code here
    grid = grid.map(text => {
        const sortedChars = [...text].sort();
        return sortedChars.join("");
    });
    console.log('grid now', grid);
    
    const wordLength: number = grid[0].length;
    const gridLength: number = grid.length;
    
    for(let i = 0; i < wordLength; i++){
        for(let j = 0; j < gridLength - 1; j++){
            console.log('comparing', grid[j].charAt(i), grid[j + 1].charAt(i))
            if(grid[j].charCodeAt(i) > grid[j + 1].charCodeAt(i)){
                return 'NO';
            }
        }
    }
    
    return 'YES';
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const n: number = parseInt(readLine().trim(), 10);

        let grid: string[] = [];

        for (let i: number = 0; i < n; i++) {
            const gridItem: string = readLine();
            grid.push(gridItem);
        }

        const result: string = gridChallenge(grid);

        ws.write(result + '\n');
    }

    ws.end();
}
