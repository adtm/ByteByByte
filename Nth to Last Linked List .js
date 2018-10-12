/**
 * Given a linked list, and an input n.
 * Write a function that returns the nth-to-last element of the linked list.
 */
log = console.log;

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
    this.length = 1;
  }

  add(data) {
    const node = new Node(data);

    let p = this.head;
    while (p.next) p = p.next;

    p.next = node;
    this.length++;

    return node;
  }

  nFromTailWithLength(n) {
    let p = this.head;
    for (let i = 0; i < this.length - n - 1 && p.next; ++i) p = p.next;

    return p.data;
  }

  nFromTailPointers(n) {
    let p = this.head;
    let f = this.head;

    for (let i = 0; i < n; ++i) {
      if (!p.next) return null;
      p = p.next;
    }

    while (p.next) {
      p = p.next;
      f = f.next;
    }

    return f.data;
  }
}

const List = new LinkedList(1);
List.add(2);
List.add(3);
List.add(4);
List.add(5);

log(List.nFromTailPointers(2));
