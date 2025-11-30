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

//todo ================  Problem: Check if a string is a palindrome. =============

// 👉 Problem:
// A palindrome is a string that reads the same forward and backward.

// Input: "madam" → Output: true

// Input: "hello" → Output: false

//? Solution 1: Reverse and Compare (simple way)

// function isPalindrome(str){

//     const original = str.toLowerCase();
//     const reversed = original.split('').reverse().join('')
//     return original === reversed;

// }
// This compares the original string 'str' (e.g., "madaM")
// with the reversed lowercase string 'reversed' (e.g., "madam").
// "madaM" !== "madam"

// console.log(isPalindrome("madaM")) //true
// console.log(isPalindrome("Hello")) //false

//?-----------------------------------------------------------------------------------------------------------------------------

//? Solution 2: Ignore non-alphanumeric characters & case (real-world)

// function isPalindrome(str){
//     const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '')
//     return clean === clean.split('').reverse().join('')
// }

// toLowerCase() → make case-insensitive.
// replace(/[^a-z0-9]/g, '') → remove spaces, punctuation, etc.
// Compare reversed string with original.

// console.log(isPalindrome("A man, a plan, a canal: Panama"))

//? =================================================================================================

//? Unicode-safe version (emojis, special chars)

// function isPalindrome(str){

//     const arr = Array.from(str)
//     return arr.join('') === arr.reverse().join('')
// }

// console.log(isPalindrome("✌️⚠️💖")) //false
// console.log(isPalindrome("💖💖💖")) //true

//todo ========================================= Problem : Count occurrences of each character in a string. ========================================================

// 👉 Problem:
// Input: "banana"
// Output: { b: 1, a: 3, n: 2 }
// This is a frequency counter problem — very common in interviews.

//? Solution 1: Using a simple for...of loop

// function countChar(str){

//     const acc = {};

//     for ( const char of str){
//         acc[char] = (acc[char] || 0) + 1
//     }

//     return acc;
// }

// Create empty object acc.
// Loop through each character.
// If char already exists in map → increment.
// Otherwise, set to 1.

// console.log(countChar("ghsiudqdjjjjj")) // { g: 1, h: 1, s: 1, i: 1, u: 1, d: 2, q: 1, j: 5 }

//? ===========================================================================================

//? Solution 2: Using reduce()

// function countChar(str){
//     const result = str.toLowerCase().split('').reduce((acc, char)=>{
//         if(char === ' '){
//             return acc
//         }
//         acc[char] = (acc[char] || 0) + 1
//         return acc
//     }, {})

//     return result
// }

// console.log(countChar("Mjjjjhkiuio o")) //{ h: 2, j: 4, k: 1, i: 2, u: 1, o: 2 }

//? =============================================================================================================

//? Solution 3: Using Array.from() + reduce (Unicode safe)

// function countChar(str){

//     return Array.from(str).reduce((acc,char)=>{
//         acc[char] = (acc[char] || 0) + 1

//         return acc
//     }, {})
// }

// console.log(countChar("👌😘💕💕"))

//? ==============================================================================================================================

//? Solution 4: Case-insensitive + Ignore spaces (real-world)

// function charCount(str) {
//   const clean = str.toLowerCase().replace(/[^a-z]/g, '');
//   return clean.split('').reduce((acc, ch) => {
//     acc[ch] = (acc[ch] || 0) + 1;
//     return acc;
//   }, {});
// }

// console.log(charCount("Hello World!!")); // { h:1, e:1, l:3, o:2, w:1, r:1, d:1 }

//todo =================Problem :Find the first non-repeating character in a string.==================================
// 👉 Problem:
// Input: "swiss" → Output: "w" (since w is the first char that does not repeat)
// Input: "aabbcc" → Output: null (no unique character)
// This is another very common interview question because it checks your understanding of frequency counting + order preservation.

//? Solution 1: Using Frequency Map (Two-pass solution)

// function firstNonRepeatingChar(str){

//     const freq = {};

//     first pass count frequency

//     for(let char of str ){
//         freq[char] = (freq[char] || 0) + 1;
//     }

//   ===== second pass = find firsr char witn count 1 =========

//     for(const char of str){
//         if(freq[char] === 1) return char
//     }

//     return null
// }

// console.log(firstNonRepeatingChar("swiss")); // "w"
// console.log(firstNonRepeatingChar("aabbcc")); // null

