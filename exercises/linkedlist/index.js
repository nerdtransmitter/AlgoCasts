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
    this.head = new Node(data, this.head);
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
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while(node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return; // rest of code does not need to be executed if list size = 1
    }

    let previous = this.head;
    let node = previous.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null; // no need for conditional checking we're at end of list because of the while loop
  }

  insertLast(data) {
    const last = this.getLast();

    // if (!last) {
    //   this.head = new Node(data);
    // }

    // last.next = new Node(data);

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
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
    if (i === 0) {
      if (!this.head) {
        this.head = new Node(data);
        return;
      }
      this.head = new Node(data, this.head);
      return;
    }

    if (i > this.size() - 1) {
      this.getAt(this.size() - 1).next = new Node(data);
      return;
    }
    const previous = this.getAt(i - 1);
    previous.next = new Node(data, previous.next);
  }
}

module.exports = { Node, LinkedList };
