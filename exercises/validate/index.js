// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // CHECK IF LEFT HAND SIDE OUT OF BOUNDS THEN RIGHT HAND SIDE
  // DO NOT YET HAVE MAX OR MIN SET
  if (max !== null && node.data > max) {
    return false;
  }

  if (min != null && node.data < min) {
    return false;
  }

  // RECURSION
  if (node.left && !validate(node.left, min, node.data)) { // initializing max to value of node.data
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) { // initializing min to value of node.data
    return false;
  }

  return true;
}

module.exports = validate;
