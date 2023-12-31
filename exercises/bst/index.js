// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create and insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    // if data is smaller than current node's data and current node has a left, pass it on to the node's left (recusive step)
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      // if it doesn't yet have a left, assign a new Node(data) to it
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (data === this.data) {
      return this;
    } else if (data > this.data && this.right) {
      return this.right.contains(data); // with recursion must always return! because contains function needs to return something
    } else if (data < this.data && this.left) {
      return this.left.contains(data);
    }
    return null;
  }
}

module.exports = Node;
