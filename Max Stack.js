/*
Implement a LIFO stack that has:
- push(), 
- pop(), 
- max() functions,
  
Where max() returns the maximum value in the stack.
All of these functions should run in O(1) time.
*/
log = console.log;

class Stack {
  constructor() {
    this.stack = [];
    this.currentIndex = 0;

    this.maxStack = [];
    this.maxCurrentIndex = 0;
  }

  push(el) {
    this.stack[this.currentIndex++] = el;
    if (
      this.maxCurrentIndex === 0 ||
      this.maxStack[this.maxCurrentIndex - 1] <= el
    ) {
      this.maxStack[this.maxCurrentIndex++] = el;
    }
  }

  pop() {
    if (this.currentIndex - 1 >= 0) {
      const popValue = this.stack[--this.currentIndex];
      if (this.maxStack[this.maxCurrentIndex - 1] === popValue)
        this.maxCurrentIndex--;

      return popValue;
    } else console.log("Stack Underflow!");
  }

  max() {
    return this.maxStack[this.maxCurrentIndex - 1];
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.oldMax = null;
  }
}

class LinkedStack {
  constructor() {
    this.head = null;
    this.localMax = null;
  }

  push(el) {
    const node = new Node(el);
    if (!this.head) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }

    if (!this.localMax || node.value > this.localMax) {
      node.oldMax = this.localMax;
      this.localMax = node.value;
    }
  }

  pop() {
    if (!this.head) throw new Error("Stack Underflow");

    const popNode = this.head;
    this.head = this.head.next;

    if (!popNode.value) return this.localMax;

    this.localMax = popNode.oldMax;
    return popNode.value;
  }

  max() {
    return this.localMax;
  }
}
