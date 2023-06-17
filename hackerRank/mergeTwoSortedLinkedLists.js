'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
  // nested conditionals
  /*
  let sortedHead = {};
  let sorted = sortedHead;

  while (head1 != null || head2 != null) {
    if (head1 != null && head2 != null) {
      if (head1.data <= head2.data) {
        sorted.data = head1.data;
        head1 = head1.next;
      } else {
        sorted.data = head2.data;
        head2 = head2.next;
      }
      sorted.next = {};
      sorted = sorted.next;
    } else if (head1 != null) {
      sorted.data = head1.data;
      head1 = head1.next;
      if (head1 != null) {
        sorted.next = {};
        sorted = sorted.next;
      } else {
        sorted.next = null; // Fix: Update sorted.next to null
      }
    } else {
      sorted.data = head2.data;
      head2 = head2.next;
      if (head2 != null) {
        sorted.next = {};
        sorted = sorted.next;
      } else {
        sorted.next = null; // Fix: Update sorted.next to null
      }
    }
  }
  return sortedHead;
  */
  // recursion
  const sortedHead = {};
  let sorted = sortedHead;

  while (head1 && head2) {
    if (head1.data <= head2.data) {
      sorted.next = { data: head1.data };
      head1 = head1.next;
    } else {
      sorted.next = { data: head2.data };
      head2 = head2.next;
    }
    sorted = sorted.next;
  }

  sorted.next = head1 || head2;

  return sortedHead.next;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llist1Count = parseInt(readLine(), 10);

        let llist1 = new SinglyLinkedList();

        for (let i = 0; i < llist1Count; i++) {
            const llist1Item = parseInt(readLine(), 10);
            llist1.insertNode(llist1Item);
        }
      
      	const llist2Count = parseInt(readLine(), 10);

        let llist2 = new SinglyLinkedList();

        for (let i = 0; i < llist2Count; i++) {
            const llist2Item = parseInt(readLine(), 10);
            llist2.insertNode(llist2Item);
        }

        let llist3 = mergeLists(llist1.head, llist2.head);

        printSinglyLinkedList(llist3, " ", ws)
        ws.write("\n");
    }

    ws.end();
}