//? ===============================================================================

//? Solution 2: Using reduce() for frequency, then loop

// function firstNonRepeatingChar(str){
//     const freq = str.split('').reduce((acc,char)=>{
//         acc[char] = (acc[char] || 0) + 1
//         return acc
//     }, {})
//     return  str.split('').find((char) => freq[char] === 1) || null;
// }

// console.log(firstNonRepeatingChar('swiss')) // w

//? ==========================================================================================================================================

//todo ==================== Problem : Reverse words in a sentence. ================================================

// 👉 Problem:
// Input: "I love JavaScript"
// Output: "JavaScript love I"
// ⚡ Key point → We are reversing words, not individual characters.

//? Solution 1: Split → Reverse → Join (Most Common)

// function reverseWords(str){
//   const result = str.split(' ').reverse().join(' ');
//   return result
// }

// console.log(reverseWords("I love JavaScript")) // "JavaScript love I"

// .split(" ") → turns string into array of words.
// → "I love JavaScript" → ["I", "love", "JavaScript"].
// .reverse() → reverses order → ["JavaScript", "love", "I"].
// .join(" ") → combine words with spaces.

//? ==========================================================================================================================================

//? Solution 2: Manual Loop (Without built-in reverse)

//  function reverseWords(sentence){

//     const words = sentence.split(" ");

//     const result = []

//     for(let i = words.length - 1; i >=0; i--){
//         result.push(words[i])
//     }

//     return result.join(" ");
//  }

//  console.log(reverseWords("I love JavaScript"))

//todo ====================== Problem : Capitalize the first letter of each word. ==========================================
// 👉 Problem:
// Input: "hello world from javascript"
// Output: "Hello World From Javascript"
//⚡ Key point → Capitalize first letter of each word, keep the rest lowercase.

//? ====== Solution 1: Using split + map ===========

// function CapitalizeFirstWord(sentence){

//     return sentence.split(" ").map((word)=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
// }
// console.log(CapitalizeFirstWord("i love frontend + webDevelopment")) // I Love Frontend + Webdevelopment

// split(" ") → array of words: ["hello","world","from","javascript"].
// map() → for each word:
// charAt(0).toUpperCase() → first letter uppercase
// slice(1).toLowerCase() → rest of word lowercase
// join(" ") → join words into sentence.

//? ==========================================================================================================================================

//todo =============== Problem: Check if a string contains a substring (case-sensitive & insensitive)

// Input: "Hello World", substring "World" → Output: true
// Input: "Hello World", substring "world" → Output:
// Case-sensitive → false
// Case-insensitive → true

//? Solution 1: Using includes() (ES6+)

// function containsSubstring(sent, sub){
//     return sent.includes(sub)
// }

// case senseative
// console.log(containsSubstring("Hello World", "World")); // true
// console.log(containsSubstring("Hello World", "world")); // false

//? ==========================================================================================================================================

//? Solution 2: Case-insensitive using toLowerCase()

// function containsSubstringCI(sentence, substr){
//   return sentence.toLowerCase().includes(substr.toLowerCase())
// }

// console.log(containsSubstringCI("Hello World", "world")); // true

//? ==========================================================================================================================================

//todo ================ Problem: Find the longest word in a string. ====================================================

// Problem:
// Input: "I love JavaScript programming"
// Output: "JavaScript"
// ⚡ Key idea → Split sentence into words, then find the word with maximum length.

//? Solution 1: Using split + loop

// function longestWord(sentence){

//     const words = sentence.split(' ')
//     let longest = '';

//     for( const word of words){
//         if(word.length > longest.length){
//             longest = word;
//         }
//     }
//     return longest
// }

// console.log(longestWord("I love JavaScript programming"));  //programming

//? ==========================================================================================================================================

//? Solution 2: Using reduce

// function longestWord(sentence){
//     return sentence.split(" ").reduce((longest, word ) => word.length > longest.length ? word : longest, "")
//     Note: here split with space " "
// }

// console.log(longestWord("I love JavaScript programming"));  //programming

//? ==========================================================================================================================================

//? Solution 3: Using sort

// function longestWord(sentence) {
//   const result = sentence.split(" ").sort((a, b) => b.length - a.length);

//   return result[0]

// }

// console.log(longestWord("I love JavaScript programming")); // "JavaScript"

