// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reverse().join('');
};

module.exports = reverse;

// OPTION 2 WITH FOR LOOP
  // let reversed = '';

	// for (let char of str) {
	// 	reversed = char + reversed;
	// }

	// return reversed;


// OPTION 3 WITH REDUCE
  //  return str.split('').reduce((rev, char) => char + rev, '');
