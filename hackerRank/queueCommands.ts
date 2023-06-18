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

function main() {
    // Enter your code here
    // Stack class
    interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
    }
    
    class Stack<T> implements IStack<T> {
        private storage: T[] = [];

        constructor(private capacity: number = Infinity) {}

        push(item: T): void {
            if (this.size() === this.capacity) {
                throw Error("Stack reached max capacity, cannot add more items");
            }
            //LIFO
            //this.storage.push(item);
            //FIFO
            this.storage.unshift(item);
        }

        pop(): T | undefined {
            return this.storage.pop();
        }

        peek(): T | undefined {
            return this.storage[this.size() - 1];
        }

        size(): number {
            return this.storage.length;
        }
    }
    
    let numQueries = Number(readLine());
    let stack: Stack<string> = new Stack<string>();

    for(let i = 0; i < numQueries; i++){
        let line = readLine();
        let command = line.split(' ');
        
        //console.log('size', stack.size());
        switch(command[0]){
            case '1':
                //console.log('enqueue');
                stack.push(command[1]);
                break;
            case '2':
                //console.log('dequeue');
                stack.pop();
                break;
            case '3':
                //console.log('peak');
                console.log(stack.peek());
                break;
        }
    }

}
