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
 * Complete the 'towerBreakers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 */

// My original solution:
// function towerBreakers(n: number, m: number): number {
//     // Write your code here
//     let towers: number[] = new Array(n).fill(m); // create towers
//     let player: number = 1; // start with player 1
    
//     let movePossible: boolean = true;
//     while(movePossible) {
//         console.log('player is ', player);
//         towers.sort((a, b) => b-a); // make tower[0] tallest tower
//         console.log('sorted towers', towers);
        
//         let gameEnded: boolean = false;
//         if(towers.length === 1 || towers[1] === 1) {
//             // we can end the game and players play 'optimally'
//             // so we should remove to leave one piece
//             console.log('choose optimally to remove ', towers[0]-1);
//             towers[0] -= towers[0]-1;
//             gameEnded = true;
//         }
        
//         if(!gameEnded) {
//             if(towers[0] > 3) {
//                 let found: boolean = false;
//                 for(let toRemove: number = 2; toRemove < towers[0]; toRemove++) {
//                     console.log('check toRemove ', toRemove);
//                     if(towers[0] % toRemove === 0) { // find smallest able to remove
//                         console.log('choose to remove ', toRemove);
//                         towers[0] -= toRemove;
//                         found = true;
//                     }
//                 }
//                 if(!found) {
//                     console.log('cant find evenly divisible > 2, choose to remove ', 1);
//                     towers[0] -= 1;
//                 }
//             } else {
//                 for(let toRemove: number = 1; toRemove < towers[0]; toRemove++) {
//                     if(towers[0] % toRemove === 0) { // find smallest able to remove
//                         console.log('choose to remove ', toRemove);
//                         towers[0] -= toRemove;
//                     }
//                 }
//             }
//         }
        
//         if(towers[n - 1] === 1) {
//             console.log('move is not possible, player is ', player);
//             movePossible = false; // end game
//         }
//         player = player === 1 ? 2 : 1; // change player
//     }
    
//     return player === 1 ? 2 : 1; // return last player to make a move successfully
// }

// My solution with ChatGPT suggestions for functional programming practices
// Interestingly, replaced while condition with while(true) and break... perhaps this is more verbose, I don't prefer it
// Traditional loops replaced with array iteration and .find (I like this in the right scenario, definitely tougher to pull off 
// on the fly in a coding interview situation (at least for now)
// Removal of the "found" variable - using result nullishness from .find (love this)
function towerBreakers(n: number, m: number): number {
  let towers: number[] = new Array(n).fill(m); // create towers
  let player: number = 1; // start with player 1

  while (true) {
    console.log('player is', player);
    towers.sort((a, b) => b - a); // make tower[0] tallest tower
    console.log('sorted towers', towers);

    if (towers.length === 1 || towers[1] === 1) {
      // we can end the game and players play 'optimally'
      // so we should remove to leave one piece
      console.log('choose optimally to remove', towers[0] - 1);
      towers[0] -= towers[0] - 1;
      break;
    }

    if (towers[0] > 3) {
      const toRemove = Array.from({ length: towers[0] - 2 }, (_, i) => i + 2).find(
        (num) => towers[0] % num === 0
      );
      console.log('choose to remove', toRemove || 1);
      towers[0] -= toRemove || 1;
    } else {
      const toRemove = Array.from({ length: towers[0] - 1 }, (_, i) => i + 1).find(
        (num) => towers[0] % num === 0
      );
      console.log('choose to remove', toRemove);
      towers[0] -= toRemove;
    }

    if (towers[n - 1] === 1) {
      console.log('move is not possible, player is', player);
      break; // end game
    }
    player = player === 1 ? 2 : 1; // change player
  }

  return player;// === 1 ? 2 : 1; // return last player to make a move successfully
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

        const n: number = parseInt(firstMultipleInput[0], 10);

        const m: number = parseInt(firstMultipleInput[1], 10);

        const result: number = towerBreakers(n, m);

        ws.write(result + '\n');
    }

    ws.end();
}
