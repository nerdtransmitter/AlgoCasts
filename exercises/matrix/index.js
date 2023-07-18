// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];
  // create array of n empty arrays
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  console.log("Initial results:", results);

  // start a counter at 1
  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  // As long as (start column <= end column) AND (start row <= end row)
  while (startCol <= endCol && startRow <= endRow) {
    console.log("Start of while loop, results:", results);

    // Top row
    for (let col = startCol; col <= endCol; col++) {
      results[startRow][col] = counter;
      counter++;
      console.log("In first for loop", results);
    }
    startRow++; // increment start row

    // Right column (endCol)
    for (let row = startRow; row <= endRow; row++) {
      results[row][endCol] = counter;
      counter++;
    }
    endCol--; // decrement end column

    // Bottom row
    if (startRow <= endRow) {
      for (let col = endCol; col >= startCol; col--) {
        results[endRow][col] = counter;
        counter++;
      }
      endRow--; // increment start row
    }

    // Left column (startCol)
    if (startCol <= endCol) {
      for (let row = endRow; row >= startRow; row--) {
        results[row][startCol] = counter;
        counter++;
      }
      startCol++;
    }
  }
  console.log("Final results:", results);
  return results;
}

module.exports = matrix;

// function matrix(n) {
//   const results = new Array(n).fill([]);
//   let counter = 1;

//   // As long as (start column <= end column) AND (start row <= end row)
//   while (results[0][0] <= results[0][n - 1] && results[0] <= results[n - 1]) {
//     for (let col = 0; col < n; col++) {
//       results[0][col] = counter;
//       counter++;
//     }
//     results[i + 1]; // increment start row
//     for (let i = 0; i < n; i++) {
//       results[i][n - 1] = counter;
//       counter++;
//     }
//     results[i][n - 1 - 1]; // decrement end column
//     for (let col = 0; col < n; col++) {
//       results[0][col] = counter;
//       counter++;
//     }
//     results[i + 1 + 1];
//     results[i + 1]; // increment start row
//     for (let i = 0; i < n; i++) {
//       results[i][n - 1] = counter;
//       counter++;
//     }
//     results[i][n - 1]--;
//   }
//   return results;
// }
