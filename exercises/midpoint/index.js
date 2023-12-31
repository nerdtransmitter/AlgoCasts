// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) { // if even, won't have a fast.next.next so will exit while loop and return slow
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow; // if fast at the end, slow must be at midpoint because adavancing at half the speed
}

module.exports = midpoint;
