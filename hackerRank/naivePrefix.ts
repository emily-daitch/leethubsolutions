'use strict';

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
 * Complete the 'noPrefix' function below.
 *
 * The function accepts STRING_ARRAY words as parameter.
 */

function noPrefix(words: string[]): void {
    // Write your code here
    let i = 0;
    let earliest = 1000000; //10^6
    for(let word of words){
        //console.log(word);
        if(i == words.length - 1){
            if(earliest < 1000000){
                console.log('BAD SET');
                console.log(words[earliest]);
                return;
            }else{
                console.log('GOOD SET');
                return;
            }
        }
        for(let j = i + 1; j < words.length; j++){
            if(words[j].startsWith(word)){
                if(j < earliest){
                    //console.log('found');
                    earliest = j;
                    break;   
                }
            }
        }
        i++;
    }
}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    let words: string[] = [];

    for (let i: number = 0; i < n; i++) {
        const wordsItem: string = readLine();
        words.push(wordsItem);
    }

    noPrefix(words);
}
