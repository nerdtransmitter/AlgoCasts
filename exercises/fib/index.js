// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// ITERATIVE SOLUTION
// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     result.push(result[i - 2] + result[i - 1]);
//   }

//   return result[n];
// }

// RECURSIVE SOLUTION WITH MEMOIZATION
function memoize(fn) {
  const cache = {}; // where we store all of our calls to the fast version of our function
  return function(...args) {
  // since making a generic version of memorize usable with other functions, don't know how many args so use spread operator
    if (cache[args]) {
      // if cache[args] exist
      return cache[args];
    }

    const result = fn.apply(this, args);
    // store result we just created in cache object
    cache[args] = result;

    return result;
  };
}

function fib(n) {
	if (n < 2) { // base case
		return n;
	}

	return fib(n-1) + fib(n - 2); // recursive step
}

fib = memoize(fib);

// RECURSIVE SOLUTION
// function fib(n) {
// 	if (n < 2) { // base case
// 		return n;
// 	}

// 	return fib(n-1) + fib(n - 2); // recursive step
// }

module.exports = fib;
