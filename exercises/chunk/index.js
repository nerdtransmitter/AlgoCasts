// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // SOLUTION 2 USING WHILE LOOP AND SLICE METHOD
  const chunked = [];
  let index = 0;

  while (index < array.length ) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;


// function chunk(array, size) {
//   const chunked = [];

//   for (let ele of array) {
//     const last = chunked[chunked.length - 1]; // In JS chunked[-1] not supported

//     if (!last || last.length === size) {
//       chunked.push([ele]);
//     } else {
//        last.push(ele);
//     }
//   }

//   return chunked;
// }
