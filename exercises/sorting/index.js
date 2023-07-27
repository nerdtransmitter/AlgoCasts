// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) { // inner loop offset by one from the index
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1]; // store lesser so can swap the two values
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
  // Return the sorted array
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (i !== indexOfMin) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {
  let results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  if (right.length) {
    results.push(...right);
  }

  if (left.length) {
    results.push(...left);
  }

  return results;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
