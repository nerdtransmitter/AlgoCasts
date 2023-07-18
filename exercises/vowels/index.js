// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// REGEXP SOLUTION
function vowels(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

// ITERATIVE SOLUTION
// function vowels(str) {
//   let count = 0;

//   for (let c of str) {
//     if (c.match(/[aeiou]/i)) {
//       count += 1;
//     }
//   }
//   return count;
// }

module.exports = vowels;
