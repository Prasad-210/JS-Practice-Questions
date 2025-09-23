//todo =========== Problem: Reverse a String ==================

// Input → "hello"
// Output → "olleh"

//? 1. Using Built-in Functions (split + reverse + join)

// function reverseWithbuiltin(s){
//     return s.split('').reverse().join('');
// }

// split(''): turns string → array → ['h','e','l','l','o']
// reverse(): flips array → ['o','l','l','e','h']
// join(''): array → string → "olleh"

// console.log(reverseWithbuiltin("hello"))  // olleh

//?-----------------------------------------------------------------------------------------------------------------------------

//? 2. Using Spread Operator ([...s])

// function reverseWithSpread(s){
//   return [...s].reverse().join('')                         
// } 

 //[...s] splits string into array using iterators → handles Unicode better (e.g. emojis).
 
// console.log(reverseWithSpread("hello"))  //olleh

//?-----------------------------------------------------------------------------------------------------------------------------

//? 3. Loop from End to Start

//Iterates from last char to first, builds new string.

// function reverseWithLoop(s){
//   let result = '';

//  for(let i = s.length-1; i >= 0 ; i--){
//     result = result + s[i];
//  }

//  return result
// }

// console.log(reverseWithLoop("hello"))   //olleh

//?-----------------------------------------------------------------------------------------------------------------------------

//? 4. Functional Style (reduce)

// function reverseWithReduce(s){
//  return s.split('').reduce((acc, curVal)=> curVal + acc, '');
// }

// split(''): turns string → array → ['h','e','l','l','o']
// reduce builds reversed string by prepending characters.
// curVal + acc → to add in "" in reverse direction

// console.log(reverseWithReduce("hello"))   //olleh

//?-----------------------------------------------------------------------------------------------------------------------------

//? 5.Recursive Approach6. Recursive Approach

// function reverseRecursive(s){
//   if(s === '') return '';
  
//   return reverseRecursive(s.slice(1)) + s[i];
// }

// Base case: empty string → return "".
// Otherwise: reverse of "ello" + "h".
// Works by breaking down into smaller problems.

// console.log(reverseRecursive("hello"))

//?-----------------------------------------------------------------------------------------------------------------------------

//? 6.Unicode-Safe (Emoji handling)

// function reverseUnicode(s){
//   return Array.from(s).reverse().join('')
// }

//Array.from(s) respects Unicode code points (handles emojis better than split('')).
// console.log(reverseUnicode("✌️hello"))

//?-----------------------------------------------------------------------------------------------------------------------------

//todo ================  Problem: Palindrome Check =============

// 👉 A palindrome is a word/phrase that reads the same forward and backward.
// Example: "madam", "racecar", "121".
// Input → "madam"
// Output → true

// Input → "hello"
// Output → false