//? ==========================================================================================================================================

//todo ===================== Problem: Count vowels and consonants in a string ================================

// Problem:
// Input: "Hello World"
// Output: { vowels: 3, consonants: 7 }
// ⚡ Key idea → Loop through string, check each character if it’s a vowel or consonant.

// function countVowelsConsonants(str){
//     const vowelList = 'aeiouAEIOU';
//     let vowels = 0;
//     let consonants = 0;

//     for( const char of str){
//         if(/[a-zA-Z]/.test(char)){ //only letters
//             if(vowelList.includes(char)) vowels++;
//             else consonants++;
//         }
//     }

//     return {vowels, consonants}
// }
// Loop through each character.
// Check if it’s a letter using regex /[a-zA-Z]/.
// If it’s in "aeiouAEIOU" → vowel, else → consonant.

// console.log(countVowelsConsonants("Hello World")); // { vowels: 3, consonants: 7 }

//? ==========================================================================================================================================

//? Solution 2: Using reduce

// function countVowelsConsonants(str){

//     const vowelList= "aeiouAEIOU";

//     return Array.from(str).reduce(
//         (acc, char)=>{
//             if(/[a-zA-Z]/.test(char)){
//                 vowelList.includes(char) ? acc.vowels++ : acc.consonants++
//             }
//             return acc
//         },{vowels:0, consonants:0}
//     )

// }

// console.log(countVowelsConsonants("Hello World"));

// =========================================================================================================

//todo Remove duplicate characters (preserve order)

//? Using filter()

// function removeDuplicates(str) {
//   return [...str].filter((cha, i, arr) => arr.indexOf(cha) === i).join("");
// }

// console.log(removeDuplicates("programming"));  //progamin

//? Using Set directly (loses order if not needed)

// function removeDuplicates(str){
//   return [...new Set(str)].join('')
// }

// console.log(removeDuplicates("programming"));  //progamin

// =========================================================================================================

//todo Question 2: Check if two strings are anagrams

// 🧩 Problem
// Check if both strings contain the same letters in any order (case-insensitive).

// Input: "listen", "silent"
// Output: true

// function isAnagram(str1, str2) {
//   const test1 = str1.toLowerCase().split("").sort().join("");
//   const test2 = str2.toLowerCase().split("").sort().join("");

//   return test1 === test2
//     ? "Given string is Anagram"
//     : "Given string is not Anagram";
// }

// console.log(isAnagram("listen", "silent")); //true  //"Given string is Anagram"

// =========================================================================================================

//todo Convert a query string into Object:
// INPUT : "name=John&age=25"
// OUTPUT : { name: "John", age: "25" }

//? Using split() and reduce() (manual parsing)

// function queryToObject(query) {
//   return query.split("&").reduce((acc, pair) => {
//     const [key, value] = pair.split("=");
//     acc[key] = value;

//     return acc;
//   }, {});
// }

// console.log(queryToObject("name=John&age=25")); //{ name: 'John', age: '25' }

//====================================================================================================================

//todo find repeated or duplicate characters in a string

//Given a string, return all characters that appear more than once.
// Input:  "programming"
// Output: ["r", "g", "m"]

//? Using reduce() (Functional Programming style)

// function findDuplicateChar(str) {

//     const freq = [...str].reduce((acc, char)=>{
//             acc[char] = (acc[char] || 0) + 1;
//             return acc;
//     }, {})

//     const unique = Object.keys(freq).filter((char)=> freq[char] > 1);

//     return{ freq, unique}

// }

// console.log(findDuplicateChar("programming"));  //["r", "g", "m"]  Note : Incase only return unique

// {
//   freq: { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 },
//   unique: [ 'r', 'g', 'm' ]
// }

//====================================================================================================================

//todo find repeated or duplicate word in a string/sentence.

// function findDuplicateWords(sentence) {
//   const words = sentence.toLowerCase().replace(".", "").split(/\s+/); //replace(/[^\w\s]/g, '') // remove punctuation

//   const wordCount = words.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
//   }, {});

//   const duplicates = Object.keys(wordCount).filter(
//     (word) => wordCount[word] > 1
//   ); // Make sure You use [word] [bracket]
//   return duplicates;
// }

// console.log(findDuplicateWords("This is a test. This test is simple.")); // ["this", "is", "test"]



