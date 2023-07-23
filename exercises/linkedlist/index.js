// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
    // this.head = new Node(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.getAt(0);
    // return this.head;
  }

  getLast() {
    return this.getAt(this.size() - 1);
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while(node.next) {
    //   node = node.next;
    // }

    // return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    // this.head = this.head.next;
    this.removeAt(0);
  }

  removeLast() {
    // if (!this.head) {
    //   return;
    // }

    // if (!this.head.next) {
    //   this.head = null;
    //   return; // rest of code does not need to be executed if list size = 1
    // }

    // let previous = this.head;
    // let node = previous.next;
    // while (node.next) {
    //   previous = node;
    //   node = node.next;
    // }
    // previous.next = null; // no need for conditional checking we're at end of list because of the while loop
    this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    const lastIndex = this.size;
    this.insertAt(data, lastIndex + 1);
    // const last = this.getLast();

    // if (last) {
    //   last.next = new Node(data);
    // } else {
    //   this.head = new Node(data);
    // }
  }

  getAt(i) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === i) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null; // if index is bigger than index of last node or if node === null
  }

  removeAt(i) {
    if (!this.head) {
      return;
    }

    if (i === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(i - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, i) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (i === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(i - 1) || this.getLast(); // get previous index or if falsy get last and set to previous
    previous.next = new Node(data, previous.next);
  }
}

module.exports = { Node, LinkedList };
