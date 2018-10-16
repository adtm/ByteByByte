/*
  Given a linked list, 
  write a function to split the list into two equal halves.
*/
log = console.log;

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this.head;
    }

    let p = this.head;
    while (p.next) p = p.next;

    p.next = node;
    return node;
  }

  splitInHalf() {
    let hare = this.head;
    let turtle = this.head;

    while (hare) {
      hare = hare.next;
      if (!hare) break;

      turtle = turtle.next;
      hare = hare.next;
    }

    const toReturn = { ...turtle };
    turtle.next = null;

    return toReturn;
  }
}

const List = new LinkedList();
List.add(1);
List.add(2);
List.add(3);
List.add(4);

log(List.splitInHalf());
